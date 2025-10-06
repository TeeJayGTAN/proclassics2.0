import { Inter } from "next/font/google";
import Image from "next/image";
import { IoCloudUploadOutline } from "react-icons/io5";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600"]
})

export default function Form() {
    return (
        <div className="flex items-center justify-center lg:gap-28 w-full">
            <div className="w-full max-w-[500px] shrink-0">
                <div className={`${inter.className} font-semibold text-center lg:text-start text-[36px]`}>
                    Get in touch
                </div>
                <div className={`mt-4 text-[#475467] text-[18px] text-center lg:text-start ${inter.className}`}>
                    We’d love to hear from you. Please fill out this form.
                </div>
                <div className={`mt-16 text-[#344054] text-[14px] font-medium`}>
                    First name
                </div>
                <input
                    className="w-full h-[44px] border border-[#D0D5DD] rounded-[8px] mt-1.5 px-4 py-2.5"
                    placeholder="First name"
                />
                <div className={`mt-6 text-[#344054] text-[14px] font-medium`}>
                    Email
                </div>
                <input
                    className="w-full h-[44px] border border-[#D0D5DD] rounded-[8px] mt-1.5 px-4 py-2.5"
                    placeholder="you@company.com"
                />
                <div className={`mt-6 text-[#344054] text-[14px] font-medium`}>
                    Phone Number
                </div>
                <input
                    className="w-full h-[44px] border border-[#D0D5DD] rounded-[8px] mt-1.5 px-4 py-2.5"
                    placeholder="+1 (555) 000-0000"
                />
                <div className={`mt-6 text-[#344054] text-[14px] font-medium`}>
                    Category
                </div>
                <div className="w-full h-[44px] border border-[#D0D5DD] rounded-[8px] mt-1.5 px-4 py-2.5">
                    <select className="w-full">
                        <option value={``}>Select Category</option>
                        <option value={``}>Watches</option>
                    </select>
                </div>
                <div className="w-full h-32 p-4 border border-[#EAECF0] rounded-xl mt-6 flex flex-col items-center justify-center">
                    <div className="border border-[#EAECF0] rounded-lg w-[40px] h-[40px] flex items-center justify-center">
                        <IoCloudUploadOutline />
                    </div>
                    <div className={`mt-3 ${inter.className} text-[14px] text-[#475467]`}>
                        <span className="text-[#6941C6] font-semibold">Click to upload</span> or drag and drop
                    </div>
                    <div className={`mt-1 ${inter.className} text-[14px] text-[#475467]`}>
                        SVG, PNG, JPG or GIF (max. 2MB)
                    </div>
                </div>
                <div className={`mt-6 text-[#344054] text-[14px] font-medium`}>
                    Message
                </div>
                <textarea
                    className="w-full h-32 border border-[#D0D5DD] rounded-[8px] mt-1.5 px-4 py-2.5"
                    placeholder="Leave us a message..."
                />
                <div className="flex items-center gap-3 mt-6">
                    <input type="checkbox" className="w-5 h-5 rounded-md" />
                    <div className={`${inter.className} text-[#475467]`}>
                        You agree to our <span className="underline">privacy policy</span>.
                    </div>
                </div>
                <button className={`${inter.className} bg-[#121212] text-white w-full py-3 font-semibold mt-8 rounded-lg`}>
                    Send Message
                </button>
            </div>
            <div className="hidden lg:block w-full h-[800px] relative">
                <Image src={`/anotherbanner.jpg`} alt="banner" fill className="object-cover" />
            </div>
        </div>
    );
}