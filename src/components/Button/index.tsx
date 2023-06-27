import React from "react";
import type { ButtonProps } from "./types";
import { ButtonStyle } from "./style";

const Button = ({ color, size, disable = false, height = 72, style, children }: ButtonProps) => {
  return (
    <ButtonStyle color={color} size={size} disable={disable} height={height} style={style}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
