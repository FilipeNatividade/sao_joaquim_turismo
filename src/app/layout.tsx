import type { Metadata } from 'next'
import './globals.css'
import Menu from '@/components/menu/layout'
import Footer from '@/components/Footer/layout'
import brasao from '../../public/brasao.png'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Secretaria de Turismo São Joaquim',
  description: 'Site de Turismo de São Joaquim, SC',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="pt-BR">
      <head>
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-WJ6JX0L5SG" />
        <Script
          id='google-analytics'
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WJ6JX0L5SG', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
        <Script
          src="https://cdn.userway.org/widget.js"
          data-account="bTMuonKWIG"
        />
      </head>
      <body >
        <link rel="icon" href={brasao.src} type='image/png' />
        <Menu />
        <div className='layout_main'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
