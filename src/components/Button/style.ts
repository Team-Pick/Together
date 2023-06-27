import { match } from "ts-pattern";
import type { ButtonColorType, ButtonProps, ButtonSizeType } from "./type";
import styled, { FlattenSimpleInterpolation, css } from "styled-components";

const sizeStyle: Record<ButtonSizeType, number> = {
  small: 160,
  large: 66
};
const colorStyle: Record<ButtonColorType, FlattenSimpleInterpolation> = {
    "Solid-Brand": css`
        background: #0068FF;
        color: #fff;
        border-radius: 8%;

        &:hover{
            background: #2649FF
        }
        &:disabled{
            background: #D5E2EC;
            color: #8DA6B8;
        }
    `,
    "Line-Grey": css`
        background: #FFFFFF;
        border: 1px solid #1C1C1E;
        color: #1C1C1E;
        border-radius: 8%;

        &:hover{
            background: #F8FAFC;
            border: 1px solid #454545;
            color: #454545;
        }
        &:disabled{
            background: #E6E6E6;
            border: 1px solid #E6E6E6;
            color: #A0A0A0;
        }
    `,
    "Line-Brand": css`
        background: #fff;
        border: 1px solid #0068FF;
        color: #0068FF;
        border-radius: 8%;

        &:hover{
            border: 1px solid #2649FF;
            background: #F3FEFF;
        }
        &:disabled{
            background: #FFFFFF;
            color: #8DA6B8;
            border: 1px solid #8DA6B8;
        }
    `,
    "Solid-Grey": css`
        background: #1C1C1E;
        color: #fff;
        border-radius: 8%;

        &:hover{
            background: #454545;
        }
        &:disabled{
            background: #E6E6E6;
            color: #A0A0A0;
        }
    `
}

const sizePattern = (size: ButtonSizeType) => 
    match<ButtonSizeType, number>(size)
    .with("small", (size) => sizeStyle[size])
    .with("large", (size) => sizeStyle[size])
    .otherwise(() => sizeStyle.small)

const colorPattern = (color: ButtonColorType) => 
    match<ButtonColorType, FlattenSimpleInterpolation>(color)
    .with("Line-Brand", (color) => colorStyle[color])
    .with("Line-Grey", (color) => colorStyle[color])
    .with("Solid-Brand", (color) => colorStyle[color])
    .with("Solid-Grey", (color) => colorStyle[color])
    .otherwise(() => colorStyle["Solid-Brand"])

export const ButtonStyle = styled.button<ButtonProps>`
    ${({size}) => `${sizePattern(size)}px`}
    ${({color}) => colorPattern(color)}
    ${({height}) => `${height}px`}
`;
