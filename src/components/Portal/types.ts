import { CommonComponentProps } from "../component.type";

export interface PortalProps extends Omit<CommonComponentProps, "style"> {
  selector: string;
}
