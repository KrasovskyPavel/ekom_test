import React from "react";
import { Checkbox } from "../ui";

interface ParamsCheckboxProps {
  text: string;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
  name?: string;
}

export const ParamsCheckbox: React.FC<ParamsCheckboxProps> = ({
  text,
  checked,
  onCheckedChange,
  name,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        className="rounded-[8px] w-6 h-6"
        id={`checkbox-${String(name)}`}
      />
      <label htmlFor={`checkbox-${String(name)}`} className="leading-none cursor-pointer flex-1">
        {text}
      </label>
    </div>
  );
};
