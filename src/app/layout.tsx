// STILE 
import './globals.css'

// COMPONENTI 
import Header from './components/Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
