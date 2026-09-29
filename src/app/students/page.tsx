"use client";
import { useMemo, useState } from "react";
import { Plus, Download, Search, Pencil, Trash2, Eye, ArrowUpDown, X } from "lucide-react";
import { Student, seedStudents, DEPTS, statusStyle, pctColor } from "@/lib/students";
import { useLocal, downloadCSV } from "@/lib/useLocal";

const PER = 8;
const blank = { name: "", dept: "CSE", sem: 1, att: 85, cr: 60, status: "On Track" as Student["status"] };

export default function StudentsPage() {
  const [list, setList] = useLocal<Student[]>("cx_students", seedStudents);
  const [q, setQ] = useState(""); const [dept, setDept] = useState(""); const [sem, setSem] = useState(""); const [st, setSt] = useState("");
  const [sort, setSort] = useState<{ k: keyof Student; d: 1 | -1 }>({ k: "sid", d: 1 });
  const [page, setPage] = useState(1);
  const [form, setForm] = useState<(typeof blank & { id?: string }) | null>(null);
  const [del, setDel] = useState<Student | null>(null);
  const [view, setView] = useState<Student | null>(null);
  const [toast, setToast] = useState("");
  const say = (m: string) => { setToast(m); setTimeout(() => setToast(""), 2200); };

  const rows = useMemo(() => {
    const s = q.toLowerCase();
    return list.filter((x) => (!s || [x.name, x.sid, x.dept].some((v) => v.toLowerCase().includes(s))) && (!dept || x.dept === dept) && (!sem || x.sem === +sem) && (!st || x.status === st))
      .sort((a, b) => (a[sort.k] > b[sort.k] ? 1 : -1) * sort.d);
  }, [list, q, dept, sem, st, sort]);
  const pages = Math.max(1, Math.ceil(rows.length / PER));
  const cur = Math.min(page, pages);
  const slice = rows.slice((cur - 1) * PER, cur * PER);

  const save = () => {
    if (!form || form.name.trim().length < 2) return say("Enter a valid name");
    if (form.id) setList(list.map((s) => (s.id === form.id ? { ...s, ...form, id: s.id } as Student : s)));
    else setList([...list, { ...form, id: String(Date.now()), sid: `STU-2026-${1048 + list.length}` } as Student]);
    say(form.id ? "Student updated" : "Student added"); setForm(null);
  };
  const th = (label: string, k: keyof Student) => (
    <th className="py-2 pr-3"><button className="flex items-center gap-1" onClick={() => setSort({ k, d: sort.k === k ? (-sort.d as 1 | -1) : 1 })}>{label}<ArrowUpDown className="h-3 w-3" /></button></th>);
  const sel = "rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm";

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div><h1 className="text-xl font-semibold">All Students</h1><p className="text-sm text-slate-500">Manage and view all registered students.</p></div>
        <div className="flex gap-2">
          <button onClick={() => downloadCSV("students.csv", [["Name","ID","Dept","Sem","Attendance","Readiness","Status"], ...rows.map((r) => [r.name, r.sid, r.dept, r.sem, r.att, r.cr, r.status])])} className={`${sel} flex items-center gap-1`}><Download className="h-4 w-4" />Export CSV</button>
          <button onClick={() => setForm(blank)} className="flex items-center gap-1 rounded-lg bg-brand px-3 py-2 text-sm text-white"><Plus className="h-4 w-4" />Add Student</button>
        </div>
      </div>
      <div className="card flex flex-wrap gap-2">
        <div className="relative min-w-[200px] flex-1"><Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input value={q} onChange={(e) => { setQ(e.target.value); setPage(1); }} placeholder="Search by name, ID, department..." className={`${sel} w-full pl-9`} /></div>
        <select className={sel} value={dept} onChange={(e) => { setDept(e.target.value); setPage(1); }}><option value="">Department</option>{DEPTS.map((d) => <option key={d}>{d}</option>)}</select>
        <select className={sel} value={sem} onChange={(e) => { setSem(e.target.value); setPage(1); }}><option value="">Semester</option>{[1,3,5,7].map((d) => <option key={d}>{d}</option>)}</select>
        <select className={sel} value={st} onChange={(e) => { setSt(e.target.value); setPage(1); }}><option value="">Status</option>{Object.keys(statusStyle).map((d) => <option key={d}>{d}</option>)}</select>
      </div>
      <div className="card overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="text-xs text-slate-500"><tr>{th("Student","name")}{th("Student ID","sid")}{th("Dept","dept")}{th("Sem","sem")}{th("Attendance","att")}{th("Career Readiness","cr")}{th("Status","status")}<th>Actions</th></tr></thead>
          <tbody>
            {slice.map((s) => (
              <tr key={s.id} className="border-t border-slate-100">
                <td className="py-2 pr-3"><span className="flex items-center gap-2"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-700">{s.name.split(" ").map((w) => w[0]).join("")}</span>{s.name}</span></td>
                <td className="text-slate-500">{s.sid}</td><td>{s.dept}</td><td>{s.sem}</td>
                <td><span className={`rounded-md bg-slate-50 px-2 py-0.5 font-medium ${pctColor(s.att)}`}>{s.att}%</span></td>
                <td><span className={`rounded-md bg-slate-50 px-2 py-0.5 font-medium ${pctColor(s.cr)}`}>{s.cr}%</span></td>
                <td><span className={`rounded-full px-2 py-0.5 text-xs ${statusStyle[s.status]}`}>{s.status}</span></td>
                <td><span className="flex gap-2 text-slate-500">
                  <button title="View" onClick={() => setView(s)}><Eye className="h-4 w-4" /></button>
                  <button title="Edit" onClick={() => setForm({ ...s })}><Pencil className="h-4 w-4" /></button>
                  <button title="Delete" onClick={() => setDel(s)}><Trash2 className="h-4 w-4 text-red-500" /></button></span></td>
              </tr>))}
            {!slice.length && <tr><td colSpan={8} className="py-10 text-center text-slate-400">No students match your filters.</td></tr>}
          </tbody>
        </table>
        <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
          <span>Showing {rows.length ? (cur - 1) * PER + 1 : 0}-{Math.min(cur * PER, rows.length)} of {rows.length}</span>
          <div className="flex gap-1">
            <button disabled={cur === 1} onClick={() => setPage(cur - 1)} className="rounded border px-2 py-1 disabled:opacity-40">Prev</button>
            {Array.from({ length: pages }, (_, i) => <button key={i} onClick={() => setPage(i + 1)} className={`rounded border px-2 py-1 ${cur === i + 1 ? "bg-brand text-white" : ""}`}>{i + 1}</button>)}
            <button disabled={cur === pages} onClick={() => setPage(cur + 1)} className="rounded border px-2 py-1 disabled:opacity-40">Next</button></div>
        </div>
      </div>

      {form && (<Modal title={form.id ? "Edit Student" : "Add Student"} close={() => setForm(null)}>
        <div className="grid gap-3 text-sm">
          <label>Full name<input className={`${sel} mt-1 w-full`} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>
          <div className="grid grid-cols-2 gap-3">
            <label>Department<select className={`${sel} mt-1 w-full`} value={form.dept} onChange={(e) => setForm({ ...form, dept: e.target.value })}>{DEPTS.map((d) => <option key={d}>{d}</option>)}</select></label>
            <label>Semester<select className={`${sel} mt-1 w-full`} value={form.sem} onChange={(e) => setForm({ ...form, sem: +e.target.value })}>{[1,2,3,4,5,6,7,8].map((d) => <option key={d}>{d}</option>)}</select></label>
            <label>Attendance %<input type="number" min={0} max={100} className={`${sel} mt-1 w-full`} value={form.att} onChange={(e) => setForm({ ...form, att: +e.target.value })} /></label>
            <label>Readiness %<input type="number" min={0} max={100} className={`${sel} mt-1 w-full`} value={form.cr} onChange={(e) => setForm({ ...form, cr: +e.target.value })} /></label>
          </div>
          <label>Status<select className={`${sel} mt-1 w-full`} value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as Student["status"] })}>{Object.keys(statusStyle).map((d) => <option key={d}>{d}</option>)}</select></label>
          <button onClick={save} className="rounded-lg bg-brand py-2 text-white">Save</button>
        </div></Modal>)}
      {del && (<Modal title="Delete student?" close={() => setDel(null)}>
        <p className="text-sm text-slate-600">{del.name} will be removed permanently.</p>
        <div className="mt-4 flex justify-end gap-2"><button className={sel} onClick={() => setDel(null)}>Cancel</button>
          <button className="rounded-lg bg-red-500 px-3 py-2 text-sm text-white" onClick={() => { setList(list.filter((s) => s.id !== del.id)); setDel(null); say("Student deleted"); }}>Delete</button></div></Modal>)}
      {view && (<Modal title={view.name} close={() => setView(null)}>
        <dl className="grid grid-cols-2 gap-2 text-sm"><dt className="text-slate-500">ID</dt><dd>{view.sid}</dd><dt className="text-slate-500">Department</dt><dd>{view.dept}</dd><dt className="text-slate-500">Semester</dt><dd>{view.sem}</dd><dt className="text-slate-500">Attendance</dt><dd>{view.att}%</dd><dt className="text-slate-500">Readiness</dt><dd>{view.cr}%</dd><dt className="text-slate-500">Status</dt><dd>{view.status}</dd></dl></Modal>)}
      {toast && <div className="fixed bottom-5 right-5 rounded-lg bg-navy px-4 py-2 text-sm text-white shadow-lg">{toast}</div>}
    </div>
  );
}
function Modal({ title, close, children }: { title: string; close: () => void; children: React.ReactNode }) {
  return (<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"><div className="w-full max-w-md rounded-xl bg-white p-5">
    <div className="mb-4 flex justify-between"><h2 className="font-semibold">{title}</h2><button onClick={close}><X className="h-4 w-4" /></button></div>{children}</div></div>);
}
