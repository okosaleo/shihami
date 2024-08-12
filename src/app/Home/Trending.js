import view from "../images/view.png"
import Image from "next/image"
import { collections } from "../constants/constants"

export default function Trending() {
  return (
    <div className="flex flex-col lg:p-16 p-7 w-full">
        <div className="flex justify-between items-end">
            <div className="text-white flex flex-col gap-10">
                <p className=" text-base">Most Loved NFTs of All Time</p>
                <h1 className=" md:text-5xl text-3xl">Hot Trending NFTs</h1>
            </div>
            <div><button><Image src={view}  alt="View all NFts"/></button></div>
        </div>
        <div className=" flex flex-col gap-6 mt-6">
            <div className="flex lg:flex-row flex-col gap-6">
                {collections.map((props) => (
                <div key={props.id}>
                    <div className=" flex flex-col gap-6 bg-[#2d252ebb] p-3 rounded-md">
                        <Image src={props.image} alt="Nft Image"  />
                        <div className="flex flex-row gap-3 text-white items-center ml-2">
                            <Image src={props.profile}  alt="profileimage" className="rounded-full w-8 h-8 cursor-pointer"/>
                            <div className="flex flex-col">
                            <p className="text-xl font-medium tracking-wider">{props.username}</p>
                            <p className="text-[10px]">{props.artist}</p>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between text-white">
                            <div className="flex flex-row gap-2"><p className="text-[10px]">{props.onsale}</p> <Image src={props.emoji} alt="fire Emoji" className="h-4 w-4" /></div>
                            <div className=" flex flex-col justify-center items-center">
                                <div className="flex flex-row gap-2"><Image src={props.ethImage} alt="eth Image" className="h-4 w-4" /><p className="text-[15px]">{props.eth}</p></div>
                                <div className="text-[12px]">{props.usd}</div>
                            </div>
                        </div>
                        <div><button><Image src={props.btn} alt="bid now" /></button></div>
                    </div>
                </div>
            ))}</div>
            <div className="flex lg:flex-row flex-col gap-6">
            {collections.map((props) => (
                <div key={props.id}>
                    <div className=" flex flex-col gap-6 bg-[#2d252ebb] p-3 rounded-md">
                        <Image src={props.image} alt="Nft Image"  />
                        <div className="flex flex-row gap-3 text-white items-center ml-2">
                            <Image src={props.profile}  alt="profileimage" className="rounded-full w-8 h-8 cursor-pointer"/>
                            <div className="flex flex-col">
                            <p className="text-xl font-medium tracking-wider">{props.username}</p>
                            <p className="text-[10px]">{props.artist}</p>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between text-white">
                            <div className="flex flex-row gap-2"><p className="text-[10px]">{props.onsale}</p> <Image src={props.emoji} alt="fire Emoji" className="h-4 w-4" /></div>
                            <div className=" flex flex-col justify-center items-center">
                                <div className="flex flex-row gap-2"><Image src={props.ethImage} alt="eth Image" className="h-4 w-4" /><p className="text-[15px]">{props.eth}</p></div>
                                <div className="text-[12px]">{props.usd}</div>
                            </div>
                        </div>
                        <div><button><Image src={props.btn} alt="bid now" /></button></div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}
