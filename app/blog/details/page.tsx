import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({
    subsets: ['latin'],
    weight: ['200', '300', '400', '700', '800'], // or your desired weight
});

export default function Blog_Details() {
    return (
        <div className="w-full flex items-center justify-center py-16 lg:py-24 px-4 lg:px-16">
            <div className="w-full max-w-[1200px] flex flex-col items-center">
                <div className={`${inter.className} font-semibold text-center`}>
                    Proclassics • 20 Jan 2024
                </div>
                <div className={`${inter.className} font-semibold text-[36px] lg:text-[48px] text-center mt-3 w-full max-w-[768px]`}>
                    High-Tech Jewelry Authentication in Nigeria
                </div>
                <div className={`${inter.className} text-[#475467] text-[18px] mt-4 lg:mt-6 text-center`}>
                    Test Your Diamonds with 99.9% Accuracy
                </div>
                <div className="relative w-full h-[50vw] max-h-[660px] overflow-hidden mt-12 lg:mt-16">
                    <Image src={"/jewelry_checker.png"} alt="blog" fill className="object-cover" />
                </div>
                <div className={`${inter.className} mt-12 lg:mt-16 w-full`}>
                    <div className="text-[24px] font-semibold">Introduction</div>
                    <div className="text-[#475467] mt-4">
                        In today&apos;s luxury jewelry market, authenticity is everything
                        — and nowhere is that more true than in Nigeria. With the
                        rising demand for certified gemstones, real diamonds, and
                        authentic moissanite, many buyers are starting to ask the
                        big question:
                        <br /> <br />
                        “How can I be 100% sure this jewelry is real?”
                        <br /> <br />
                        At ProClassics, we’ve answered that question with cutting-edge
                        technology that sets a new standard for jewelry authentication
                        — not just in Nigeria, but across the entire African continent.
                        <br /> <br />
                        🔍 The Only Machine in Africa That Prints Real Jewelry Results
                        While most jewelers rely on outdated tools like handheld diamond
                        pens or UV lights, ProClassics is the only brand in Africa using
                        a high-grade scanning machine that can accurately scan your jewelry
                        and print a live X-ray analysis of its authenticity.
                        <br /><br />
                        No guessing. No assumptions. No fakes.
                        <br /><br />
                        Whether you&apos;re testing a natural diamond, moissanite, or your engagement
                        ring, this scanner provides a live digital scan and delivers a 99.9%
                        accurate report — printed on the spot.
                        <br /><br />
                        This is the same level of assurance trusted by top jewelers and
                        collectors globally, now made accessible to you.
                    </div>
                    <div className="relative w-full h-[50vw] max-h-[660px] overflow-hidden mt-12 lg:mt-16 rounded-xl">
                        <Image src={"/blog_detail.jpg"} alt="blog" fill className="object-cover" />
                    </div>
                    <div className="text-[#475467] mt-12">
                        💎 Why Jewelry Testing Matters Now More Than Ever
                        <br /><br />
                        In the Nigerian luxury space, fake diamonds and look-alike
                        moissanite stones are circulating more than ever. Without testing,
                        it’s hard to tell the difference with the naked eye.
                        <br /><br />
                        That’s why smart buyers are now asking for proof before they pay.
                        <br /><br />
                        Getting your piece tested:
                        <br /><br />
                        Confirms whether it&apos;s natural or lab-made
                        <br /><br />
                        Protects you from overpriced fakes
                        <br /><br />
                        Increases your confidence when buying, gifting, or insuring luxury jewelry
                        <br /><br />
                        Whether it’s a new purchase or a piece you&apos;ve had for years, knowing the truth is worth it.
                        <br /><br />
                        💰 Normally $100, But FREE Right Now
                        <br /><br />
                        Jewelry testing at ProClassics normally costs $100 per session, but as of
                        the time of this blog, we&apos;re offering it absolutely FREE.
                        <br /><br />
                        It&apos;s our way of helping you shop smarter, protect your investment,
                        and experience the peace of mind that comes with real, tested, luxury jewelry.
                    </div>
                </div>
            </div>
        </div>
    );
}