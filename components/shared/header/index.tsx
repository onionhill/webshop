import Image from "next/image";
import Link from "next/link";
import { SITE_NAME } from "@/constants";
import Menu from "./menu";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image src="/images/logo.svg" alt={SITE_NAME} width={32} height={32} priority={true} />
            <span className="hidden lg:block font-bold text-2xl ml-3">{SITE_NAME}</span>
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
