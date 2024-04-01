import Link from "next/link"

export default function Navbar() {
    return (
        <nav>
            <div className="projectname">
                <h1>Law & CoE Project</h1>
            </div>
            <Link href="/" class="font-medium text-white px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-blue-600">Home</Link>
            <Link href="/extract" class="font-medium text-white px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-blue-600">Extraction</Link>
            <Link href="/dict/read" class="font-medium text-white px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-blue-600">Read Dict</Link>
            <Link href="/dict/add" class="font-medium text-white px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-blue-600">Add Dict</Link>
            <Link href="/dict/del" class="font-medium text-white px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-blue-600">Del Dict</Link>
            <Link href="/about" class="font-medium text-white px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-blue-600">About</Link>
        </nav>
    )
}