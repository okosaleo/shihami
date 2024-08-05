import Link from "next/link"

export default function Footer() {
  return (
    <div className="fixed left-0 w-screen flex p-11 justify-between z-[2] bottom-0">
      <Link href="/" className=" uppercase text-lg font-semibold text-[#000]">Talk to our Agent</Link>
      <Link href="/" className=" uppercase text-lg font-semibold text-[#000]">Book a Session</Link>
    </div>
  )
}
