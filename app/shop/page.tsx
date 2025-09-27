import Product_Card from "@/components/product_card";
import { inter, lora, playfairDisplay, plusJakartaSans, poppins, raleway } from "../page";
import Category_Switch from "./categories_switch";
import Filters from "./filters";
import Image from "next/image";

export default function ShopPage() {
    return (
        <div className="mb-20 flex flex-col items-center overflow-hidden">
            <div className={`bg-[#1E1E1E] w-full py-[40px] px-[20px] ${plusJakartaSans.className} text-center text-white`}>
                <div className="font-semibold text-[18px] lg:text-[30px]">
                    BLACK FRIDAY SALE | UP TO 40% OFF
                </div>
                <div className={`lg:text-[24px] font-light ${inter.className}`}>
                    Lorem ipsum dolor sit amet consectetur
                </div>
            </div>
            <section className="text-black lg:flex lg:gap-[30px] lg:px-[60px] mt-[60px] lg:mt-[80px] lg:w-full lg:max-w-[1400px]">
                <div className="hidden lg:block">
                    <Filters />
                </div>
                <section className="px-4">
                    <div className={`${lora.className} text-[24px] font-semibold`}>
                        All Available Products
                    </div>
                    <div className="flex items-center justify-between mt-4 lg:hidden">
                        <Filters />
                        <Category_Switch />
                    </div>
                    <section>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-[16px] lg:gap-[24px] mt-4 lg:mt-6">
                            <Product_Card />
                            <Product_Card />
                            <Product_Card />
                        </div>
                    </section>
                    <section className="mt-[40px]">
                        <div className={`${raleway.className} font-bold text-[12px]`}>CUSTOM JEWELRY</div>
                        <div className="mt-[10px]">
                            <div className="anotherbanner w-full h-[75vw] max-h-[470px] flex flex-col items-start justify-end p-4">
                                <div className={`${raleway.className} text-[18px] lg:text-[24px] font-bold w-[200px] lg:w-[400px] text-white`}>
                                    Jewelry as unique as you are—crafted to tell your story
                                </div>
                                <button className={`mt-4 bg-white px-[20px] py-[5px] rounded-full text-[14px] ${inter.className}`}>
                                    Shop
                                </button>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-[16px] lg:gap-[24px] mt-6 lg:mt-8">
                            <Product_Card />
                            <Product_Card />
                            <Product_Card />
                        </div>
                    </section>
                    <section className="mt-[40px]">
                        <div className="w-full h-[75vw] max-h-[300px] relative">
                            <Image src={`/shop_page_banner.jpg`} alt="banner" fill className="object-cover z-0" />
                            <div className="flex flex-col items-center justify-center p-4 bg-[#00000080] z-10 relative w-full h-full">
                                <div className={`${playfairDisplay.className} text-[18px] lg:text-[27px] font-bold text-white text-center w-[200px] lg:w-[300px]`}>
                                    Looking for something one-of-a-kind?
                                </div>
                                <div className={`mt-4 ${poppins.className} text-[#D1D5DB] text-[12px] lg:text-[14px] text-center font-medium max-w-[520px]`}>
                                    Design your custom bracelet with Proclassic.
                                    Our master craftsmen bring your vision to life
                                    with precision and artistry.
                                </div>
                                <button className={`mt-4 lg:mt-6 px-[20px] py-[10px] bg-white ${inter.className} text-[10px] lg:text-[12px] font-medium`}>
                                    START A CUSTOM ORDER
                                </button>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-[16px] lg:gap-[24px] mt-6 lg:mt-8">
                            <Product_Card />
                            <Product_Card />
                            <Product_Card />
                        </div>
                    </section>
                </section>
            </section>
        </div>
    );
}