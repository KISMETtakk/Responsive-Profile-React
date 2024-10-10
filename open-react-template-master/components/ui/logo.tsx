import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0 ml-10" aria-label="Cruip">
      <Image src={logo} alt="Cruip Logo" width={50} height={50} />
    </Link>
  );
}
