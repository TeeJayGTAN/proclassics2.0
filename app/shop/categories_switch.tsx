"use client"
import { HiOutlineSwitchVertical } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { nunito } from "../page";
import { useEffect, useState } from "react";

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
    const [isShowingCategories, setIsShowingCategories] = useState(false);

    useEffect(() => {
        if (selected_category) {
            setIsShowingCategories(false);
        }
    }, [selected_category])

    return (
        <div className="relative">
            <button
                className="flex gap-[10px] items-center border-[#E0D7DE] border rounded-full px-[20px] py-[10px]"
                onClick={() => setIsShowingCategories(!isShowingCategories)}
            >
                <HiOutlineSwitchVertical className="text-[20px]" />
                <div className={`${nunito.className}`}>{selected_category}</div>
                <IoIosArrowDown className="text-[20px]" />
            </button>
            <div className={`absolute z-40 top-[46px] right-0 shadow shadow-[#00000080] bg-white rounded-[10px] overflow-hidden transition-all duration-300 px-[18px] overflow-y-scroll ${isShowingCategories ? "h-[300px] py-[18px]" : "h-0 py-0"}`}>
                <div className={`w-[180px] h-max space-y-[18px] ${nunito.className}`}>
                    {
                        categories.filter((i) => i !== selected_category).map((i, index) => (
                            <button
                                className="block" key={index}
                                onClick={() => setSelectedCategory(i)}
                            >
                                {i}
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}