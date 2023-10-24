import Link from "next/link"

export default function Header() {
    return (
        <header className="border-b-2 sticky top-0 right-0 left-0 bg-white mb-6">
            <nav className=" flex justify-between sticky  p-4 text-xl container mx-auto">
                <div>
                    <Link href="/">Logo</Link>
                </div>

                <div className="flex gap-4">
                    <Link href="/progetti">Progetti</Link>
                    <Link href="/contatti">Contatti</Link>
                </div>
            </nav>


        </header>
    )
}
