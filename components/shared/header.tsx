"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Button } from "../ui";
import Link from "next/link";
import { useNameStore } from "@/store/name";
import { Routes } from "@/constants/routes";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const activeName = useNameStore((state) => state.name);

  return (
    <header className={cn("", className)}>
      <Container className="flex items-center justify-between min-h-[70px]">
        <div>
          <Link href={Routes.HOME}>
            <Button variant="outlined">Главная</Button>
          </Link>
          <Link href={Routes.PASSWORD}>
            <Button variant="outlined">Генератор паролей</Button>
          </Link>
          <Link href={Routes.CALCULATOR}>
            <Button variant="outlined">Калькулятор</Button>
          </Link>
        </div>

        <div className="flex items-center text-[#0D1421] font-bold gap-[7px]">
          {activeName}
          <div className="flex items-center justify-center w-10 h-10 bg-[#3B75A2] rounded-full">
            <span className="text-lg font-bold text-[#FFFFFF]">
              {activeName.charAt(0).toUpperCase()}
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};
