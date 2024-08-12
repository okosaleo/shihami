import Image from "next/image"
import NFT from "../images/NFT cluster.png"

export default function Collections() {
  return (
    <div className=" flex flex-col justify-center items-center md:mt-0 mt-20 lg:p-16 p-7 w-full lg:h-screen h-[50vh]">
        <div className="text-white flex flex-col gap-6 mb-16">
            <p>Explore our newly relesed NFT collection</p>
            <h2 className=" flex justify-center items-center text-4xl font-medium">Our Collection</h2>
        </div>
        <div className="md:w-[74%] w-full">
            <Image src={NFT} alt="" />
        </div>
    </div>
  )
}
