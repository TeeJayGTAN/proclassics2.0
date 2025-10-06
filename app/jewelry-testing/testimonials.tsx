"use client"
import { Raleway } from "next/font/google";
import { useRef } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

const raleway = Raleway({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600"]
});

export default function Testimonials() {

    const reviewScroll = useRef<HTMLDivElement>(null);

    const scrollReviewRight = () => {
        if (reviewScroll) {
            reviewScroll.current?.scrollBy({ left: 320, behavior: "smooth" })
        }
    }

    const scrollReviewLeft = () => {
        if (reviewScroll) {
            reviewScroll.current?.scrollBy({ left: -320, behavior: "smooth" })
        }
    }

    const testimonials = [
        {
            testimony: `“I searched for where to test my jewelry in Lagos and found Pro Classics. They scanned my
                        gold necklace and gave me an instant report. It turned out to be 18K just like I was told when I
                        bought it. I’m so relieved. Their machine is top-notch!”`,
            name: `Ada E., Ayomide. O`
        },
        {
            testimony: `“I always thought my diamond ring was real until I used their jewelry scan test in Lagos. It turned
                        out to be moissanite! I would have sold it for way less or even gifted it. Thanks to Pro Classics, I
                        now know exactly what I own.”`,
            name: `Jesse. C`
        },
        {
            testimony: `“Best jewelry testing service in Lagos, hands down. I tested both my engagement ring and a
                        gold chain. Their scanner is not like the normal tester you see in the market. It printed out the
                        results instantly.”`,
            name: `Tosin A.`
        },
        {
            testimony: `“I needed a jewelry authenticity test in Nigeria for insurance. Pro Classics scanned my diamond
                        earrings and gave me a proper breakdown. I submitted the result to my insurer the same day.
                        Very professional and fast.”`,
            name: `Jennifer O.`
        },
        {
            testimony: `“I’ve used jewelry testers before but none gave me results this accurate. Pro Classics Jewelry
                        Tester showed me that one of my rings was lab-grown and not a natural diamond. Very helpful.
                        I’ll be back with more items!”`,
            name: `Bayo K.`
        },
        {
            testimony: `“If you’re in Lagos and not sure if your gold or diamond is real, go to Pro Classics. Their scanner
                        can tell the difference between moissanite, cubic zirconia, and real diamonds. It’s quick, reliable,
                        and they don’t damage your jewelry.”`,
            name: `Halima A.`
        },
        {
            testimony: `“I googled ‘scan test your jewelry in Lagos’ and Pro Classics popped up. I tested my mum’s old
                        jewelry set and they gave me results I could understand — gold karat, gemstone type,
                        everything. Highly recommended.”`,
            name: `Olamide O.`
        },
    ];

    return (
        <div className="flex mt-[40px] lg:mt-20 relative items-center justify-center px-4">
            <div ref={reviewScroll} className="w-[320px] md:w-[640px] lg:w-[960PX] flex overflow-x-hidden hidescroll">
                <div className="w-max flex gap-[20px] px-[10px]">
                    {
                        testimonials.map((i, index) => (
                            <div key={index} className="w-[300px] p-[20px]">
                                <div className={`${raleway.className} text-center`}>{i.testimony}</div>
                                <div className="mt-[32px] font-semibold">{i.name}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="absolute bottom-2.5 right-4 flex gap-4">
                <button onClick={() => scrollReviewLeft()} className="w-12 h-12 flex items-center justify-center border border-[#EAECF0] rounded-full text-[20px] text-[#667085]">
                    <IoMdArrowBack />
                </button>
                <button onClick={() => scrollReviewRight()} className="w-12 h-12 flex items-center justify-center border border-[#EAECF0] rounded-full text-[20px] text-[#667085]">
                    <IoMdArrowForward />
                </button>
            </div>
        </div>
    );
}