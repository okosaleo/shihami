import Image from "next/image"
import { wallets, works } from "../constants/constants"

export default function Wallets() {
  return (
    <div className="w-full flex flex-col lg:h-[169vh] h-[70vh] relative lg:mt-36  justify-center items-center lg:gap-32 gap-4 lg:p-16 p-6">
      <div className="w-full flex flex-col h-[95vh] relative  mt-10 justify-center items-center gap-10">
         <div className="text-white"><p>Trade With The World&apos;s Most Trusted and Fastest Wallets</p></div>
         <div className="text-white"><h2 className="text-4xl">Wallets We Support</h2></div>
         <div className=" flex gap-3 w-full">{wallets.map((props) => ( 
            <Image src={props.image} alt="wallets supported" key={props.id} className=" lg:w-[30vw] h-[45vh] hover:scale-105 cursor-pointer max-md:h-[74px] w-[18%] md:shrink max-lg:h-36 shrink-0" />
         ))}</div>
        </div>
        <div className=" flex flex-col items-center justify-center text-white lg:gap-24 gap-10 w-full">
          <div ><h2 className="text-3xl">How it Works</h2></div>
          <div className="flex items-center lg:w-[60%] w-full"> 
            {works.map((props) => (
            <div className="flex flex-row items-center justify-evenly" key={props.id}>
              <div className="flex flex-col gap-2 md:w-[200px] w-[50px] md:shrink shrink-0">
              <Image src={props.image} alt="process to connect wallet" />
              <p className="md:text-[10px] text-[7px]">{props.text}</p>
              </div>
              <Image src={props.vector} alt="" className=" md:h-2 h-[1px] lg:w-20 pr-1" />
              </div>
            )) 
            } 
          </div>
        </div>
    </div>
  )
}
