import suscribe from "../images/subscribe btn.png"
import Image from "next/image"
export default function NFT() {
  return (
    <div className="flex flex-col w-full lg:mt-20 mt-0 gap-24 h-[50vh] justify-center items-center">
        <div className="text-white flex items-center justify-center">
            <h2 className=" md:text-5xl text-2xl font-extrabold">Ready For Next NFT Drop?</h2>
        </div>
        <div>
            <form className="flex flex-row items-center gap-1">
            <input placeholder="info@gmail.com" className=" border border-[#ad1aaf] bg-[#1e1629] lg:w-[30vw] w-[50vw] h-14 rounded-md p-3 text-white font-mono"></input> 
            <button className=" w-16 h-16"><Image src={suscribe} alt="Subscribe for newsletter" /></button>
            </form>
        </div>
    </div>
  )
}
