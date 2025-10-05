import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space',
    display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Philippe Cutillas | Software Engineer',
    description: 'Software Engineer specializing in distributed systems, C++, and modern web technologies',
    keywords: ['software engineer', 'C++', 'Python', 'distributed systems', 'Viasat'],
    authors: [{ name: 'Philippe Cutillas' }],
    openGraph: {
        title: 'Philippe Cutillas | Software Engineer',
        description: 'Exploring the intersection of cutting-edge technologies and impactful solutions',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
            <body>{children}</body>
        </html>
    )
}
