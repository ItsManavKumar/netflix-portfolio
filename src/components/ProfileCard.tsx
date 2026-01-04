"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  label: string;
  imageSrc: string;
  objectPosition?: string;
  href: string;
};

export default function ProfileCard({
  label,
  imageSrc,
  objectPosition = "object-center",
  href,
}: Props) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(href)}
      className="group w-full flex flex-col items-center gap-2 sm:gap-3 focus:outline-none active:scale-[0.98]"
    >
      <div
        className="
          relative overflow-hidden rounded-xl border border-transparent bg-neutral-800
          transition duration-200 ease-out
          group-hover:scale-105 group-hover:border-white
          h-24 w-24
          sm:h-28 sm:w-28
          md:h-32 md:w-32
          lg:h-40 lg:w-40
        "
      >
        <Image
          src={imageSrc}
          alt={label}
          fill
          sizes="(max-width: 768px) 96px, (max-width: 1024px) 128px, 160px"
          className={`object-cover ${objectPosition}`}
          priority
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition" />
      </div>

      <span className="text-sm sm:text-base md:text-lg font-medium text-neutral-400 group-hover:text-white">
        {label}
      </span>
    </button>
  );
}
