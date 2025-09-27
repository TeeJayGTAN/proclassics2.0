"use client"
import { useState } from "react";
import { plusJakartaSans } from "../../page";
import { IoAdd, IoRemove } from "react-icons/io5";

export default function Product_Detail() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button
                className="w-full flex items-center justify-between py-7"
                onClick={() => setOpen(!open)}
            >
                <div className={`${plusJakartaSans.className} ${open ? "font-semibold" : "font-medium"} text-[14px]`}>
                    PRODUCT DETAIL
                </div>
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
            </div>
        </div>
    );
}