import { Sono } from "next/font/google";
import Image from "next/image"
import Link from "next/link";

const sono = Sono();

export default function AppLogo() {
  return (
    <Link href={"/"}>
      <div className="flex items-center w-fit rounded-2xl py-1 px-2 border border-gray-500 bg-white text-black">
        <Image src={"/task_logo.svg"} alt="task logo" width={30} height={30} className="dark:invert" unoptimized />
        <p className={`${sono.className} font-mono font-semibold w-fit text-2xl`}>{process.env.APP_NAME}</p>
      </div>
    </Link>
  );
}
