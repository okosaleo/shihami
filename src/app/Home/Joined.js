import view from "../images/view.png"
import Image from "next/image"
import { joined } from "../constants/constants"

export default function Joined() {
  return (
    <div className="flex flex-col lg:p-16 p-7 w-full pb-24">
        <div className="flex justify-between items-end">
            <div className="text-white flex flex-col gap-10">
                <p className=" text-base">Most Loved NFTs of All Time</p>
                <h1 className=" md:text-5xl text-3xl">Hot Trending NFTs</h1>
            </div>
            <div><button><Image src={view}  alt="View all NFts"/></button></div>
        </div>
        <div className=" flex flex-col gap-6 mt-6">
            <div className="flex lg:flex-row flex-col gap-6">
                {joined.map((props) => (
                    <div className=" flex flex-col bg-[#2d252ebb] p-4 relative rounded-md" key={props.id}>
                        <div className=" flex flex-col items-start justify-end ">
                            <div className="flex flex-row gap-2">
                            <Image src={props.backmain}  alt="user image" className="h-40 w-40"/>
                            <Image src={props.backimg}  alt="user image" className="h-36 w-24"/>
                            </div>
                        </div> 
                        <div className="z-10 pl-6 mt-[-37px]"><Image src={props.image} alt="profile image" /></div> 
                        <div className=" flex flex-row relative items-center justify-between text-white">
                            <div className=" mt-5 flex flex-col gap-2">
                                <div className="flex flex-row gap-1 items-center">
                                <p className=" text-base font-semibold">{props.profilecheck}</p>
                                <Image src={props.check} alt="verified check" className=" h-5 w-5" />
                                </div>
                                <p className="text-[12px]">{props.name}</p>
                            </div>
                            <div><button className="rounded-3xl border-[#ad1aaf] border w-24 p-2">{props.follow}</button></div>
                        </div>
                    </div>
                ))}
                </div>
            <div className="flex lg:flex-row flex-col gap-6">
            {joined.map((props) => (
                    <div className=" flex flex-col bg-[#2d252ebb] p-4 relative rounded-md" key={props.id}>
                        <div className=" flex flex-col items-start justify-end ">
                            <div className="flex flex-row gap-2">
                            <Image src={props.backmain}  alt="user image" className="h-40 w-40"/>
                            <Image src={props.backimg}  alt="user image" className="h-36 w-24"/>
                            </div>
                        </div> 
                        <div className="z-10 pl-6 mt-[-37px]"><Image src={props.image} alt="profile image" /></div> 
                        <div className=" flex flex-row relative items-center justify-between text-white">
                            <div className=" mt-5 flex flex-col gap-2">
                                <div className="flex flex-row gap-2 items-center">
                                <p className=" text-base font-semibold">{props.profilecheck}</p>
                                <Image src={props.check} alt="verified check" className=" h-5 w-5" />
                                </div>
                                <p className="text-[12px]">{props.name}</p>
                            </div>
                            <div><button className="rounded-3xl border-[#ad1aaf] border w-24 p-2">{props.follow}</button></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
