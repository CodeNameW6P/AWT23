import Link from "next/link"
import './style.css'

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <div className="sidebar">
                <Link className="active" href="">Home</Link>
                <Link href="">News</Link>
                <Link href="">Contact</Link>
                <Link href="">About</Link>
            </div>
            <div className="content">{children}</div>
        </section>
    )
}