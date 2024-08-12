import { Roboto_Mono } from "next/font/google";
import logo from "./images/Logo.png"
import userProfile from "./images/User Profile.png"
import Link from "next/link";
import Image from "next/image";
const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto_mono.className} bg-[#1e1629]`}>
        <div>
          <div className="flex justify-between  px-10">
            <div>
              <Image src={logo} alt="logo" />
            </div>
          
          <div>
            <div className=" text-white [background-image:linear-gradient(to_bottom,_#2a2532,_#272130,_#241d2e,_#211a2b,_#1e1629)] rounded-lg h-14 w-[40vw] flex justify-between items-center mt-4 p-5 font-medium">
              <Link href="/" className=" hover:text-[#ad1aaf]">EXPLORE</Link>
              <Link href="/" className=" hover:text-[#ad1aaf]">TRADING NFTs</Link>
              <Link href="/" className=" hover:text-[#ad1aaf]">AUCTIONED NFTs</Link>
              <Link href="/" className=" hover:text-[#ad1aaf]">INFLUENCERS</Link>
            </div>
          </div>
          <div className=" pr-6 text-white flex flex-row justify-between items-center gap-7 ">
            <button className=" border-[#ad1aaf] border-[2px] p-2 rounded-sm hover:bg-[#ad1aaf]">CONNECT WALLET</button>
            <Image src={userProfile} alt="profile picture" className="rounded-full w-8 h-8 bg-white" />
          </div>
          </div>
        </div>
        {children}</body>
    </html>
  );
}
