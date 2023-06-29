import React from "react";
import { useState, ReactNode, useCallback, isValidElement } from "react";
import { Portal } from "../Portal";

interface Props {
  closedCallback?: VoidFunction;
  openedCallback?: VoidFunction;
}

export const useModal = ({ closedCallback, openedCallback }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
    openedCallback?.();
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    closedCallback?.();
  }, []);

  const renderModal = useCallback(
    (modal: ReactNode) => {
      if (isOpen && isValidElement(modal)) {
        return <Portal selector="#modal">{modal}</Portal>;
      }
    },
    [isOpen],
  );

  return { open, close, renderModal };
};
