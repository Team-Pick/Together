import { PropsWithChildren } from "react";
import { CSSObject } from "styled-components";

export interface CommonComponentProps extends PropsWithChildren {
  style?: CSSObject;
}
