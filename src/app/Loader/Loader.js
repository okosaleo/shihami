"use-client";
import Lottie from "lottie-react"
import Loading from "../Lottie/Loadert.json"
import Head from 'next/head';


export default function Loader() {
  return (
    <div className=" w-full h-[91vh] items-center justify-center flex bg-[#1e1629] overflow-hidden" >
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Lottie animationData={Loading} className="w-screen h-screen lg:w-[50vw] lg:h-[50vh] top-0 lg:shrink-0" />
    </div>
  )
}