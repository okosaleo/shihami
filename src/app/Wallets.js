import Image from "next/image"
import { wallets, works } from "./constants/constants"

export default function Wallets() {
  return (
    <div className="w-full flex flex-col h-[169vh] relative mt-36 justify-center items-center gap-32 p-16">
      <div className="w-full flex flex-col h-[95vh] relative  mt-10 justify-center items-center gap-10">
         <div className="text-white"><p>Trade With The World&apos;s Most Trusted and Fastest Wallets</p></div>
         <div className="text-white"><h2 className="text-4xl">Wallets We Support</h2></div>
         <div className=" flex gap-3">{wallets.map((props) => ( 
            <Image src={props.image} alt="wallets supported" key={props.id} className=" w-[30vw] h-[45vh] hover:scale-105 cursor-pointer" />
         ))}</div>
        </div>
        <div className=" flex flex-col items-center justify-center text-white gap-24 w-full">
          <div ><h2 className="text-3xl">How it Works</h2></div>
          <div className="flex items-center w-[74%]"> 
            {works.map((props) => (
            <div className="flex items-center gap-3" key={props.id}>
              <div className="flex flex-col gap-2 w-[250px]">
              <Image src={props.image} alt="process to connect wallet" />
              <p className="text-[10px]">{props.text}</p>
              </div>
              <Image src={props.vector} alt="" className=" h-2 pr-2" />
              </div>
            )) 
            } 
          </div>
        </div>
    </div>
  )
}
