'use client'
// import './style.css'
import axios from "axios";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import React, { SyntheticEvent, useState } from "react"

axios.defaults.withCredentials = true

export default function SignIn() {

    // const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await signInFetch();
        if (response != undefined) {
            if (response.data.message == "success") {
                router.push('/dashboard');
            }
            else {
                router.push('/');
            }
        }
    }

    async function signInFetch() {
        try {
            const response = await axios.post('http://localhost:4000/auth/signin/',
                {
                    // username: username,
                    email: email,
                    password: password
                });
            return response;
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='container' style={{ margin: "15px", padding: "15px", border: "1px solid black" }}>
            <form action="" method='POST' onSubmit={submit}>
                <label htmlFor="Email"><b>Email</b></label>
                <br />
                <input name="email" type="text" value={email} required onChange={e => setEmail(e.target.value)} />
                <br />
                <br />
                <label htmlFor="Password"><b>Password</b></label>
                <br />
                <input name="password" type="password" value={password} required onChange={e => setPassword(e.target.value)} />
                <br />
                <br />
                <button type='submit' style={{}}>Sign In</button>
                <br />
            </form>
        </div>
    )
}