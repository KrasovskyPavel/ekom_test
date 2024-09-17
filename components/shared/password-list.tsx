"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { usePasswordStore } from "@/store/passwords";
import { CircleX } from "lucide-react";

interface Props {
  className?: string;
}

export const PasswordList: React.FC<Props> = ({ className }) => {
  const { passwords, removePassword } = usePasswordStore();

  return (
    <ul className={cn("flex flex-col gap-1", className)}>
      {passwords.map(({ id, password }) => (
        <li
          key={id}
          className="flex items-center justify-between border border-[#00000021] min-w-[550px] min-h-8 px-5"
        >
          <span className="text-[16px]">{password}</span>
          <CircleX color="#3B75A2" cursor="pointer" onClick={() => removePassword(id)} />
        </li>
      ))}
    </ul>
  );
};
