import Link from "next/link"
import { cookies } from 'next/headers'
// import { useRouter } from "next/navigation"

export default function Dashboard() {
    // const router = useRouter();
    const cookiesList = cookies()
    const hasCookie = cookiesList.has('token')

    if (!hasCookie) {
        return (
            <div>
                <h1>Invalid</h1>
                <Link href={'/signin'}>Sign In</Link>
            </div>
        )
    }

    return (
        <div>
            <Link style={{border: "1px solid black", padding: "10px"}} href={'/signin'}>Home</Link>
            <br /><br />
            <Link style={{border: "1px solid black", padding: "10px"}} href={'/signin'}>Notifications</Link>
            <br /><br />
            <Link style={{border: "1px solid black", padding: "10px"}} href={'/dashboard/user'}>User</Link>
            <br /><br />
            <Link style={{border: "1px solid black", padding: "10px"}} href={'/signin'}>Log out</Link>
            <br /><br />
        </div>
    )
}