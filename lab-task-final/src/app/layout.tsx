import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from "../components/navbar"
// import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<header>
					<div style={{ float: "left", textAlign: "center", padding: "15px 15px" }}><NavBar /></div>
				</header>
				{children}
			</body>
		</html>
	)
}
