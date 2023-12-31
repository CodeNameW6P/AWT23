'use client'
import { useRouter } from "next/navigation"

export default function PushToSignIn() {
    const router = useRouter()
    router.push('/signin')
}