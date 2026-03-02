import type { Metadata, Viewport } from 'next'
import { Provider } from '../components/ui/provider'
import { ColorModeProvider } from '../components/ui/color-mode'
import { Analytics } from '@vercel/analytics/next'

const siteName = 'Salim B. Portfolio'
const defaultTitle = 'Salim Babaji | Software Engineer'
const description =
    'Portfolio of Salim Babaji, a software engineer focused on building fast, accessible, and scalable web applications.'
const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: defaultTitle,
        template: `%s | ${siteName}`,
    },
    description,
    keywords: [
        'Salim Babaji',
        'Full-Stack Engineer',
        'Software Engineer Portfolio',
        'React Developer',
        'Next.js Developer',
        'TypeScript',
        'Web Developer',
    ],
    authors: [{ name: 'Salim Babaji' }],
    creator: 'Salim Babaji',
    publisher: 'Salim Babaji',
    alternates: {
        canonical: '/',
    },
    referrer: 'origin-when-cross-origin',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    category: 'technology',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    icons: {
        icon: '/Professional-600.jpg',
        apple: '/Professional-600.jpg',
    },
    openGraph: {
        title: defaultTitle,
        description,
        url: '/',
        images: [
            {
                url: '/Professional.jpg',
                alt: 'Portrait of Salim Babaji',
            },
        ],
        type: 'website',
        locale: 'en_US',
        siteName,
    },
    twitter: {
        card: 'summary_large_image',
        title: defaultTitle,
        description,
        images: ['/Professional.jpg'],
    },
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#f7fafc',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const schema = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Person',
                name: 'Salim Babaji',
                jobTitle: 'Full-Stack Software Engineer',
                url: siteUrl ?? '/',
                image: '/Professional.jpg',
                sameAs: [
                    'https://github.com/SalimCantCode',
                    'https://www.linkedin.com/in/salim-babaji',
                ],
            },
            {
                '@type': 'WebSite',
                name: siteName,
                url: siteUrl ?? '/',
                description,
            },
        ],
    }

    return (
        <html suppressHydrationWarning lang="en">
            <body>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
                <div id="root">
                    <Provider>
                        <ColorModeProvider>
                            {children}
                        </ColorModeProvider>
                    </Provider>
                    <Analytics />
                </div>
            </body>
        </html>
    )
}
