import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/assets";

const MainLogo = () => {
  return (
    <div>
      <Link href="/" className="flex items-center gap-2">
        <Image
          src={Logo}
          className="w-full max-w-32 2xl:max-w-40"
          alt="hexa-rgb"
        />
        {/* <span className="text-lg md:text-xl text-heading font-medium cursor-pointer">
          DevCollab
        </span> */}
      </Link>
    </div>
  )
}

export default MainLogo