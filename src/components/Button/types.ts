import { PropsWithChildren } from "react";
import type { CSSObject } from "styled-components";

export type ButtonSizeType = "large" | "small";
export type ButtonColorType = "Solid-Brand" | "Line-Brand" | "Solid-Grey" | "Line-Grey";

export interface ButtonProps extends PropsWithChildren {
  size: ButtonSizeType;
  color: ButtonColorType;
  disable?: boolean;
  height?: number;
  style?: CSSObject;
}
