import type { Metadata } from 'next'
import { Provider } from '../components/ui/provider'
import { ColorModeProvider } from '../components/ui/color-mode'

export const metadata: Metadata = {
    title: 'Salim Portfolio',
    description: 'My personal blog and portfolio',
    icons:{
        icon:"/Professional.jpg"
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
                </div>
            </body>
        </html>
    )
}