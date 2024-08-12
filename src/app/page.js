"use client";
import { useEffect, useState } from "react";
import Loader from "./Loader/Loader"
import Page from "./Home/page";
import Head from 'next/head'




export default function Home() {
  const [loading, setLoading] = useState(true)
    useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      }, 5200)
    }, [])
    if (loading) {
      return <Loader />
  }
  return (
  <main className="">
      <Head>
      <title>Shihami</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    <Page />
  </main>
  );
}
