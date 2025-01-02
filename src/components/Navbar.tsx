"use client"

import Link from "next/link";

export default function Navbar() {
  return (
    <div>
        <div className="max-w-[95%] xl:max-w-[1160px] mx-auto">
      <div className="flex justify-between xl:grid xl:grid-cols-12 xl: gap-16 w-full pt-8 pb-6 px-0 ">
        <h1 className="font-semibold text-2xl uppercase font-mono tracking-widest col-span-9">
          <Link href="/">Ahmed</Link>
        </h1>
        <ul className="flex gap-4 col-span-3 justify-end">
          <li className="text-base text-neutral-500 underline underline-offset-4 decoration-transparent hover:decoration-black hover:text-black transition-all duration-500 hover:cursor-pointer">
            <a href="https://www.linkedin.com/in/ahmedsyed75" target="_blank">LinkedIn</a>
          </li>
          <li className="text-base text-neutral-500 underline underline-offset-4 decoration-transparent hover:decoration-black hover:text-black transition-all duration-500 hover:cursor-pointer">
            <a href="https://www.instagram.com/asx.visuals/" target="_blank">Instagram</a>
          </li>
          <li className="text-base text-neutral-500 underline underline-offset-4 decoration-transparent hover:decoration-black hover:text-black transition-all duration-500 hover:cursor-pointer">
            <a href="https://github.com/Ahmed-UPEC" target="_blank">Github</a>
          </li>
        </ul>
      </div>
    </div>
    <hr />
    </div>
  );
}
