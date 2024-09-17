"use client";

import { useIsHighlighted } from "../../../hooks/useIsHighlighted";
import { FC, FocusEvent, FocusEventHandler, RefObject, useEffect, useRef } from "react";

interface Props {
  value: string;
  colored?: boolean;
  bgColored?: boolean;
  pressedKeys: string[];
  location: { rowIdx: number; columnIdx: number };
  onClick: (value: string) => void;
  onFocus: (
    e: FocusEvent<HTMLButtonElement, Element>,
    location: { rowIdx: number; columnIdx: number }
  ) => void;
  init: (rowIdx: number, columnIdx: number, ref: RefObject<HTMLButtonElement>) => void;
}

export const formatValue = (value: string) => {
  switch (value) {
    case "-":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="h-5 w-5"
          viewBox="0 0 448 512"
        >
          <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
        </svg>
      );
    case "*":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="h-5 w-5"
          viewBox="0 0 320 512"
        >
          <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
        </svg>
      );
    case "/":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="h-5 w-5"
          viewBox="0 0 448 512"
        >
          <path d="M272 96c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 320c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM400 288c17.7 0 32-14.3 32-32s-14.3-32-32-32H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H400z" />
        </svg>
      );
    case "%":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="h-5 w-5"
          viewBox="0 0 384 512"
        >
          <path d="M374.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-320 320c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l320-320zM128 128c0-35.3-28.7-64-64-64S0 92.7 0 128s28.7 64 64 64s64-28.7 64-64zM384 384c0-35.3-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64z" />
        </svg>
      );
    case "=":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="h-5 w-5"
          viewBox="0 0 448 512"
        >
          <path d="M48 128c-17.7 0-32 14.3-32 32s14.3 32 32 32H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H48zm0 192c-17.7 0-32 14.3-32 32s14.3 32 32 32H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H48z" />
        </svg>
      );
    case "+":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="h-5 w-5"
          viewBox="0 0 448 512"
        >
          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
        </svg>
      );
    case "FLIP_SIGN":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="h-5 w-5"
          viewBox="0 0 384 512"
        >
          <path d="M224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V144H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H160V320c0 17.7 14.3 32 32 32s32-14.3 32-32V208H336c17.7 0 32-14.3 32-32s-14.3-32-32-32H224V32zM0 480c0 17.7 14.3 32 32 32H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32z" />
        </svg>
      );
    case "DEL":
      return (
        <svg
          width="27"
          height="18"
          viewBox="1 0 27 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clip-rule="evenodd"
            d="M9.58582 1.52588e-05H10H26H27V1.00002V17V18H26H10H9.58582L9.29292 17.7071L1.29292 9.70712L0.585815 9.00002L1.29292 8.29291L9.29292 0.292908L9.58582 1.52588e-05ZM10.4142 2.00002L3.41424 9.00002L10.4142 16H25V2.00002H10.4142ZM14 4.58579L14.7071 5.2929L17 7.5858L19.2929 5.29291L20 4.5858L21.4142 6.00002L20.7071 6.70712L18.4142 9.00001L20.7071 11.2929L21.4142 12L20 13.4142L19.2929 12.7071L17 10.4142L14.7071 12.7071L14 13.4142L12.5858 12L13.2929 11.2929L15.5858 9.00001L13.2929 6.70711L12.5858 6.00001L14 4.58579Z"
            fill="black"
          />
        </svg>
      );
    default:
      return value;
  }
};

export const CalculatorButton: FC<Props> = ({
  value,
  onClick,
  pressedKeys,
  colored = false,
  bgColored = false,
  onFocus,
  location: { columnIdx, rowIdx },
  init,
}) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    onClick(value);
  };
  const { isHighlighted } = useIsHighlighted({ value, pressedKeys });
  const ref = useRef<HTMLButtonElement>(null);

  const getColors = () => {
    if (isHighlighted) {
      return "bg-[#000] text-white duration-none";
    } else if (bgColored) {
      return "text-[#FFF] bg-[#3B75A2] hover:opacity-80 duration-75";
    } else if (colored) {
      return "text-[#000] bg-[#D2D3DA] hover:opacity-80 duration-75";
    } else {
      return "text-[#000] bg-[#FFF] hover:opacity-80 duration-75";
    }
  };

  const handleFocus: FocusEventHandler<HTMLButtonElement> = (e) => {
    onFocus(e, { rowIdx, columnIdx });
  };

  useEffect(() => {
    if (ref.current == null) return;
    init(rowIdx, columnIdx, ref);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return (
    <button
      ref={ref}
      onFocus={handleFocus}
      onClick={handleClick}
      className={`flex items-center justify-center rounded-[24px] p-3 text-3xl  leading-none transition-color ${getColors()}`}
    >
      {formatValue(value)}
    </button>
  );
};

CalculatorButton.displayName = "CalculatorButton";
