import { match } from "ts-pattern";
import type { ButtonColorType, ButtonProps, ButtonSizeType } from "./types";
import styled, { FlattenSimpleInterpolation, css } from "styled-components";

const sizeStyle: Record<ButtonSizeType, number> = {
  small: 66,
  large: 160,
};
const disableColorStyle: Record<ButtonColorType, FlattenSimpleInterpolation> = {
  "Solid-Brand": css`
    background: #d5e2ec;
    color: #8da6b8;
  `,
  "Line-Grey": css`
    background: #e6e6e6;
    border: 1px solid #e6e6e6;
    color: #a0a0a0;
  `,
  "Line-Brand": css`
    background: #ffffff;
    color: #8da6b8;
    border: 1px solid #8da6b8;
  `,
  "Solid-Grey": css`
    background: #e6e6e6;
    color: #a0a0a0;
  `
}
const colorStyle: Record<ButtonColorType, FlattenSimpleInterpolation> = {
  "Solid-Brand": css`
    background: #0068ff;
    color: #fff;

    &:hover {
      background: #2649ff;
    }
  `,
  "Line-Grey": css`
    background: #ffffff;
    border: 1px solid #1c1c1e;
    color: #1c1c1e;

    &:hover {
      background: #f8fafc;
      border: 1px solid #454545;
      color: #454545;
    }
  `,
  "Line-Brand": css`
    background: #fff;
    border: 1px solid #0068ff;
    color: #0068ff;

    &:hover {
      border: 1px solid #2649ff;
      background: #f3feff;
    }
  `,
  "Solid-Grey": css`
    background: #1c1c1e;
    color: #fff;

    &:hover {
      background: #454545;
    }
  `,
};

const sizePattern = (size: ButtonSizeType) =>
  match<ButtonSizeType, number>(size)
    .with("small", (size) => sizeStyle[size])
    .with("large", (size) => sizeStyle[size])
    .otherwise(() => sizeStyle.small);

const colorPattern = (color: ButtonColorType) =>
  match<ButtonColorType, FlattenSimpleInterpolation>(color)
    .with("Line-Brand", (color) => colorStyle[color])
    .with("Line-Grey", (color) => colorStyle[color])
    .with("Solid-Brand", (color) => colorStyle[color])
    .with("Solid-Grey", (color) => colorStyle[color])
    .otherwise(() => colorStyle["Solid-Brand"]);

const disableColorPattern = (color: ButtonColorType) =>
  match<ButtonColorType, FlattenSimpleInterpolation>(color)
    .with("Line-Brand", (color) => disableColorStyle[color])
    .with("Line-Grey", (color) => disableColorStyle[color])
    .with("Solid-Brand", (color) => disableColorStyle[color])
    .with("Solid-Grey", (color) => disableColorStyle[color])
    .otherwise(() => disableColorStyle["Solid-Brand"]);

export const ButtonStyle = styled.button<ButtonProps>`
  border-radius: 8%;
  border: none;
  width: ${({ size }) => `${sizePattern(size)}px`};
  ${({ color, disable }) => disable ? disableColorPattern(color) : colorPattern(color)};
  height: ${({ height }) => `${height}px`};
  outline: none;
  cursor: ${({disable}) => disable ? "not-allowed" : "pointer"};
`;
