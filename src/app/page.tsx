import { Metadata } from "next"

// COMPONENTI 
import Intro from "./components/home/Intro"

export const metadata: Metadata = {
  title: 'FB | Home',
  description: 'Benvenuti nel mio sito portfolio personale. Scoprite le mie competenze, progetti e informazioni professionali. Sono uno sviluppatore web appassionato con esperienza in Next.js, React e molto altro.',
}

export default function Home() {
  return (
    <main>
      <Intro />
    </main>
  )
}
