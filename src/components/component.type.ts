import { PropsWithChildren } from "react";
import { CSSObject } from "styled-components";

export interface CommonComponentProps extends PropsWithChildren, CustomStyleProps {}

export interface CustomStyleProps {
  style?: CSSObject;
}
