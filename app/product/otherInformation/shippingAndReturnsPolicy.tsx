"use client"
import { useState } from "react";
import { inter, plusJakartaSans } from "../../page";
import { IoAdd, IoRemove } from "react-icons/io5";
import { PiPhoneCallLight } from "react-icons/pi";
import { BsCopy } from "react-icons/bs";

export default function Shipping_And_Returns_Policy() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button
                className="w-full flex items-center justify-between py-7"
                onClick={() => setOpen(!open)}
            >
                <div className={`${plusJakartaSans.className} ${open ? "font-semibold" : "font-medium"} text-[14px]`}>SHIPPING AND RETURNS POLICY</div>
                <div className="text-[26px]">
                    {
                        open ? <IoRemove /> : <IoAdd />
                    }
                </div>
            </button>
            <div className={`w-full h-[1px] bg-black ${open ? "hidden" : "block"}`}></div>
            <div className={`${open ? "block" : "hidden"}`}>
                <div>
                    Item design & details may vary slightly from provided
                    image.
                    <br />
                    Proclassics luxury <b>does not accept returns or issue refunds for any reason.</b>
                    We do allow (1) exchange within 14 days of the purchase date.
                </div>
                <div className={`flex items-center justify-between ${inter.className} font-semibold mt-6`}>
                    <div>Call Now: 404-842-0266</div>
                    <div className="gap-[10px] items-center flex">
                        <div className="text-[32px]">
                            <PiPhoneCallLight />
                        </div>
                        <div className="text-[24px]">
                            <BsCopy />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}