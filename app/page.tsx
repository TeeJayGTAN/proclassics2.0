import Image from "next/image";
import { Inter, Lora, Nunito, Playfair_Display, Poppins } from 'next/font/google';
import { Raleway } from 'next/font/google';
import { Prompt } from 'next/font/google';
import { Plus_Jakarta_Sans } from 'next/font/google';
import vid1 from '../vid1.mp4';
import vid2 from '../vid2.mp4';
import vid3 from '../vid3.mp4';


export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: '600', // or your desired weight
});
export const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '500', '700', '900'], // or your desired weight
});
export const prompt = Prompt({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'], // or your desired weight
});
export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['200', '400', '700', '800'], // or your desired weight
});
export const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '700', '800'], // or your desired weight
});
export const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // or your desired weight
});
export const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // or your desired weight
});
export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // or your desired weight
});

const colCards = [
  {
    srcUrl: '/col-card1.png',
    title: 'RING COLLECTION'
  },
  {
    srcUrl: '/col-card2.png',
    title: 'BRACELET COLLECTION'
  },
  {
    srcUrl: '/col-card3.png',
    title: 'WATCHES COLLECTION'
  },
  {
    srcUrl: '/col-card4.png',
    title: 'CHAINS COLLECTION'
  },
  {
    srcUrl: '/col-card5.png',
    title: 'EARRINGS COLLECTION'
  },
  {
    srcUrl: '/col-card6.png',
    title: 'EYEWEAR COLLECTION'
  },
  {
    srcUrl: '/col-card7.png',
    title: 'VCA COLLECTION'
  },
  {
    srcUrl: '/col-card8.png',
    title: 'NECKLACE COLLECTION'
  },

]

export default function Home() {
  return (
    <div className="relative">
      <section className="hero hero-bg w-full h-[50vh] text-white text-center flex flex-col justify-center items-center gap-5">
        <h1 className={`heading ${playfairDisplay.className} font-semibold text-2xl`}>Making you new</h1>
        <div className={`${raleway.className} font-medium text-base text-black bg-white rounded py-2 px-3 cursor-pointer`}>Shop Now</div>
      </section>
      <section className="features my-12 flex flex-col gap-3 items-center justify-center">
        <div className="feature-card flex flex-col items-center justify-center gap-3 w-[53%] bg-[#fafafa] p-12 py-16 rounded text-center">
          <div className="svg1 w-[25px] ">
            <Image className="w-full h-full" width={100} height={100} alt='feature 1' src={'/svg1.svg'} />
          </div>
          <div className={`feature-card-text ${raleway.className} font-light text-sm`}>
            Very Fast Shipping
          </div>
        </div>
        <div className="feature-card flex flex-col items-center justify-center gap-3 w-[53%] bg-[#fafafa] p-12 py-16 rounded text-center">
          <div className="svg1 w-[25px] ">
            <Image className="w-full h-full" width={100} height={100} alt='feature 1' src={'/svg2.svg'} />
          </div>
          <div className={`feature-card-text ${raleway.className} font-light text-sm`}>
            Secure Payments
          </div>
        </div>
        <div className="feature-card flex flex-col items-center justify-center gap-3 w-[53%] bg-[#fafafa] p-12 py-16 rounded text-center">
          <div className="svg1 w-[25px] ">
            <Image className="w-full h-full" width={100} height={100} alt='feature 1' src={'/svg3.svg'} />
          </div>
          <div className={`feature-card-text ${raleway.className} font-light text-sm`}>
            Hassle-Free Returns
          </div>
        </div>
        <div className="feature-card flex flex-col items-center justify-center gap-3 w-[53%] bg-[#fafafa] p-12 py-16 rounded text-center">
          <div className="svg1 w-[25px] ">
            <Image className="w-full h-full" width={100} height={100} alt='feature 1' src={'/svg4.svg'} />
          </div>
          <div className={`feature-card-text ${raleway.className} font-light text-sm`}>
            Gift Ready Packaging
          </div>
        </div>


      </section>
      <section className="black-friday bf-bg text-white w-full h-[55vh] px-12 flex flex-col items-end justify-center">
        <div className="text-content flex flex-col items-end justify-center max-w-[220px] gap-y-1.5">
          <div className={`${plusJakartaSans.className} text-[0.62rem] self-start font-bold text-start`}>25 - 30th December</div>
          <div className={`${prompt.className} font-bold text-[2.85rem] leading-[0.9] text-start self-start`}>BLACK</div>
          <div className={`${prompt.className} font-bold text-[2.85rem] leading-[0.45] text-start self-start`}>FRIDAY</div>
          <div className={`${prompt.className} text-start self-start font-semibold text-xl`}>HASTA</div>
          <div className={`${prompt.className} font-bold text-[2.85rem] leading-[0.9] text-start self-start`}>40%</div>
        </div>
      </section>
      <button className={`cta ${raleway.className} fixed bottom-14 right-8 text-white font-bold bg-[#2B9D84] mt-[100px] uppercase flex items-center justify-center text-lg p-5 gap-x-3 rounded-full`}>
        <span className="w-[36px]"><Image className="object-cover" width={100} height={100} alt="whatsapp" src={'/whatsappicon.png'} /></span>
        {/* Chat Now */}
      </button>
      <section className="collection px-4 py-12 mx-auto flex flex-col items-center w-full ">
        <h2 className={`collection-heading ${raleway.className} text-xl font-medium text-center`}>OUR ICONIC CUSTOM COLLECTION</h2>
        <div className="collections flex items-center justify-start gap-x-[11px] overflow-x-auto mt-10 hide-scrollbar">
          <Image className="w-[47%] rounded" width={160} height={334} alt="collection pic" src={'/collection1.png'} />
          <Image className="w-[60%] rounded" width={240} height={350} alt="collection pic" src={'/collection2.png'} />
          <Image className="w-[43%] rounded" width={150} height={320} alt="collection pic" src={'/collection3.png'} />
        </div>
        <button className={`shop ${raleway.className} font-medium text-base px-5 py-3 bg-[#121212] text-white mt-10 rounded`}>Shop Now</button>
      </section>
      <section className="px-4 py-12 w-full mx-auto flex flex-col items-center">
        <h2 className={`collection-heading ${raleway.className} font-medium text-xl text-center`}>OBSESSIVE ATTENTION.<br />MAKING YOU NEW</h2>
        <div className="collection-grid grid grid-cols-2 gap-4">
          {
            colCards.map((card, index) => (
              <div key={index} className="collection-card flex flex-col justify-start gap-y-3">
                <div className="card-img overflow-hidden rounded">
                  <Image className="rounded mt-8 w-full" width={158} height={198} alt="collection card pic" src={card.srcUrl} />
                </div>
                <div className={` ${playfairDisplay.className} title font-semibold text-base`}>
                  {card.title}
                </div>
              </div>
            ))
          }
        </div>
      </section>
      <section className="custom-pieces px-4 py-12 w-full mx-auto flex flex-col items-center">
        <h2 className={`cp-heading ${raleway.className} font-medium text-xl text-center`}>CUSTOM PIECES</h2>
        <div className="scroll-container overflow-x-auto w-full mt-10 px-4">
          <div className="cp flex justify-center items-center gap-2 w-full">
            <div className="vid-container rounded-lg overflow-hidden min-w-[30%]">
              <video className="w-full h-full" width="320" height="240" autoPlay={true} loop={true} muted={true}>
                <source src={'../vid1.mp4'} type="video/mp4" />
              </video>
            </div>
            <div className="vid-container rounded-lg overflow-hidden min-w-[40%]">
              <video className="w-full h-full" width="320" height="240" autoPlay={true} loop={true} muted={true}>
                <source src={'../vid2.mp4'} type="video/mp4" />
              </video>
            </div>
            <div className="vid-container rounded-lg overflow-hidden min-w-[30%]">
              <video className="w-full h-full " width="320" height="240" autoPlay={true} loop={true} muted={true}>
                <source src={'../vid3.mp4'} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <button className={`shop ${raleway.className} font-medium text-base px-5 py-3 bg-[#121212] text-white mt-10 rounded`}>Contact Us</button>
      </section>
      <section className="jewelry-testing px-4 py-12 w-full mx-auto flex flex-col items-center">
        <h2 className={`cp-heading ${raleway.className} font-medium text-xl text-center uppercase`}>Jewelry Testing</h2>
        <div className="banner-vid mt-8">
          <div className="vid-container rounded-lg overflow-hidden">
            <video className="w-full h-full " width="320" height="240" autoPlay={true} loop={true} muted={true}>
              <source src={'../banner.mp4'} type="video/mp4" />
            </video>
          </div>
        </div>
        <button className={`shop ${raleway.className} font-medium text-base px-5 py-3 bg-[#121212] text-white mt-10 rounded`}>Contact Us</button>
      </section>
      <section className="custom-pieces px-4 py-12 w-full mx-auto flex flex-col items-center">
        <h2 className={`cp-heading ${raleway.className} font-medium text-xl text-center`}>TIMELESS PIECES</h2>
        <div className="scroll-container overflow-x-auto w-full mt-10 px-4">
          <div className="cp flex justify-center items-center gap-2 w-full">
            <div className="vid-container rounded-lg overflow-hidden h-[191] min-w-[30%]">
              <Image className="w-full h-full object-cover" width={76} height={191} alt='timeless' src={'/t1.jpg'} />
            </div>
            <div className="vid-container rounded-lg overflow-hidden h-[223] min-w-[40%]">
              <Image className="w-full h-full object-cover" width={120} height={191} alt='timeless' src={'/t2.jpg'} />
            </div>
            <div className="vid-container rounded-lg overflow-hidden h-[191] min-w-[30%]">
              <Image className="w-full h-full object-cover" width={76} height={191} alt='timeless' src={'/t3.jpg'} />
            </div>
          </div>
        </div>
      </section>

      <section className="h-[48vh] w-full">
        <video className="w-full h-full object-cover" width="320" height="240" autoPlay={true} loop={true} muted={true}>
          <source src={'../drivingvid.mp4'} type="video/mp4" />
        </video>
      </section>
      <section className="mission py-16 mx-auto px-4 grid grid-cols-1 gap-[34px] justify-items-center">
        <div className="mission-card mission-card-shadow rounded-[17px] py-8 px-5 max-w-[300px] flex flex-col justify-center gap-y-6 text-center border-[5px] border-[#fafafa]">
          <div className={`title flex justify-center gap-x-3 items-center  ${raleway.className} font-medium text-base `}>
            <span className="icon w-[48px] block"><Image className="w-full h-full" width={100} height={100} alt="pics" src={'/missionsvg.svg'} /> </span>
            OUR STORY
          </div>
          <div className={`${raleway.className} font-light text-sm leading-relaxed `}>
            Our mission is to dispel every trace of self-doubt and diminished self-worth by adorning the modern millennial with accessories that are nothing short of exquisite. Through impeccable craftsmanship,
          </div>
        </div>
        <div className="mission-card mission-card-shadow rounded-[17px] py-8 px-5 max-w-[300px] flex flex-col justify-center gap-y-6 text-center border-[5px] border-[#fafafa]">
          <div className={`title flex justify-center gap-x-3 items-center  ${raleway.className} font-medium text-base `}>
            <span className="icon w-[48px] block"><Image className="w-full h-full" width={100} height={100} alt="pics" src={'/missionsvg.svg'} /> </span>
            OUR MISSION
          </div>
          <div className={`${raleway.className} font-light text-sm leading-relaxed `}>
            Our mission is to dispel every trace of self-doubt and diminished self-worth by adorning the modern millennial with accessories that are nothing short of exquisite. Through impeccable craftsmanship, luxurious packaging, and a standard of customer service that is both attentive and discreet, we curate an experience that speaks to sophistication, success, and unapologetic elegance.
          </div>
        </div>
        <div className="mission-card mission-card-shadow rounded-[17px] py-8 px-5 max-w-[300px] flex flex-col justify-center gap-y-6 text-center border-[5px] border-[#fafafa]">
          <div className={`title flex justify-center gap-x-3 items-center  ${raleway.className} font-medium text-base `}>
            <span className="icon w-[48px] block"><Image className="w-full h-full" width={100} height={100} alt="pics" src={'/missionsvg.svg'} /> </span>
            OUR VISION
          </div>
          <div className={`${raleway.className} font-light text-sm leading-relaxed `}>
            Our mission is to dispel every trace of self-doubt and diminished self-worth by adorning the modern millennial with accessories that are nothing short of exquisite. Through impeccable craftsmanship,
          </div>
        </div>
      </section>
      <section className="newsletter bg-[#fafafa] w-full py-12 flex flex-col gap-y-5 text-center justify-center mx-auto">
        <div className="img w-[100px] mx-auto">
          <Image className="w-full" width={110} height={58} alt="ring" src={'/ring.png'} />
        </div>
        <h2 className={` ${raleway.className} uppercase text-[28px] font-light`}>Newsletter</h2>
        <div className={`${raleway.className} font-light text-base`}>Insights, inspiration, and exclusives.</div>
        <div className="newsletter-form flex items-center justify-center w-[50%] mt-4 mx-auto">
          <input className="text-xs bg-[#E6E6E6] p-5" type="text" placeholder="www.proclassics.com" />
          <button className={`p-4 px-5 bg-[#000] text-sm text-white ${raleway.className} `}>Submit</button>
        </div>
      </section>
      <section className="come pt-12">
        <div className="anotherbanner px-4 w-full h-[48vh] relative">
          <div className="texts text-white absolute bottom-8 right-4 flex flex-col items-end text-end gap-2">
            <h3 className={` ${playfairDisplay.className} text-[rgba(255,255,255,0.75)] font-medium text-3xl`}>Come to Us</h3>
            <p className={`${raleway.className} text-[rgba(255,255,255,0.75)] font-medium text-sm`}>Authentic jewelry tester in Lagos</p>
          </div>
        </div>
      </section>
    </div>
  );
}

