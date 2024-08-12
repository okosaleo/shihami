import Image from "next/image"
import Head from "../images/headimg.png"
import Explore from "../images/Explore more.png"
import Milky from "../images/Milky Way.png"

export default function Hello() {
  return (
    <div className="h-max w-full flex-col relative ">
        <div className=" flex lg:flex-row flex-col-reverse items-center justify-center text-white w-full lg:p-16 p-7 h-[80vh]">
            <div className="lg:w-1/2 w-full flex flex-col gap-8"><h1 className=" font-medium lg:text-5xl text-2xl">EXPLORE CREATE AND SELL YOUR NFT&apos;S ON SHINAMI.</h1>
            <p>Shinami Is The World&apos;s First and Largest NFT/Avatar Marketplace.</p>
            <div className="flex gap-5">
              <button className="w-36"><Image src={Explore} alt="Explore More" /></button>
              <button className="border-[2px] border-[#ad1aaf] px-6 text-sm hover:bg-[#ad1aaf] hover:text-[#fff]">Create</button>
            </div>
            </div>
            <div className="lg:w-1/2 w-full lg:h-[60vh] h-[40vh] flex justify-center"><Image src={Head} alt="Opening Image" className=" lg:h-fit h-fit w-fit lg:w-full md:shrink shrink-0"  /></div>
        </div>
        <div className="w-full lg:h-1/4 h-[15vh] ">
          <Image src={Milky} alt="Milky way "/>
        </div>
    </div>
  )
}

