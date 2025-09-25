import Image from "next/image";
import { raleway } from "@/app/page";

export default function Footer() {
    return (
        <footer className="footer bg-black w-full h-[35vh] px-4 pt-4">
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
        </footer>
    );
}