import Image from "next/image";
import Logo from "../images/Logo.png";
import google from "../images/google.png";
import youtube from "../images/youtube.png";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";

export default function Footer() {
  return (
    <div className=" flex md:flex-row flex-col w-full text-gray-400 lg:p-16 p-7 gap-28 h-max lg:mt-36 md:mt-2">
      <div className="md:w-1/4 w-full"><Image src={Logo} alt="" className="cursor-pointer"  /></div>
      <div className="md:w-1/3 w-full gap-7 flex flex-col">
      <div><p className="text-gray-400">Shihami is the world&apos;s leeading NFT marketplace where youcan discover, sell and bid NFTs and get rich. </p></div>
      <div className="flex flex-row md:gap-7 gap-10"> 
        <Image src={youtube} alt="Visit our Youtube"  className="cursor-pointer" />
        <Image src={twitter} alt="Visit our twitter page" className="cursor-pointer"  />
        <Image src={facebook} alt="Visit out facebook page" className="cursor-pointer"  />
        <Image src={google} alt="Email us" className="cursor-pointer"  />
      </div>
      <div><p>All rights reserved @Faizansayani</p></div>
      </div>
      <div className="md:w-1/4 w-full flex flex-col gap-4">
        <div className="font-bold md:text-lg text-6xl text-white"><h4>About</h4></div>
        <div className="flex flex-col gap-5 md:text-sm text-3xl">
          <p className="cursor-pointer" >About NFT</p>
          <p className="cursor-pointer" >Live Options</p>
          <p className="cursor-pointer" >NFT Blog</p>
          <p className="cursor-pointer" >Activity</p>
        </div>
      </div>
      <div className="md:w-1/4 w-full flex flex-col gap-4">
      <div className="font-bold md:text-lg text-6xl text-white"><h4>Support</h4></div>
        <div className="flex flex-col gap-5 md:text-sm text-3xl">
          <p className="cursor-pointer" >About NFT</p>
          <p className="cursor-pointer" >Live Options</p>
          <p className="cursor-pointer" >NFT Blog</p>
          <p className="cursor-pointer" >Activity</p>
        </div>
      </div>
    </div>
  )
}
