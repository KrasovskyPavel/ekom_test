export const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
export const OPERATORS = ["+", "-", "/", "*"];
export const SPECIAL = ["DEL", "AC", "FLIP_SIGN", "=", "%", "."];

export type History = {
    firstNumber: string;
    secondNumber: string;
    operator: string;
    answer: string;
  };
  
  export type ButtonLocation = { rowIdx: number; columnIdx: number };
  