"use client";

import React, { useState } from "react";
import { ParamsCheckbox } from "./params-checkbox";
import { cn } from "@/lib/utils";
import { Button, Input } from "../ui";
import { generatePassword } from "@/utils/passwordGenerator";
import { usePasswordStore } from "@/store/passwords";

interface Props {
  className?: string;
}

export const PasswordParamsGroup: React.FC<Props> = ({ className }) => {
  const [length, setLength] = useState<number>(8);
  const [uppercase, setUppercase] = useState<boolean>(true);
  const [lowercase, setLowercase] = useState<boolean>(true);
  const [numbers, setNumbers] = useState<boolean>(true);
  const [symbols, setSymbols] = useState<boolean>(true);
  const [avoidRepetition, setAvoidRepetition] = useState<boolean>(true);

  const { addPassword } = usePasswordStore();

  const handleGeneratePassword = () => {
    const password = generatePassword(length, {
      uppercase,
      lowercase,
      numbers,
      symbols,
      avoidRepetition,
    });

    if (password.length) {
      addPassword(password);
    }
  };

  const lengthHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= 16) {
      setLength(16);
    } else if (value === 0) {
      setLength(4);
    } else {
      setLength(value);
    }
  };

  return (
    <div className={cn("flex flex-col gap-[7px]", className)}>
      <Input min={1} max={16} type="number" value={length} onChange={lengthHandler} />
      <ParamsCheckbox
        checked={uppercase}
        text="Использовать прописные буквы"
        onCheckedChange={() => setUppercase(!uppercase)}
        name={"uppercase"}
      />
      <ParamsCheckbox
        checked={lowercase}
        text="Использовать строчные буквы"
        onCheckedChange={() => setLowercase(!lowercase)}
        name={"lowercase"}
      />
      <ParamsCheckbox
        checked={numbers}
        text="Использовать цифры"
        onCheckedChange={() => setNumbers(!numbers)}
        name={"numbers"}
      />
      <ParamsCheckbox
        checked={symbols}
        text="Использовать символы: %, *, ), ?, @, #, $, ~"
        onCheckedChange={() => setSymbols(!symbols)}
        name={"symbols"}
      />
      <ParamsCheckbox
        checked={avoidRepetition}
        text="Избегать повторения символов"
        onCheckedChange={() => setAvoidRepetition(!avoidRepetition)}
        name={"avoidRepetition"}
      />
      <Button className="mt-4" variant="default" onClick={handleGeneratePassword}>
        Сгенерировать пароль
      </Button>
    </div>
  );
};
