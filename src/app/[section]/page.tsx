export default function Placeholder({ params }: { params: { section: string } }) {
  return (<div className="card"><h1 className="text-lg font-semibold capitalize">{params.section.replace(/-/g, " ")}</h1>
    <p className="mt-1 text-sm text-slate-500">This page is built in a later stage.</p></div>);
}
