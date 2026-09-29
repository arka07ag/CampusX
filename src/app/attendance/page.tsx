"use client";
import { useMemo, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, BarChart, Bar, Legend } from "recharts";
import { AlertTriangle, Download } from "lucide-react";
import { Student, seedStudents, DEPTS, pctColor } from "@/lib/students";
import { useLocal, downloadCSV } from "@/lib/useLocal";

type Mark = "P" | "A" | "L";
type Session = { key: string; date: string; dept: string; sem: string; subject: string; marks: Record<string, Mark> };
const SUBJECTS = ["Data Structures", "Database Management", "Mathematics", "Web Development", "Operating Systems"];
const subjPct = [91, 87, 84, 88, 82];
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"];
const trend = months.map((m, i) => ({ m, Overall: 82 + Math.round(Math.sin(i) * 3 + i * 0.5), Present: 85 + Math.round(Math.cos(i) * 2), Absent: 12 - Math.round(Math.sin(i) * 2) }));
const TABS = ["Overview", "Subject-wise", "Daily Attendance", "Reports"];
const sel = "rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm";

export default function AttendancePage() {
  const [tab, setTab] = useState(TABS[0]);
  const [students] = useLocal<Student[]>("cx_students", seedStudents);
  const [sessions, setSessions] = useLocal<Session[]>("cx_attendance", []);
  const today = new Date().toISOString().slice(0, 10);
  const [date, setDate] = useState(today); const [dept, setDept] = useState("CSE"); const [sem, setSem] = useState("1"); const [subject, setSubject] = useState(SUBJECTS[0]);
  const [q, setQ] = useState(""); const [marks, setMarks] = useState<Record<string, Mark>>({}); const [toast, setToast] = useState("");

  const cls = useMemo(() => students.filter((s) => s.dept === dept && String(s.sem) === sem && s.name.toLowerCase().includes(q.toLowerCase())), [students, dept, sem, q]);
  const key = `${date}|${dept}|${sem}|${subject}`;
  const get = (id: string): Mark => marks[id] ?? sessions.find((x) => x.key === key)?.marks[id] ?? "P";
  const set = (id: string, m: Mark) => setMarks({ ...marks, [id]: m });
  const pct = cls.length ? Math.round((cls.filter((s) => get(s.id) !== "A").length / cls.length) * 100) : 0;
  const low = students.filter((s) => s.att < 75);
  const overall = Math.round(students.reduce((a, s) => a + s.att, 0) / (students.length || 1) * 10) / 10;
  const present = Math.round(students.length * 0.884), late = Math.round(students.length * 0.04), absent = students.length - present - late;

  const save = () => {
    const all: Record<string, Mark> = {}; cls.forEach((s) => (all[s.id] = get(s.id)));
    setSessions([...sessions.filter((x) => x.key !== key), { key, date, dept, sem, subject, marks: all }]);
    setMarks({}); setToast("Attendance saved successfully"); setTimeout(() => setToast(""), 2200);
  };
  const report = () => downloadCSV("attendance-report.csv", [["Date","Dept","Sem","Subject","Student","Status"],
    ...sessions.flatMap((x) => Object.entries(x.marks).map(([id, m]) => [x.date, x.dept, x.sem, x.subject, students.find((s) => s.id === id)?.name ?? id, m === "P" ? "Present" : m === "A" ? "Absent" : "Late"]))]);

  const card = (label: string, val: string | number, sub: string, c = "") => (<div className="card"><div className="text-xs text-slate-500">{label}</div><div className={`text-2xl font-semibold ${c}`}>{val}</div><div className="text-xs text-slate-500">{sub}</div></div>);
  const subjectBars = (<div className="space-y-3">{SUBJECTS.map((s, i) => (<div key={s}><div className="mb-1 flex justify-between text-sm"><span>{s}</span><b>{subjPct[i]}%</b></div>
    <div className="h-2 rounded bg-slate-100"><div className="h-2 rounded bg-teal-500" style={{ width: `${subjPct[i]}%` }} /></div></div>))}</div>);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div><h1 className="text-xl font-semibold">Attendance</h1><p className="text-sm text-slate-500">Track and manage student attendance.</p></div>
        <button onClick={() => setTab("Daily Attendance")} className="rounded-lg bg-brand px-3 py-2 text-sm text-white">Mark Attendance</button>
      </div>
      <div className="flex gap-1 border-b border-slate-200">{TABS.map((t) => <button key={t} onClick={() => setTab(t)} className={`px-3 py-2 text-sm ${tab === t ? "border-b-2 border-brand font-medium text-brand" : "text-slate-500"}`}>{t}</button>)}</div>

      {tab === "Overview" && (<>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {card("Overall Attendance", `${overall}%`, "+2.1% from last month", "text-brand")}
          {card("Present Today", `${present} / ${students.length}`, "Students present")}
          {card("Absent Today", absent, "Not marked present", "text-red-600")}
          {card("Late Today", late, "Arrived late", "text-amber-600")}
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="card"><h2 className="mb-2 text-sm font-semibold">Attendance Trend</h2><div className="h-60"><ResponsiveContainer><LineChart data={trend}><CartesianGrid stroke="#eef2f7" vertical={false} /><XAxis dataKey="m" fontSize={12} tickLine={false} /><YAxis fontSize={12} width={30} tickLine={false} axisLine={false} /><Tooltip /><Legend />
            <Line dataKey="Overall" stroke="#2563EB" dot={false} /><Line dataKey="Present" stroke="#16A34A" dot={false} /><Line dataKey="Absent" stroke="#EF4444" dot={false} /></LineChart></ResponsiveContainer></div></div>
          <div className="card"><h2 className="mb-3 text-sm font-semibold">Subject-wise Attendance</h2>{subjectBars}</div>
        </div>
        {low.length > 0 && <div className="card flex items-start gap-2 border-amber-200 bg-amber-50 text-sm text-amber-800"><AlertTriangle className="h-4 w-4 shrink-0" />
          <span>{low.length} students are below the 75% threshold: {low.slice(0, 4).map((s) => s.name).join(", ")}{low.length > 4 ? "..." : ""}</span></div>}
      </>)}

      {tab === "Subject-wise" && (<div className="grid gap-4 lg:grid-cols-2">
        <div className="card"><h2 className="mb-3 text-sm font-semibold">Subject-wise Attendance</h2>{subjectBars}</div>
        <div className="card"><div className="h-64"><ResponsiveContainer><BarChart data={SUBJECTS.map((s, i) => ({ s: s.split(" ")[0], v: subjPct[i] }))}><XAxis dataKey="s" fontSize={12} /><YAxis domain={[60, 100]} fontSize={12} width={30} /><Tooltip /><Bar dataKey="v" fill="#14B8A6" radius={[4, 4, 0, 0]} /></BarChart></ResponsiveContainer></div></div></div>)}

      {tab === "Daily Attendance" && (<div className="card space-y-3">
        <div className="flex flex-wrap gap-2">
          <input type="date" value={date} onChange={(e) => { setDate(e.target.value); setMarks({}); }} className={sel} />
          <select className={sel} value={dept} onChange={(e) => { setDept(e.target.value); setMarks({}); }}>{DEPTS.map((d) => <option key={d}>{d}</option>)}</select>
          <select className={sel} value={sem} onChange={(e) => { setSem(e.target.value); setMarks({}); }}>{[1,3,5,7].map((d) => <option key={d}>{d}</option>)}</select>
          <select className={sel} value={subject} onChange={(e) => setSubject(e.target.value)}>{SUBJECTS.map((d) => <option key={d}>{d}</option>)}</select>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search student" className={`${sel} flex-1`} />
        </div>
        <div className="text-sm text-slate-500">Class attendance: <b className={pctColor(pct)}>{pct}%</b> {pct < 75 && cls.length > 0 && <span className="ml-2 text-red-600">Low attendance warning</span>}</div>
        <div className="overflow-x-auto"><table className="w-full min-w-[480px] text-left text-sm"><thead className="text-xs text-slate-500"><tr><th className="py-2">Student</th><th>ID</th><th>Overall %</th><th>Mark</th></tr></thead><tbody>
          {cls.map((s) => (<tr key={s.id} className="border-t border-slate-100"><td className="py-2 font-medium">{s.name}</td><td className="text-slate-500">{s.sid}</td><td className={pctColor(s.att)}>{s.att}%</td>
            <td><div className="flex gap-1">{(["P", "A", "L"] as Mark[]).map((m) => <button key={m} onClick={() => set(s.id, m)}
              className={`rounded px-3 py-1 text-xs ${get(s.id) === m ? (m === "P" ? "bg-emerald-500 text-white" : m === "A" ? "bg-red-500 text-white" : "bg-amber-500 text-white") : "bg-slate-100 text-slate-600"}`}>{m === "P" ? "Present" : m === "A" ? "Absent" : "Late"}</button>)}</div></td></tr>))}
          {!cls.length && <tr><td colSpan={4} className="py-8 text-center text-slate-400">No students in this class. Try another department or semester.</td></tr>}
        </tbody></table></div>
        <button onClick={save} disabled={!cls.length} className="rounded-lg bg-brand px-4 py-2 text-sm text-white disabled:opacity-40">Save Attendance</button>
      </div>)}

      {tab === "Reports" && (<div className="card space-y-3">
        <div className="flex items-center justify-between"><h2 className="text-sm font-semibold">Attendance History</h2>
          <button onClick={report} disabled={!sessions.length} className={`${sel} flex items-center gap-1 disabled:opacity-40`}><Download className="h-4 w-4" />Download CSV</button></div>
        <table className="w-full text-left text-sm"><thead className="text-xs text-slate-500"><tr><th className="py-2">Date</th><th>Class</th><th>Subject</th><th>Present</th><th>Absent</th><th>Late</th></tr></thead><tbody>
          {sessions.map((x) => { const v = Object.values(x.marks); return (<tr key={x.key} className="border-t border-slate-100"><td className="py-2">{x.date}</td><td>{x.dept} / Sem {x.sem}</td><td>{x.subject}</td>
            <td>{v.filter((m) => m === "P").length}</td><td>{v.filter((m) => m === "A").length}</td><td>{v.filter((m) => m === "L").length}</td></tr>); })}
          {!sessions.length && <tr><td colSpan={6} className="py-8 text-center text-slate-400">No saved attendance yet. Mark attendance in the Daily Attendance tab.</td></tr>}
        </tbody></table></div>)}
      {toast && <div className="fixed bottom-5 right-5 rounded-lg bg-navy px-4 py-2 text-sm text-white shadow-lg">{toast}</div>}
    </div>
  );
}
