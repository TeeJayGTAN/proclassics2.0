"use client"
import { FiFilter } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useState, useTransition } from "react";

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

export default function Filters() {

    const [showFilterMenu, setShowFilterMenu] = useState(false);
    const [_, startTransition] = useTransition();

    const toggleMenu = (value: boolean) => {
        startTransition(() => {
            setShowFilterMenu(value)
        })
    }

    return (
        <div>
            <button
                className="flex gap-[8px] items-center lg:hidden"
                onClick={() => toggleMenu(true)}
            >
                <div className="border-[#E0D7DE] border w-[44px] h-[44px] rounded-full flex items-center justify-center text-[20px]">
                    <FiFilter />
                </div>
                <div className={`${nunito.className}`}>Filter</div>
            </button>
            <FilterMenu showFilterMenu={showFilterMenu} toggleMenu={toggleMenu} />
        </div>
    );
}

const FilterMenu = ({ showFilterMenu, toggleMenu }: { showFilterMenu: boolean, toggleMenu: Function }) => {

    const brands = [
        "Rolex",
        "Patek Philippe",
        "Audemars Piguet",
        "Vacheron Constantin",
        "Hublot"
    ];

    return (
        <div className={`fixed lg:static top-0 left-0 w-full lg:w-max h-full z-50 ${showFilterMenu ? "visible" : "invisible lg:visible"} transition-all duration-500`}>
            <div onClick={() => toggleMenu(false)} className={`absolute lg:hidden top-0 left-0 w-full h-full ${showFilterMenu ? "bg-[#00000080]" : "bg-transparent"} transition-all duration-500`}>

            </div>
            <div className={`absolute lg:static top-0 w-[300px] lg:w-max h-full ${showFilterMenu ? "left-0" : "-left-[300px]"} bg-white transition-all duration-500 lg:shadow lg:shadow-[#00000080]`}>
                <div
                    className="text-[26px] p-[20px] flex justify-end lg:hidden"
                >
                    <button
                        onClick={() => toggleMenu(false)}
                    >
                        <IoClose />
                    </button>
                </div>
                <div className="px-5 lg:p-5">
                    <div className={`${plusJakartaSans.className} font-semibold text-[18px] lg:hidden`}>Filters</div>
                    <div className={`${lora.className} font-medium text-[18px] mt-[30px] lg:mt-0`}>Availability</div>
                    <div className="mt-[20px] flex gap-[10px] items-center">
                        <input type="checkbox" className="w-[16px] h-[16px] outline-none accent-black" />
                        <div className={`${raleway.className} text-[14px]`}>In Stock</div>
                    </div>
                    <div className="mt-[16px] flex gap-[10px] items-center">
                        <input type="checkbox" className="w-[16px] h-[16px] outline-none accent-black" />
                        <div className={`${raleway.className} text-[14px]`}>Out of Stock</div>
                    </div>
                    <div className={`${lora.className} font-medium text-[18px] mt-[20px]`}>Brand</div>
                    <div className="mt-[4px]">
                        {
                            brands.map((i, index) => (
                                <div className="mt-[16px] flex gap-[10px] items-center" key={index}>
                                    <input type="checkbox" className="w-[16px] h-[16px] outline-none accent-black" />
                                    <div className={`${raleway.className} text-[14px]`}>{i}</div>
                                </div>
                            ))
                        }
                    </div>
                    <div className={`mt-[30px] border border-[#A48C9F] flex items-center justify-center w-full h-[40px] rounded-full ${nunito.className} text-[14px]`}>
                        Apply
                    </div>
                </div>
            </div>
        </div>
    );
}