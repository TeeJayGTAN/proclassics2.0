"use client"
import { HiOutlineSwitchVertical } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { nunito } from "../page";
import { useState } from "react";

export default function Category_Switch() {

    const categories = [
        "Watches",
        "Bracelets",
        "Earrings",
        "Rings",
        "Chains",
        "Grillz"
    ];

    const [selected_category, setSelectedCategory] = useState(categories[0]);

    return (
        <div className="relative">
            <div className="flex gap-[10px] items-center border-[#E0D7DE] border rounded-full px-[20px] py-[10px]">
                <HiOutlineSwitchVertical className="text-[20px]" />
                <div className={`${nunito.className}`}>Watches</div>
                <IoIosArrowDown className="text-[20px]" />
            </div>
            <div className="absolute top-[46px] right-0 p-[18px] shadow shadow-[#00000080] bg-white rounded-[10px]">
                <div className={`w-[180px] h-max space-y-[18px] ${nunito.className}`}>
                    {
                        categories.map((i, index) => (
                            <button className="block" key={index}>
                                {i}
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}