import { Raleway } from "next/font/google";
import Image from "next/image"

const raleway = Raleway({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export default function Newsletter() {
    return (
        <div className="mt-10 w-full flex flex-col items-center justify-center py-10 lg:py-20 bg-[#FAFAFA]">
            <Image src={`/ring.png`} alt="ring" width={999} height={999} className="w-[100px] lg:w-[144px]" />
            <div className={`${raleway.className} mt-8 lg:mt-12 text-2xl lg:text-5xl tracking-wider`}>
                NEWSLETTER
            </div>
            <div className={`mt-4 lg:mt-6 ${raleway.className} font-extralight text-[18px]`}>
                Insights, inspiration, and exclusives.
            </div>
            <div className={`flex items-center mt-4 lg:mt-12 ${raleway.className}`}>
                <input
                    className="bg-white border border-[#E6E6E6] h-10 lg:h-12 px-[10px] lg:w-[360px]"
                    placeholder="mail@proclassics.co"
                >
                </input>
                <button className="bg-black text-white h-10 lg:h-12 px-3 lg:px-10 font-light lg:text-[18px]">
                    Submit
                </button>
            </div>
        </div>
    );
}