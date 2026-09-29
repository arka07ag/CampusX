"use client";
import { useState } from "react";
import { Users, UserCheck, CalendarCheck, Briefcase, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { kpis, registrations, readiness, recent, attention } from "@/lib/data";

const icons = { users: Users, check: UserCheck, cal: CalendarCheck, brief: Briefcase };
const badge = (s: string) => s === "Active" ? "bg-emerald-50 text-emerald-700" : s === "Monitor" ? "bg-amber-50 text-amber-700" : "bg-red-50 text-red-700";

export default function Dashboard() {
  const [range, setRange] = useState("Last 30 days");
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div><h1 className="text-xl font-semibold">Good morning, Admin</h1>
          <p className="text-sm text-slate-500">Monitor student engagement, learning progress and career readiness.</p></div>
        <select value={range} onChange={(e) => setRange(e.target.value)} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm">
          {["Last 30 days", "Last 7 days", "This month", "This year"].map((r) => <option key={r}>{r}</option>)}</select>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((k) => { const I = icons[k.icon as keyof typeof icons]; return (
          <div key={k.label} className="card flex items-start gap-3">
            <span className={`rounded-lg p-2 ${k.color}`}><I className="h-5 w-5" /></span>
            <div><div className="text-xs text-slate-500">{k.label}</div><div className="text-2xl font-semibold">{k.value}</div>
              <div className="flex items-center gap-1 text-xs text-slate-500"><TrendingUp className="h-3 w-3 text-emerald-600" /><span className="font-medium text-emerald-600">{k.change}</span> {k.note}</div></div>
          </div>); })}
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="card"><h2 className="mb-2 text-sm font-semibold">Student Registrations</h2>
          <div className="h-56"><ResponsiveContainer><BarChart data={registrations}><XAxis dataKey="m" tickLine={false} axisLine={false} fontSize={12} /><YAxis tickLine={false} axisLine={false} fontSize={12} width={30} /><Tooltip /><Bar dataKey="v" fill="#2563EB" radius={[4, 4, 0, 0]} /></BarChart></ResponsiveContainer></div></div>
        <div className="card"><h2 className="mb-2 text-sm font-semibold">Career Readiness Distribution</h2>
          <div className="flex flex-wrap items-center gap-4">
            <div className="relative h-48 w-48"><ResponsiveContainer><PieChart><Pie data={readiness} dataKey="value" innerRadius={55} outerRadius={80} paddingAngle={2}>{readiness.map((r) => <Cell key={r.name} fill={r.color} />)}</Pie></PieChart></ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center"><b className="text-lg">1,248</b><span className="text-[10px] text-slate-500">Students</span></div></div>
            <ul className="space-y-2 text-xs">{readiness.map((r) => <li key={r.name} className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full" style={{ background: r.color }} />{r.name}<b className="ml-2">{r.value}%</b></li>)}</ul>
          </div></div>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="card overflow-x-auto"><div className="mb-2 flex justify-between"><h2 className="text-sm font-semibold">Recent Registrations</h2><a href="/students" className="text-xs text-brand">View All</a></div>
          <table className="w-full text-left text-sm"><thead className="text-xs text-slate-500"><tr><th className="py-2">Student</th><th>Dept</th><th>Sem</th><th>Registered On</th><th>Status</th></tr></thead>
            <tbody>{recent.map((r) => <tr key={r.name} className="border-t border-slate-100"><td className="py-2 font-medium">{r.name}</td><td>{r.dept}</td><td>{r.sem}</td><td>{r.on}</td><td><span className={`rounded-full px-2 py-0.5 text-xs ${badge(r.status)}`}>{r.status}</span></td></tr>)}</tbody></table></div>
        <div className="card overflow-x-auto"><div className="mb-2 flex justify-between"><h2 className="text-sm font-semibold">Students Requiring Attention</h2><a href="/students" className="text-xs text-brand">View All</a></div>
          <table className="w-full text-left text-sm"><thead className="text-xs text-slate-500"><tr><th className="py-2">Student</th><th>Attendance</th><th>Readiness</th><th>Status</th></tr></thead>
            <tbody>{attention.map((r) => <tr key={r.name} className="border-t border-slate-100"><td className="py-2 font-medium">{r.name}</td><td className="text-red-600">{r.att}%</td><td className="text-red-600">{r.cr}%</td><td><span className={`rounded-full px-2 py-0.5 text-xs ${badge(r.status)}`}>{r.status}</span></td></tr>)}</tbody></table></div>
      </div>
    </div>
  );
}
