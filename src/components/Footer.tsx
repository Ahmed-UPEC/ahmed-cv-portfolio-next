import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <div className="">
      <hr className="border-neutral-200 my-8" />
      <div className="max-w-[95%] md:max-w-[1160px] mx-auto flex gap-2 items-center text-neutral-500 text-xs font-normal mb-6">
        <Icon icon="mdi:copyright" />
        <p>2024 Ahmed. All rights reserved.</p>
      </div>
    </div>
  );
}
