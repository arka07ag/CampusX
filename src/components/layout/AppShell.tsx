"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, CalendarCheck, LineChart, Briefcase, Building2, Settings, Search, Bell, MessageSquare, Menu, PanelLeftClose, GraduationCap } from "lucide-react";

const nav = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard }, { href: "/students", label: "Students", icon: Users },
  { href: "/face-recognition", label: "Face Recognition", icon: LayoutDashboard }, { href: "/students", label: "Students", icon: Users },
  { href: "/attendance", label: "Attendance", icon: CalendarCheck }, { href: "/learning-analytics", label: "Learning Analytics", icon: LineChart },
  { href: "/career-jobs", label: "Career & Jobs", icon: Briefcase }, { href: "/hostel", label: "Hostel", icon: Building2 },
  { href: "/settings", label: "Settings", icon: Settings },
];

export default function AppShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<"" | "notif" | "user">("");
  const side = (
    <aside className={`flex h-full flex-col bg-navy text-white transition-all ${collapsed ? "w-16" : "w-[220px]"}`}>
      <div className="flex items-center gap-2 px-4 py-5">
        <GraduationCap className="h-6 w-6 shrink-0 text-blue-400" />
        {!collapsed && <div><div className="font-semibold leading-none">CampusX</div><div className="text-[10px] text-slate-400">Admin</div></div>}
      </div>
      <nav className="flex-1 space-y-1 px-2">
        {nav.map(({ href, label, icon: Icon }) => {
          const active = path === href || path.startsWith(href + "/");
          return (<Link key={href} href={href} title={label} onClick={() => setOpen(false)}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${active ? "bg-brand text-white" : "text-slate-300 hover:bg-white/10"}`}>
            <Icon className="h-4 w-4 shrink-0" />{!collapsed && label}</Link>);
        })}
      </nav>
      <button onClick={() => setCollapsed(!collapsed)} className="m-3 hidden items-center gap-2 rounded-lg px-3 py-2 text-xs text-slate-400 hover:bg-white/10 lg:flex">
        <PanelLeftClose className="h-4 w-4" />{!collapsed && "Collapse"}</button>
    </aside>
  );
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="hidden lg:block">{side}</div>
      {open && (<div className="fixed inset-0 z-40 flex lg:hidden"><div className="h-full">{side}</div><div className="flex-1 bg-black/40" onClick={() => setOpen(false)} /></div>)}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="relative flex items-center gap-3 border-b border-slate-200 bg-white px-4 py-3">
          <button className="lg:hidden" onClick={() => setOpen(true)} aria-label="Menu"><Menu className="h-5 w-5" /></button>
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input placeholder="Search students, courses, jobs..." className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm outline-none focus:border-brand" />
          </div>
          <div className="ml-auto flex items-center gap-3">
            <button onClick={() => setMenu(menu === "notif" ? "" : "notif")} className="relative"><Bell className="h-5 w-5 text-slate-500" /><span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500" /></button>
            <MessageSquare className="hidden h-5 w-5 text-slate-500 sm:block" />
            <button onClick={() => setMenu(menu === "user" ? "" : "user")} className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-xs font-semibold text-white">AD</span>
              <span className="hidden text-left text-xs sm:block"><b className="block text-sm">Admin</b><span className="text-slate-500">Administrator</span></span>
            </button>
          </div>
          {menu && (<div className="absolute right-4 top-14 z-30 w-56 rounded-lg border border-slate-200 bg-white p-2 text-sm shadow-lg">
            {menu === "notif" ? ["3 students below attendance threshold", "New registration: Arjun Sen", "2 hostel requests pending"].map((t) => <div key={t} className="rounded p-2 hover:bg-slate-50">{t}</div>)
              : ["Profile", "Settings", "Sign out"].map((t) => <div key={t} className="rounded p-2 hover:bg-slate-50">{t}</div>)}
          </div>)}
        </header>
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}
