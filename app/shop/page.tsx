import { FiFilter } from "react-icons/fi";
import { inter, lora, nunito, plusJakartaSans } from "../page";
import Category_Switch from "./categories_switch";

export default function ShopPage() {
    return (
        <div className="mb-20">
            <div className={`bg-[#1E1E1E] w-full py-[40px] px-[20px] ${plusJakartaSans.className} text-center text-white`}>
                <div className="font-semibold text-[18px] lg:text-[30px]">
                    BLACK FRIDAY SALE | UP TO 40% OFF
                </div>
                <div className={`lg:text-[24px] font-light ${inter.className}`}>
                    Lorem ipsum dolor sit amet consectetur
                </div>
            </div>
            <section className="text-black">
                <section>

                </section>
                <section>
                    <div className={`mt-[60px] ${lora.className} px-4 text-[24px] font-semibold`}>
                        All Available Products
                    </div>
                    <div className="flex items-center justify-between mt-4 px-4">
                        <div className="flex gap-[8px] items-center">
                            <div className="border-[#E0D7DE] border w-[44px] h-[44px] rounded-full flex items-center justify-center text-[20px]">
                                <FiFilter />
                            </div>
                            <div className={`${nunito.className}`}>Filter</div>
                        </div>
                        <Category_Switch />
                    </div>
                </section>
            </section>
        </div>
    );
}