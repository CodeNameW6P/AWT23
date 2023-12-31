'use client'

import axios from "axios";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import React, { SyntheticEvent, useState } from "react"

export default function SignUp() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await signUpFetch();
        if (response != undefined) {
            if (response.data.message == "success") {
                router.push('/signin');
            }
        }
    }

    async function signUpFetch() {
        try {
            const response = await axios.post('http://localhost:4000/auth/signup/',
                {
                    username: username,
                    email: email,
                    password: password
                });
            return response;
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form action="" onSubmit={submit}>
                <input type="text" name="username" placeholder="Username" value={username} id="" required onChange={e => setUsername(e.target.value)} />
                <br /><br />
                <input type="text" name="email" placeholder="Email" id="" value={email} required onChange={e => setEmail(e.target.value)} />
                <br /><br />
                <input type="password" name="password" placeholder="Password" value={password} id="" required onChange={e => setPassword(e.target.value)} />
                <br /><br />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}