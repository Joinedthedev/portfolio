import type { Metadata } from 'next'
import { Provider } from '../components/ui/provider'
import { ColorModeProvider } from '../components/ui/color-mode'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
    title: 'Salim Portfolio',
    description: 'Fullstack Engineer | Computer Science Graduate | Creative Solution Builder | Tech Enthusiast',
    icons: {
        icon: "/Professional.jpg"
    },
    openGraph: {
        title: 'Salim Portfolio',
        description: 'Fullstack Engineer | Computer Science Graduate | Creative Solution Builder | Tech Enthusiast',
        images: [
            {
                url: '/Professional.jpg',
                width: 1200,
                height: 630,
                alt: 'Salim Portfolio Preview'
            }
        ],
        type: 'website',
        locale: 'en_US',
        siteName: 'Salim B. Portfolio'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Salim Portfolio',
        description: 'Fullstack Engineer | Computer Science Graduate | Creative Solution Builder | Tech Enthusiast',
        images: ['/Professional.jpg']
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html suppressHydrationWarning lang="en">
            <body>
                <div id="root">
                    <Provider>
                        <ColorModeProvider>
                        {children}
                        </ColorModeProvider>
                    </Provider>
                    <Analytics/>
                </div>
            </body>
        </html>
    )
}