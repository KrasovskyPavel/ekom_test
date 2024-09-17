"use client";

import { Container } from "@/components/shared";
import { Button, Input, Title } from "@/components/ui";
import { Routes } from "@/constants/routes";
import { useNameStore } from "@/store/name";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const setActiveName = useNameStore((state) => state.setName);
  const router = useRouter();

  const openCalculator = () => {
    setActiveName(name);
    localStorage.setItem("name", name);
    router.push(Routes.CALCULATOR);
  };

  const openPasswordGenerator = () => {
    setActiveName(name);
    localStorage.setItem("name", name);
    router.push(Routes.PASSWORD);
  };

  return (
    <Container className="flex justify-center items-center h-screen">
      <div className="relative flex flex-col min-w-[750px] h-[254px] border border-[#DEE2E6] shadow-lg rounded-lg py-9 px-10">
        <Title className="font-medium text-[#54595E] mb-4" size="lg" text="Начать" />
        <Title className="font-medium text-[#4F4F4F] mb-2" text="Напишите ваше имя" />
        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ваше имя" />

        <div className="flex absolute bottom-9 right-10 gap-4">
          <Button onClick={openCalculator}>Открыть калькулятор</Button>
          <Button onClick={openPasswordGenerator}>Открыть генератор</Button>
        </div>
      </div>
    </Container>
  );
}
