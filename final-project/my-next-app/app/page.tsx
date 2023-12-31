import Link from "next/link"

export default function Home() {
    return (
        <div>
            <h1 style={{fontSize: "50px", padding: "15px", textAlign: "center"}}>Homepage</h1>
            {/* <h6 style={{fontSize: "20px", textAlign: "center"}}></h6> */}
            <Link style={{border: "1px solid black", margin: "15px"}} href={'/signup'}>Sign Up</Link>
            <br /><br />
            <Link style={{border: "1px solid black", margin: "15px"}} href={'/signin'}>Sign In</Link>
        </div>
    )
}