(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/attendance/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AttendancePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/LineChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$students$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/students.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useLocal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/useLocal.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const SUBJECTS = [
    "Data Structures",
    "Database Management",
    "Mathematics",
    "Web Development",
    "Operating Systems"
];
const subjPct = [
    91,
    87,
    84,
    88,
    82
];
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep"
];
const trend = months.map((m, i)=>({
        m,
        Overall: 82 + Math.round(Math.sin(i) * 3 + i * 0.5),
        Present: 85 + Math.round(Math.cos(i) * 2),
        Absent: 12 - Math.round(Math.sin(i) * 2)
    }));
const TABS = [
    "Overview",
    "Subject-wise",
    "Daily Attendance",
    "Reports"
];
const sel = "rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm";
function AttendancePage() {
    _s();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(TABS[0]);
    const [students] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useLocal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocal"])("cx_students", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$students$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedStudents"]);
    const [sessions, setSessions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useLocal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocal"])("cx_attendance", []);
    const today = new Date().toISOString().slice(0, 10);
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(today);
    const [dept, setDept] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("CSE");
    const [sem, setSem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("1");
    const [subject, setSubject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(SUBJECTS[0]);
    const [q, setQ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [marks, setMarks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AttendancePage.useMemo[cls]": ()=>students.filter({
                "AttendancePage.useMemo[cls]": (s)=>s.dept === dept && String(s.sem) === sem && s.name.toLowerCase().includes(q.toLowerCase())
            }["AttendancePage.useMemo[cls]"])
    }["AttendancePage.useMemo[cls]"], [
        students,
        dept,
        sem,
        q
    ]);
    const key = `${date}|${dept}|${sem}|${subject}`;
    const get = (id)=>marks[id] ?? sessions.find((x)=>x.key === key)?.marks[id] ?? "P";
    const set = (id, m)=>setMarks({
            ...marks,
            [id]: m
        });
    const pct = cls.length ? Math.round(cls.filter((s)=>get(s.id) !== "A").length / cls.length * 100) : 0;
    const low = students.filter((s)=>s.att < 75);
    const overall = Math.round(students.reduce((a, s)=>a + s.att, 0) / (students.length || 1) * 10) / 10;
    const present = Math.round(students.length * 0.884), late = Math.round(students.length * 0.04), absent = students.length - present - late;
    const save = ()=>{
        const all = {};
        cls.forEach((s)=>all[s.id] = get(s.id));
        setSessions([
            ...sessions.filter((x)=>x.key !== key),
            {
                key,
                date,
                dept,
                sem,
                subject,
                marks: all
            }
        ]);
        setMarks({});
        setToast("Attendance saved successfully");
        setTimeout(()=>setToast(""), 2200);
    };
    const report = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useLocal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["downloadCSV"])("attendance-report.csv", [
            [
                "Date",
                "Dept",
                "Sem",
                "Subject",
                "Student",
                "Status"
            ],
            ...sessions.flatMap((x)=>Object.entries(x.marks).map(([id, m])=>[
                        x.date,
                        x.dept,
                        x.sem,
                        x.subject,
                        students.find((s)=>s.id === id)?.name ?? id,
                        m === "P" ? "Present" : m === "A" ? "Absent" : "Late"
                    ]))
        ]);
    const card = (label, val, sub, c = "")=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-slate-500",
                    children: label
                }, void 0, false, {
                    fileName: "[project]/src/app/attendance/page.tsx",
                    lineNumber: 42,
                    columnNumber: 101
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `text-2xl font-semibold ${c}`,
                    children: val
                }, void 0, false, {
                    fileName: "[project]/src/app/attendance/page.tsx",
                    lineNumber: 42,
                    columnNumber: 154
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-slate-500",
                    children: sub
                }, void 0, false, {
                    fileName: "[project]/src/app/attendance/page.tsx",
                    lineNumber: 42,
                    columnNumber: 212
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/attendance/page.tsx",
            lineNumber: 42,
            columnNumber: 79
        }, this);
    const subjectBars = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: SUBJECTS.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-1 flex justify-between text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: s
                            }, void 0, false, {
                                fileName: "[project]/src/app/attendance/page.tsx",
                                lineNumber: 43,
                                columnNumber: 140
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: [
                                    subjPct[i],
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/attendance/page.tsx",
                                lineNumber: 43,
                                columnNumber: 156
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/attendance/page.tsx",
                        lineNumber: 43,
                        columnNumber: 89
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-2 rounded bg-slate-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-2 rounded bg-teal-500",
                            style: {
                                width: `${subjPct[i]}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/attendance/page.tsx",
                            lineNumber: 44,
                            columnNumber: 47
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/attendance/page.tsx",
                        lineNumber: 44,
                        columnNumber: 5
                    }, this)
                ]
            }, s, true, {
                fileName: "[project]/src/app/attendance/page.tsx",
                lineNumber: 43,
                columnNumber: 76
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/app/attendance/page.tsx",
        lineNumber: 43,
        columnNumber: 24
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-start justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-semibold",
                                children: "Attendance"
                            }, void 0, false, {
                                fileName: "[project]/src/app/attendance/page.tsx",
                                lineNumber: 49,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-slate-500",
                                children: "Track and manage student attendance."
                            }, void 0, false, {
                                fileName: "[project]/src/app/attendance/page.tsx",
                                lineNumber: 49,
                                columnNumber: 67
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/attendance/page.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setTab("Daily Attendance"),
                        className: "rounded-lg bg-brand px-3 py-2 text-sm text-white",
                        children: "Mark Attendance"
                    }, void 0, false, {
                        fileName: "[project]/src/app/attendance/page.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/attendance/page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-1 border-b border-slate-200",
                children: TABS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setTab(t),
                        className: `px-3 py-2 text-sm ${tab === t ? "border-b-2 border-brand font-medium text-brand" : "text-slate-500"}`,
                        children: t
                    }, t, false, {
                        fileName: "[project]/src/app/attendance/page.tsx",
                        lineNumber: 52,
                        columnNumber: 78
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/attendance/page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            tab === "Overview" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
                        children: [
                            card("Overall Attendance", `${overall}%`, "+2.1% from last month", "text-brand"),
                            card("Present Today", `${present} / ${students.length}`, "Students present"),
                            card("Absent Today", absent, "Not marked present", "text-red-600"),
                            card("Late Today", late, "Arrived late", "text-amber-600")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/attendance/page.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 lg:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mb-2 text-sm font-semibold",
                                        children: "Attendance Trend"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/attendance/page.tsx",
                                        lineNumber: 62,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-60",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                                                data: trend,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                        stroke: "#eef2f7",
                                                        vertical: false
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/attendance/page.tsx",
                                                        lineNumber: 62,
                                                        columnNumber: 164
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                        dataKey: "m",
                                                        fontSize: 12,
                                                        tickLine: false
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/attendance/page.tsx",
                                                        lineNumber: 62,
                                                        columnNumber: 215
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                        fontSize: 12,
                                                        width: 30,
                                                        tickLine: false,
                                                        axisLine: false
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/attendance/page.tsx",
                                                        lineNumber: 62,
                                                        columnNumber: 267
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                                                        fileName: "[project]/src/app/attendance/page.tsx",
                                                        lineNumber: 62,
                                                        columnNumber: 335
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {}, void 0, false, {
                                                        fileName: "[project]/src/app/attendance/page.tsx",
                                                        lineNumber: 62,
                                                        columnNumber: 346
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                                        dataKey: "Overall",
                                                        stroke: "#2563EB",
                                                        dot: false
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/attendance/page.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                                        dataKey: "Present",
                                                        stroke: "#16A34A",
                                                        dot: false
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/attendance/page.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 68
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                                        dataKey: "Absent",
                                                        stroke: "#EF4444",
                                                        dot: false
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/attendance/page.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 123
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/attendance/page.tsx",
                                                lineNumber: 62,
                                                columnNumber: 140
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/attendance/page.tsx",
                                            lineNumber: 62,
                                            columnNumber: 119
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/attendance/page.tsx",
                                        lineNumber: 62,
                                        columnNumber: 97
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/attendance/page.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mb-3 text-sm font-semibold",
                                        children: "Subject-wise Attendance"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/attendance/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 33
                                    }, this),
                                    subjectBars
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/attendance/page.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/attendance/page.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    low.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card flex items-start gap-2 border-amber-200 bg-amber-50 text-sm text-amber-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                className: "h-4 w-4 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/app/attendance/page.tsx",
                                lineNumber: 66,
                                columnNumber: 125
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    low.length,
                                    " students are below the 75% threshold: ",
                                    low.slice(0, 4).map((s)=>s.name).join(", "),
                                    low.length > 4 ? "..." : ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/attendance/page.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/attendance/page.tsx",
                        lineNumber: 66,
                        columnNumber: 28
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/attendance/page.tsx",
                lineNumber: 54,
                columnNumber: 31
            }, this),
            tab === "Subject-wise" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mb-3 text-sm font-semibold",
                                children: "Subject-wise Attendance"
                            }, void 0, false, {
                                fileName: "[project]/src/app/attendance/page.tsx",
                                lineNumber: 71,
                                columnNumber: 31
                            }, this),
                            subjectBars
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/attendance/page.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-64",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                    data: SUBJECTS.map((s, i)=>({
                                            s: s.split(" ")[0],
                                            v: subjPct[i]
                                        })),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                            dataKey: "s",
                                            fontSize: 12
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/attendance/page.tsx",
                                            lineNumber: 72,
                                            columnNumber: 155
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                            domain: [
                                                60,
                                                100
                                            ],
                                            fontSize: 12,
                                            width: 30
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/attendance/page.tsx",
                                            lineNumber: 72,
                                            columnNumber: 190
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                                            fileName: "[project]/src/app/attendance/page.tsx",
                                            lineNumber: 72,
                                            columnNumber: 243
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                            dataKey: "v",
                                            fill: "#14B8A6",
                                            radius: [
                                                4,
                                                4,
                                                0,
                                                0
                                            ]
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/attendance/page.tsx",
                                            lineNumber: 72,
                                            columnNumber: 254
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/attendance/page.tsx",
                                    lineNumber: 72,
                                    columnNumber: 74
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/attendance/page.tsx",
                                lineNumber: 72,
                                columnNumber: 53
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/attendance/page.tsx",
                            lineNumber: 72,
                            columnNumber: 31
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/attendance/page.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/attendance/page.tsx",
                lineNumber: 70,
                columnNumber: 35
            }, this),
            tab === "Daily Attendance" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "date",
                                value: date,
                                onChange: (e)=>{
                                    setDate(e.target.value);
                                    setMarks({});
                                },
                                className: sel
                            }, void 0, false, {
                                fileName: "[project]/src/app/attendance/page.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: sel,
                                value: dept,
                                onChange: (e)=>{
                                    setDept(e.target.value);
                                    setMarks({});
                                },
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$students$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEPTS"].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: d
                                    }, d, false, {
                                        fileName: "[project]/src/app/attendance/page.tsx",
                                        lineNumber: 77,
                                        columnNumber: 127
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/attendance/page.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: sel,
                                value: sem,
                                onChange: (e)=>{
                                    setSem(e.target.value);
                                    setMarks({});
                                },
                                children: [
                                    1,
                                    3,
                                    5,
                                    7
                                ].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: d
                                    }, d, false, {
                                        fileName: "[project]/src/app/attendance/page.tsx",
                                        lineNumber: 78,
                                        columnNumber: 129
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/attendance/page.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: sel,
                                value: subject,
                                onChange: (e)=>setSubject(e.target.value),
                                children: SUBJECTS.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: d
                                    }, d, false, {
                                        fileName: "[project]/src/app/attendance/page.tsx",
                                        lineNumber: 79,
                                        columnNumber: 117
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/attendance/page.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: q,
                                onChange: (e)=>setQ(e.target.value),
                                placeholder: "Search student",
                                className: `${sel} flex-1`
                            }, void 0, false, {
                                fileName: "[project]/src/app/attendance/page.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/attendance/page.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-slate-500",
                        children: [
                            "Class attendance: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$students$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pctColor"])(pct),
                                children: [
                                    pct,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/attendance/page.tsx",
                                lineNumber: 82,
                                columnNumber: 67
                            }, this),
                            " ",
                            pct < 75 && cls.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-2 text-red-600",
                                children: "Low attendance warning"
                            }, void 0, false, {
                                fileName: "[project]/src/app/attendance/page.tsx",
                                lineNumber: 82,
                                columnNumber: 138
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/attendance/page.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full min-w-[480px] text-left text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "text-xs text-slate-500",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2",
                                                children: "Student"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/attendance/page.tsx",
                                                lineNumber: 83,
                                                columnNumber: 146
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "ID"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/attendance/page.tsx",
                                                lineNumber: 83,
                                                columnNumber: 179
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Overall %"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/attendance/page.tsx",
                                                lineNumber: 83,
                                                columnNumber: 190
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Mark"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/attendance/page.tsx",
                                                lineNumber: 83,
                                                columnNumber: 208
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/attendance/page.tsx",
                                        lineNumber: 83,
                                        columnNumber: 142
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/attendance/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 100
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: [
                                        cls.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "border-t border-slate-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2 font-medium",
                                                        children: s.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/attendance/page.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 81
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "text-slate-500",
                                                        children: s.sid
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/attendance/page.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 127
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$students$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pctColor"])(s.att),
                                                        children: [
                                                            s.att,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/attendance/page.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 170
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-1",
                                                            children: [
                                                                "P",
                                                                "A",
                                                                "L"
                                                            ].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>set(s.id, m),
                                                                    className: `rounded px-3 py-1 text-xs ${get(s.id) === m ? m === "P" ? "bg-emerald-500 text-white" : m === "A" ? "bg-red-500 text-white" : "bg-amber-500 text-white" : "bg-slate-100 text-slate-600"}`,
                                                                    children: m === "P" ? "Present" : m === "A" ? "Absent" : "Late"
                                                                }, m, false, {
                                                                    fileName: "[project]/src/app/attendance/page.tsx",
                                                                    lineNumber: 85,
                                                                    columnNumber: 85
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/attendance/page.tsx",
                                                            lineNumber: 85,
                                                            columnNumber: 17
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/attendance/page.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 13
                                                    }, this)
                                                ]
                                            }, s.id, true, {
                                                fileName: "[project]/src/app/attendance/page.tsx",
                                                lineNumber: 84,
                                                columnNumber: 28
                                            }, this)),
                                        !cls.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                colSpan: 4,
                                                className: "py-8 text-center text-slate-400",
                                                children: "No students in this class. Try another department or semester."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/attendance/page.tsx",
                                                lineNumber: 87,
                                                columnNumber: 31
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/attendance/page.tsx",
                                            lineNumber: 87,
                                            columnNumber: 27
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/attendance/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 234
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/attendance/page.tsx",
                            lineNumber: 83,
                            columnNumber: 42
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/attendance/page.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: save,
                        disabled: !cls.length,
                        className: "rounded-lg bg-brand px-4 py-2 text-sm text-white disabled:opacity-40",
                        children: "Save Attendance"
                    }, void 0, false, {
                        fileName: "[project]/src/app/attendance/page.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/attendance/page.tsx",
                lineNumber: 74,
                columnNumber: 39
            }, this),
            tab === "Reports" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm font-semibold",
                                children: "Attendance History"
                            }, void 0, false, {
                                fileName: "[project]/src/app/attendance/page.tsx",
                                lineNumber: 93,
                                columnNumber: 60
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: report,
                                disabled: !sessions.length,
                                className: `${sel} flex items-center gap-1 disabled:opacity-40`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/attendance/page.tsx",
                                        lineNumber: 94,
                                        columnNumber: 129
                                    }, this),
                                    "Download CSV"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/attendance/page.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/attendance/page.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full text-left text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                className: "text-xs text-slate-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-2",
                                            children: "Date"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/attendance/page.tsx",
                                            lineNumber: 95,
                                            columnNumber: 99
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Class"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/attendance/page.tsx",
                                            lineNumber: 95,
                                            columnNumber: 129
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Subject"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/attendance/page.tsx",
                                            lineNumber: 95,
                                            columnNumber: 143
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Present"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/attendance/page.tsx",
                                            lineNumber: 95,
                                            columnNumber: 159
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Absent"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/attendance/page.tsx",
                                            lineNumber: 95,
                                            columnNumber: 175
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Late"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/attendance/page.tsx",
                                            lineNumber: 95,
                                            columnNumber: 190
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/attendance/page.tsx",
                                    lineNumber: 95,
                                    columnNumber: 95
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/attendance/page.tsx",
                                lineNumber: 95,
                                columnNumber: 53
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: [
                                    sessions.map((x)=>{
                                        const v = Object.values(x.marks);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-t border-slate-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-2",
                                                    children: x.date
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/attendance/page.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 130
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: [
                                                        x.dept,
                                                        " / Sem ",
                                                        x.sem
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/attendance/page.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 164
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: x.subject
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/attendance/page.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 195
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: v.filter((m)=>m === "P").length
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/attendance/page.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: v.filter((m)=>m === "A").length
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/attendance/page.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 57
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: v.filter((m)=>m === "L").length
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/attendance/page.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 101
                                                }, this)
                                            ]
                                        }, x.key, true, {
                                            fileName: "[project]/src/app/attendance/page.tsx",
                                            lineNumber: 96,
                                            columnNumber: 76
                                        }, this);
                                    }),
                                    !sessions.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            colSpan: 6,
                                            className: "py-8 text-center text-slate-400",
                                            children: "No saved attendance yet. Mark attendance in the Daily Attendance tab."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/attendance/page.tsx",
                                            lineNumber: 98,
                                            columnNumber: 36
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/attendance/page.tsx",
                                        lineNumber: 98,
                                        columnNumber: 32
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/attendance/page.tsx",
                                lineNumber: 95,
                                columnNumber: 216
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/attendance/page.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/attendance/page.tsx",
                lineNumber: 92,
                columnNumber: 30
            }, this),
            toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-5 right-5 rounded-lg bg-navy px-4 py-2 text-sm text-white shadow-lg",
                children: toast
            }, void 0, false, {
                fileName: "[project]/src/app/attendance/page.tsx",
                lineNumber: 100,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/attendance/page.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(AttendancePage, "2GCqSCzkE+QewxCwLaIPD39LUKI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useLocal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocal"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useLocal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocal"]
    ];
});
_c = AttendancePage;
var _c;
__turbopack_context__.k.register(_c, "AttendancePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/students.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEPTS",
    ()=>DEPTS,
    "pctColor",
    ()=>pctColor,
    "seedStudents",
    ()=>seedStudents,
    "statusStyle",
    ()=>statusStyle
]);
const DEPTS = [
    "CSE",
    "IT",
    "ECE",
    "ME",
    "EE",
    "CE"
];
const names = [
    "Arjun Sen",
    "Priya Roy",
    "Rahul Das",
    "Ananya Dutta",
    "Amit Verma",
    "Sneha Pal",
    "Riya Sharma",
    "Kunal Mitra",
    "Ishita Ghosh",
    "Rohan Bose",
    "Meera Nair",
    "Sourav Saha",
    "Tanya Kapoor",
    "Vikram Singh",
    "Debjani Roy",
    "Aditya Rao",
    "Pooja Iyer",
    "Nikhil Jain",
    "Sayan Paul",
    "Ritika Sen"
];
const att = [
    84,
    91,
    68,
    87,
    72,
    76,
    92,
    80,
    88,
    65,
    90,
    74,
    85,
    79,
    93,
    71,
    86,
    82,
    69,
    89
];
const cr = [
    67,
    82,
    51,
    71,
    58,
    62,
    85,
    60,
    74,
    49,
    78,
    55,
    70,
    64,
    88,
    57,
    72,
    66,
    46,
    80
];
const seedStudents = names.map((name, i)=>({
        id: String(i + 1),
        name,
        sid: `STU-2026-${1048 + i}`,
        dept: DEPTS[i % 6],
        sem: i % 4 * 2 + 1,
        att: att[i],
        cr: cr[i],
        status: att[i] < 70 ? "Need Attention" : att[i] < 80 ? "Monitor" : "On Track"
    }));
const statusStyle = {
    "On Track": "bg-emerald-50 text-emerald-700",
    "Need Attention": "bg-red-50 text-red-700",
    Monitor: "bg-amber-50 text-amber-700"
};
const pctColor = (n)=>n >= 80 ? "text-emerald-600" : n >= 70 ? "text-amber-600" : "text-red-600";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/useLocal.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "downloadCSV",
    ()=>downloadCSV,
    "useLocal",
    ()=>useLocal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useLocal(key, initial) {
    _s();
    const [v, setV] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial);
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLocal.useEffect": ()=>{
            try {
                const s = localStorage.getItem(key);
                if (s) setV(JSON.parse(s));
            } catch  {}
            setReady(true);
        }
    }["useLocal.useEffect"], [
        key
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLocal.useEffect": ()=>{
            if (ready) localStorage.setItem(key, JSON.stringify(v));
        }
    }["useLocal.useEffect"], [
        key,
        v,
        ready
    ]);
    return [
        v,
        setV
    ];
}
_s(useLocal, "RpFbMEqwnWTiRH7HXLLQvRL9w1A=");
function downloadCSV(name, rows) {
    const csv = rows.map((r)=>r.map((c)=>`"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([
        csv
    ], {
        type: "text/csv"
    }));
    a.download = name;
    a.click();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0ae3h-k._.js.map