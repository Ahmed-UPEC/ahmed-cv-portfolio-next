import Link from "next/link";

import pic from "../assets/photo.jpg";

export default function Sidebar() {
  return (
    <div className="w-11/12 mx-auto lg:w-full col-span-12 xl:col-span-3 flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <img
          src={pic.src}
          alt="ahmed's picture profil"
          className="max-w-[125px] xl:max-w-[100%] xl:mx-auto rounded-lg"
        />
        <p className="text-sm text-neutral-500/80">
          I&apos;m Ahmed — a software engineer and photographer from France.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="uppercase text-xs tracking-[0.15rem] font-semibold text-neutral-400">
          categories
        </p>
        <ul className="flex flex-col text-neutral-800 text-sm gap-1">
          <Link href="/projects">Projects</Link>
          <Link href="/certifications">Certifications</Link>
          <Link href="/solar">Solar</Link>
          {/* <Link href="/gallery">Gallery</Link> */}
        </ul>
      </div>
    </div>
  );
}
