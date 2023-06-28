import { SwitchCaseProps } from "./types";

export const SwitchCase = <Case extends string>({ value, caseBy, defaultComponent = null }: SwitchCaseProps<Case>) => {
  if (value == null) {
    return defaultComponent;
  }

  return caseBy[value] ?? defaultComponent;
};
