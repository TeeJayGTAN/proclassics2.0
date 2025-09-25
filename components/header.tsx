"use client"
import { raleway } from "@/app/page";
import Image from "next/image";
import Link from "next/link";
import { useState, useTransition } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export default function Header() {
    const [openNav, setOpenNav] = useState(false);
    const [_, startTransition] = useTransition();

    const toggleNav = (value: boolean) => {
        startTransition(() => {
            setOpenNav(value)
        })
    }

    return (
        <header className="p-5 grid grid-cols-3 items-center lg:flex lg:justify-center lg:w-full lg:gap-[20px]">
            <button
                className="text-[26px] lg:hidden"
                onClick={() => toggleNav(true)}
            >
                <IoIosMenu />
            </button>
            <div className="logo flex justify-center">
                <Image alt="pic" src={'/logo.png'} width={100} height={100} />
            </div>
            <Nav openNav={openNav} toggleNav={toggleNav} />
        </header>
    );
}

const Nav = ({ openNav, toggleNav }: { openNav: any, toggleNav: any }) => {

    const navLinks = [
        {
            name: "Watches",
            url: "/shop/watches"
        },
        {
            name: "Eye Wears",
            url: "/shop/eye-wears"
        },
        {
            name: "Bracelet",
            url: "/shop/bracelets"
        },
        {
            name: "Grillz",
            url: "/shop/grillz"
        },
        {
            name: "Earrings",
            url: "/shop/earrings"
        },
        {
            name: "Blog",
            url: "/blog"
        },
        {
            name: "Jewelry Testing",
            url: "/jewelry-testing"
        },
        {
            name: "Fix Your Jewelry",
            url: "/fix-your-jewelry"
        },
        {
            name: "Custom Jewelry",
            url: "/custom-jewelry"
        }
    ];

    return (
        <div className={`fixed lg:static top-0 left-0 w-full lg:w-max h-full z-50 ${openNav ? "visible" : "invisible lg:visible"} transition-all duration-500`}>
            <div className={`absolute lg:hidden top-0 left-0 w-full h-full ${openNav ? "bg-[#00000080]" : "bg-transparent"} transition-all duration-500`}>

            </div>
            <div className={`absolute lg:static top-0 w-[300px] lg:w-max h-full ${openNav ? "right-0" : "-right-[300px]"} bg-white transition-all duration-500`}>
                <div
                    className="text-[26px] p-[20px] flex justify-end lg:hidden"
                >
                    <button
                        onClick={() => toggleNav(false)}
                    >
                        <IoClose />
                    </button>
                </div>
                <div className={`p-[20px] space-y-[20px] ${raleway.className} lg:flex lg:space-y-0 lg:space-x-[20px] lg:text-[14px]`}>
                    {
                        navLinks.map((i, index) => (
                            <div key={index}>
                                <Link href={i.url}>
                                    {i.name}
                                </Link>
                            </div>
                        ))
                    }
                    <div>
                        <Link href={``} className="flex items-center gap-[15px] font-semibold">
                            Request Custom Piece
                            <div className="text-[#0052B4] w-[24px] h-[24px] border border-[#0052B4] rounded-full flex items-center justify-center text-[14px]">
                                <FaArrowRightLong />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}