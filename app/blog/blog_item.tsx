import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { Raleway } from "next/font/google";

const raleway = Raleway({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700', '900'],
});

export default function Blog_Item() {

    return (
        <div className="w-full">
            <div className="relative w-full h-[60vw] max-h-[230px] rounded-[15px] overflow-hidden">
                <Image src={"/col-card1.png"} alt="blog" fill className="object-cover" />
            </div>
            <div className="mt-[20px]">
                <div className={`${raleway.className} text-[14px] font-semibold`}>
                    Proclassics • 20 Jan 2024
                </div>
                <div className={`${raleway.className} font-semibold text-2xl lg:text-3xl flex items-center gap-[15px] justify-between mt-[10px]`}>
                    <div>Rings</div>
                    <MdArrowOutward className="shrink-0" />
                </div>
                <div className={`${raleway.className} text-[#475467] mt-[10px]`}>
                    Rings are small in size but endless in meaning. A symbol of style, promise, and presence
                </div>
            </div>
        </div>
    );
}