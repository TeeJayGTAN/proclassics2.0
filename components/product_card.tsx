import Image from "next/image";
import {
    Inter,
    Lora,
    Nunito,
    Playfair_Display,
    Poppins,
    Raleway,
    Prompt,
    Plus_Jakarta_Sans
} from 'next/font/google';


export const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: '600', // or your desired weight
});
export const raleway = Raleway({
    subsets: ['latin'],
    weight: ['300', '500', '700', '900'], // or your desired weight
});
export const prompt = Prompt({
    subsets: ['latin'],
    weight: ['400', '600', '700', '900'], // or your desired weight
});
export const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['200', '400', '700', '800'], // or your desired weight
});
export const inter = Inter({
    subsets: ['latin'],
    weight: ['200', '300', '400', '700', '800'], // or your desired weight
});
export const lora = Lora({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], // or your desired weight
});
export const nunito = Nunito({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], // or your desired weight
});
export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], // or your desired weight
});

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