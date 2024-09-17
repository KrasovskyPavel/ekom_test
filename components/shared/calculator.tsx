import React from "react";
import { CalculatorWrapper } from "./Calculator/calculator-wrapper";

interface Props {
  className?: string;
}

export const Calculator: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <CalculatorWrapper />
    </div>
  );
};
