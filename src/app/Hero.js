import Image from "next/image"
import Head from "./images/headimg.png"
import Explore from "./images/Explore More.png"
import Milky from "./images/Milky Way.png"

export default function Hero() {
  return (
    <div className="h-screen w-full flex-col relative">
        <div className=" flex flex-row items-center text-white w-full p-16 h-3/4">
            <div className="w-1/2 flex flex-col gap-8"><h1 className=" font-medium text-5xl">EXPLORE CREATE AND SELL YOUR NFT&apos;S ON SHINAMI.</h1>
            <p>Shinami Is The World&apos;s First and Largest NFT/Avatar Marketplace.</p>
            <div className="flex gap-5">
              <button className="w-36"><Image src={Explore} alt="Explore More" /></button>
              <button className="border-[2px] border-[#ad1aaf] px-6 text-sm hover:bg-[#ad1aaf] hover:text-[#fff]">Create</button>
            </div>
            </div>
            <div className="w-1/2 h-[60vh]"><Image src={Head} alt="Opening Image"  /></div>
        </div>
        <div className="w-full h-1/4">
          <Image src={Milky} alt="Milky way "/>
        </div>
    </div>
  )
}

