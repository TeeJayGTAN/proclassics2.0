import Image from "next/image";

export default function Images() {
    return (
        <section className="w-full max-w-[400px] lg:max-w-[750px]">
            <div className="w-full h-[90vw] max-h-[400px] lg:max-h-[900px] relative rounded-[12px] overflow-hidden">
                <Image src={`/col-card3.png`} alt="product" fill className="object-cover" />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-[10px]">
                <div className="w-full max-w-[100px] lg:max-w-[180px] h-[20vw] max-h-[100px] lg:max-h-[220px] relative rounded-[12px] overflow-hidden">
                    <Image src={`/col-card3.png`} alt="product" fill className="object-cover" />
                </div>
                <div className="w-full max-w-[100px] lg:max-w-[180px] h-[20vw] max-h-[100px] lg:max-h-[220px] relative rounded-[12px] overflow-hidden">
                    <Image src={`/col-card3.png`} alt="product" fill className="object-cover" />
                </div>
                <div className="w-full max-w-[100px] lg:max-w-[180px] h-[20vw] max-h-[100px] lg:max-h-[220px] relative rounded-[12px] overflow-hidden">
                    <Image src={`/col-card3.png`} alt="product" fill className="object-cover" />
                </div>
                <div className="w-full max-w-[100px] lg:max-w-[180px] h-[20vw] max-h-[100px] lg:max-h-[220px] relative rounded-[12px] overflow-hidden">
                    <Image src={`/col-card3.png`} alt="product" fill className="object-cover" />
                </div>
            </div>
        </section>
    );
}