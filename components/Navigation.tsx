import { cn } from "@/utils/utils";
import React from "react";
import Image from "next/image";
import HeaderLinks from "./HeaderLinks";
import Link from "next/link";

const Navigation = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "mx-auto flex gap-5 h-[94px] w-full max-w-[1170px] items-center justify-between",
        className,
      )}
    >
      <Link href="/">
        <Image
          src={"/assets/me-logo.png"}
          width={285}
          height={40}
          alt="MedExpress Urgent Care Logo"
          className="min-w-[214.29px]"
        />
      </Link>
      <HeaderLinks />
    </div>
  );
};

export default Navigation;
