import { Roboto_Mono } from "next/font/google";
import Head from 'next/head'
const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "block",
});
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto_mono.className} bg-[#1e1629] overflow-x-hidden`}>
      <Head>
      <title>Shihami</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
       
        {children}</body>
    </html>
  );
}
