import Image from "next/image";
import { playfairDisplay, raleway } from "@/app/page";

export default function Footer() {
    return (
        <footer className="footer bg-black w-full px-4 pt-4">
            <div className="logo w-[134.64px] h-[48.01px]">
                <Image className="w-full h-full object cover" width={100} height={100} src={'/logoreal.png'} alt="picss" />
            </div>
            <div className={`${raleway.className} text text-left text-sm font-light text-white my-4 mb-8`}>
                Elevating identity through custom jewelry and timeless pieces. Crafted for distinction, designed for legacy.
            </div>
            <div className="social-icons flex gap-4">
                <div className="w-[64px]">
                    <Image className="w-full h-full object-cover" width={100} height={100} alt="pic" src={'/insta.svg'} />
                </div>
                <div className="w-[64px]">
                    <Image className="w-full h-full object-cover" width={100} height={100} alt="pic" src={'/message.svg'} />
                </div>
            </div>
            <div className="quick-links mt-24">
                <h3 className={`${playfairDisplay.className} font-semibold text-white text-[24px]`}>Quick Links</h3>
                <ul className="links mt-5 text-[#D1D5DB] flex flex-col gap-4">
                    <li className={`${raleway.className} text-lg font-medium`}>Shop</li>
                    <li className={`${raleway.className} text-lg font-medium`}>About</li>
                    <li className={`${raleway.className} text-lg font-medium`}>Custom Orders</li>
                    <li className={`${raleway.className} text-lg font-medium`}>Blog</li>
                    <li className={`${raleway.className} text-lg font-medium`}>FAQ</li>
                </ul>
            </div>
            <div className="contact mt-24">
                <h3 className={`${playfairDisplay.className} font-semibold text-white text-[24px]`}>Contact</h3>
                <ul className="details mt-5 text-[#D1D5DB] flex flex-col gap-4">
                    <li className={`${raleway.className} flex gap-3 items-center`}>
                        <Image className="w-[32px]" width={100} height={100} alt="picsz" src={'/location.svg'}/>
                        <span className="text-lg font-medium">Dubai - Walk in by Appointment Only</span>
                    </li>
                    <li className={`${raleway.className} flex gap-3 items-center`}>
                        <Image className="w-[32px]" width={100} height={100} alt="picsz" src={'/location.svg'}/>
                        <span className="text-lg font-medium">Silverado mall, 23b Admiralty, lekki, Lagos, Nigeria</span>
                    </li>
                    <li className={`${raleway.className} flex gap-3 items-center`}>
                        <Image className="w-[32px]" width={100} height={100} alt="picsz" src={'/location.svg'}/>
                        <span className="text-lg font-medium">I2 Motors Building, Spintex Road, Accra, Ghana</span>
                    </li>
                    <li className={`${raleway.className} flex gap-3 items-center`}>
                        <Image className="w-[32px]" width={100} height={100} alt="picsz" src={'/phone.svg'}/>
                        <span className="text-lg font-medium">+971 52 465 0058</span>
                    </li>
                    <li className={`${raleway.className} flex gap-3 items-center`}>
                        <Image className="w-[32px]" width={100} height={100} alt="picsz" src={'/messageicon.svg'}/>
                        <span className="text-lg font-medium">info@proclassic.com</span>
                    </li>
                </ul>
                <div className={`end text-[#9CA3AF] font-medium text-[10px] justify-between border-t-1 py-5 flex border-[#1F2937] ${raleway.className} mt-12`}>
                    <div className="">© 2024 Proclassic. All rights reserved.</div>
                    <div className="">Privacy Policy</div>
                    <div className="">Terms of Service</div>
                </div>
            </div>
        </footer>
    );
}