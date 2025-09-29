import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ['latin'],
    weight: ['200', '300', '400', '700', '800'], // or your desired weight
});

export default function PageNavigation() {
    return (
        <div className="flex items-center justify-center gap-[50px]">
            <button className="w-[36px] h-[36px] flex items-center justify-center border border-[#D0D5DD] text-[#344054] rounded-md text-[20px]">
                <IoMdArrowBack />
            </button>
            <div className={`${inter.className} text-[14px] text-[#344054]`}>
                Page 1 of 10
            </div>
            <button className="w-[36px] h-[36px] flex items-center justify-center border border-[#D0D5DD] text-[#344054] rounded-md text-[20px]">
                <IoMdArrowForward />
            </button>
        </div>
    );
}