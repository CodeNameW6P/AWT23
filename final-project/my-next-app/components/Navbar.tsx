import Link from "next/link"
import './NavbarStyle.css'

export default function Navbar() {
    return (
        <nav>
            <div className="topnav">
                <Link href="/dashboard/user">Users</Link>
                <Link href="/dashboard/support">Support</Link>
                <Link href="/dashboard">Dashboard</Link>
                <Link className="active" href="/">Home</Link>
            </div>
        </nav>
    )
}