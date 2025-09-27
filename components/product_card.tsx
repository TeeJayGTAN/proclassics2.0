import Image from "next/image";
import { lora, nunito } from "@/app/page";

export default function Product_Card() {
    return (
        <div className="collection-card flex flex-col justify-start">
            <div className="w-full max-w-[310px] h-[60vw] max-h-[400px] rounded-[7px] overflow-hidden relative">
                <Image className="object-cover" fill alt="collection card pic" src={"/col-card3.png"} />
            </div>
            <div className={`mt-[8px] mb-[5px] lg:mt-[16px] lg:mb-[10px] ${nunito.className} text-[#433740] text-[12px] lg:text-[14px]`}>Wrist Watch</div>
            <div className={` ${lora.className} title font-semibold text-[14px] lg:text-[18px]`}>
                Audemars Piguet Royal Oak 154000R 41mm 2017 Blue Dial
            </div>
        </div>
    );
}