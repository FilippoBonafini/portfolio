import Link from "next/link"
import Image from "next/image"

export default function Intro() {
    return (
        <section className="container mx-auto gap-10 lg:grid lg:grid-cols-2 px-4 flex-col flex items-center">
            {/* CONTENUTO  */}
            <div>
                {/* TESTI  */}
                <div>
                    <h1 className="md:text-[90px] text-[70px] font-bold leading-[0.8]">FILIPPO BONAFINI</h1>
                    <h2 className="text-[40px] md:text-[50px]">Full Stack developer</h2>
                    <p className="text-[24px] mt-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat eaque impedit repudiandae soluta optio aliquid at voluptates. Quia minima exercitationem, maiores harum magni, provident labore impedit neque, repudiandae blanditiis ducimus!</p>
                </div>
                {/* CALL TO ACTION  */}
                <div>
                    <Link href="/contatti">Contatti</Link>
                </div>
            </div>

            {/* ILLUSTRAZIONE */}
            <div>
                <Image src='https://picsum.photos/740/610' width={740} height={610} alt="filippo-bonafini" />
            </div>
        </section>
    )
}
