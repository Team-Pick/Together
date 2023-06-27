import { CommonComponentProps } from "../component.type";

export type ButtonSizeType = "large" | "small";
export type ButtonColorType = "Solid-Brand" | "Line-Brand" | "Solid-Grey" | "Line-Grey";

export interface ButtonProps extends CommonComponentProps {
  size: ButtonSizeType;
  color: ButtonColorType;
  disable?: boolean;
  height?: number;
}
