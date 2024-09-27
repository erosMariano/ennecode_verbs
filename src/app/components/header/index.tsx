"use client";
import { useRouter } from "next/navigation";
import React from "react";

import IconVoltar from "@/app/images/voltar.svg";
import IconHamburger from "@/app/images/hamburger.svg";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const router = useRouter();
  return (
    <header className="flex justify-between px-4 pt-12">
      <button onClick={() => router.back()}><Image src={IconVoltar}  alt="Voltar" title="Voltar"/></button>
      <Link href="/list"><Image src={IconHamburger}  alt="Abir menu" title="Abir menu"/></Link>
    </header>
  );
}

export default Header;
