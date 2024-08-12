"use-client";
import { useState } from "react";
import { FiAlignJustify, FiX } from "react-icons/fi"
import logo from "../images/Logo.png"
import userProfile from "../images/User Profile.png"
import Link from "next/link";
import Image from "next/image";




export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }
  return (
          <div className="flex justify-between items-center w-full p-1 relative">
            <div className="">
              <Image src={logo} alt="logo" className="h-10 w-32" />
            </div>
          
          <div className=" ">
            <div className="lg:flex hidden px-5 text-white  [background-image:linear-gradient(to_bottom,_#2a2532,_#272130,_#241d2e,_#211a2b,_#1e1629)] bg-[#2a2532] rounded-lg h-14 w-[40vw] justify-between items-center mt-4 p-5 gap-3  font-medium">
              <Link href="/" className=" hover:text-[#ad1aaf]">EXPLORE</Link>
              <Link href="/" className=" hover:text-[#ad1aaf]">TRADING NFTs</Link>
              <Link href="/" className=" hover:text-[#ad1aaf]">AUCTIONED NFTs</Link>
              <Link href="/" className=" hover:text-[#ad1aaf]">INFLUENCERS</Link>
            </div>
          </div>
          <div className=" pr-6 text-white flex flex-row justify-between items-center gap-4 ">
            <button className=" border-[#ad1aaf] border-[2px] md:p-2 p-1 md:text-base text-[10px] rounded-sm hover:bg-[#ad1aaf]">CONNECT WALLET</button>
            <Image src={userProfile} alt="profile picture" className="rounded-full w-8 h-8 cursor-pointer" />
            <button onClick={toggleNavbar} className="lg:hidden z-20 top-4">{isOpen ? <FiX className="text-3xl" />  : <FiAlignJustify className="text-3xl " /> }
              </button>
          </div>{isOpen && (
            <div className=" z-10 flex flex-col h-[60vh] top-0 absolute w-full px-2 text-white [background-image:linear-gradient(to_bottom,_#2a2532,_#272130,_#241d2e,_#211a2b,_#1e1629)] bg-[#2a2532] rounded-lg justify-evenly items-center font-medium">
            <Link href="/" className=" hover:text-[#ad1aaf]">EXPLORE</Link>
            <Link href="/" className=" hover:text-[#ad1aaf]">TRADING NFTs</Link>
            <Link href="/" className=" hover:text-[#ad1aaf]">AUCTIONED NFTs</Link>
            <Link href="/" className=" hover:text-[#ad1aaf]">INFLUENCERS</Link>
          </div>
          )}
          </div>
  );
}
