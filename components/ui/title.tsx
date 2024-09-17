import clsx from "clsx";
import React from "react";

type TitleSize = "sm" | "md" | "lg" | "xl";

interface Props {
  size?: TitleSize;
  className?: string;
  text: string;
}

export const Title: React.FC<Props> = ({ text, size = "sm", className }) => {
  const mapTagBySize = {
    sm: "h4",
    md: "h3",
    lg: "h2",
    xl: "h1",
  } as const;

  const mapClassNameBySize = {
    sm: "text-[12px]",
    md: "text-[15.38px]",
    lg: "text-[20px]",
    xl: "text-[40px]",
  } as const;

  return React.createElement(
    mapTagBySize[size],
    { className: clsx(mapClassNameBySize[size], className) },
    text
  );
};
