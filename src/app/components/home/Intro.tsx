import Link from "next/link"
import Image from "next/image"

export default function Intro() {
    return (
        <section className="grid grid-cols-1 container mx-auto gap-8 md:grid-cols-2 px-4">
            <div className="bg-red-200">TEXT</div>
            <div className="">
                <Image src='https://picsum.photos/600/600' width={600} height={600} alt="filippo-bonafini" />
            </div>
        </section>
    )
}
