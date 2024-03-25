import Link from "next/link"

export default function Navbar() {
    return (
        <nav>
            <div className="projectname">
                <h1>Law & CoE Project</h1>
            </div>
            <Link href="/">Home</Link>
            <Link href="/dict/read">Read Dict</Link>
            <Link href="/dict/add">Add Dict</Link>
            <Link href="/dict/del">Del Dict</Link>
            <Link href="/about">About</Link>
        </nav>
    )
}