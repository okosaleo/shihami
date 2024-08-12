import Image from "next/image"
import NFT from "./images/NFT cluster.png"

export default function Collections() {
  return (
    <div className=" flex flex-col justify-center items-center p-16 w-full">
        <div className="text-white flex flex-col gap-6 mb-16">
            <p>Explore our newly relesed NFT collection</p>
            <h2 className=" flex justify-center items-center text-4xl font-medium">Our Collection</h2>
        </div>
        <div className="w-[74%]">
            <Image src={NFT} alt="" />
        </div>
    </div>
  )
}
