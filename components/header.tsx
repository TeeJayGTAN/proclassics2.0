"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import {
  Inter,
  Lora,
  Nunito,
  Playfair_Display,
  Poppins,
  Raleway,
  Prompt,
  Plus_Jakarta_Sans,
} from "next/font/google";
import api from "@/utils/api";
import { phonenumber } from "@/lib/constants";

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: "600", // or your desired weight
});
export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "500", "700", "900"], // or your desired weight
});
export const prompt = Prompt({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"], // or your desired weight
});
export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "400", "700", "800"], // or your desired weight
});
export const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700", "800"], // or your desired weight
});
export const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // or your desired weight
});
export const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // or your desired weight
});
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // or your desired weight
});

export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  const [_, startTransition] = useTransition();
  const pathname = usePathname();

  const toggleNav = (value: boolean) => {
    startTransition(() => {
      setOpenNav(value);
    });
  };

  useEffect(() => {
    toggleNav(false);
  }, [pathname]);

  return (
    <header className="p-5 grid grid-cols-3 items-center lg:flex lg:justify-center lg:w-full lg:gap-[20px]">
      <button className="text-[26px] lg:hidden" onClick={() => toggleNav(true)}>
        <IoIosMenu />
      </button>
      <Link href={"/"} className="logo flex justify-center">
        <Image alt="pic" src={"/logo.png"} width={100} height={100} />
      </Link>
      <Nav openNav={openNav} toggleNav={toggleNav} />
    </header>
  );
}

const Nav = ({
  openNav,
  toggleNav,
}: {
  openNav: boolean;
  toggleNav: Function;
}) => {
  const [categories, setCategories] = useState<any[]>([]);

  const fetchCategories = async () => {
    await api
      .get("/api/category/get-all")
      .then((res) => setCategories(res.data.categories));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const navLinks = [
    {
      name: "Blog",
      url: "/blog",
    },
    {
      name: "Jewelry Testing",
      url: "/jewelry-testing",
    },
    {
      name: "Custom Jewelry",
      url: "/custom-jewelry",
    },
  ];

  const message = "I would love to request a custom piece";

  return (
    <div
      className={`fixed lg:static top-0 left-0 w-full lg:w-max h-full z-50 ${
        openNav ? "visible" : "invisible lg:visible"
      } transition-all duration-500`}
    >
      <div
        onClick={() => toggleNav(false)}
        className={`absolute lg:hidden top-0 left-0 w-full h-full ${
          openNav ? "bg-[#00000080]" : "bg-transparent"
        } transition-all duration-500`}
      ></div>
      <div
        className={`absolute lg:static top-0 w-[300px] lg:w-max h-full ${
          openNav ? "right-0" : "-right-[300px]"
        } bg-white transition-all duration-500`}
      >
        <div className="text-[26px] p-[20px] flex justify-end lg:hidden">
          <button onClick={() => toggleNav(false)}>
            <IoClose />
          </button>
        </div>
        <div
          className={`p-[20px] space-y-[20px] ${raleway.className} lg:flex lg:space-y-0 lg:space-x-[20px] lg:text-[14px]`}
        >
          {categories?.map((i, index) => (
            <div key={index}>
              {i?.slug && <Link href={`/shop/${i.slug}`}>{i?.name}</Link>}
            </div>
          ))}
          {navLinks.map((i, index) => (
            <div key={index}>
              <Link href={i.url}>{i.name}</Link>
            </div>
          ))}
          <div>
            <Link
              href={`https://wa.me/${phonenumber}?text=${message.replaceAll(" ", "%20")}`}
              className="flex items-center gap-[15px] font-semibold"
            >
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
};
