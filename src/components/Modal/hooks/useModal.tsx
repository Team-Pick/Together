import React from "react";
import { useState, ReactNode, useCallback, isValidElement } from "react";
import Portal from "../../Portal";

interface Props {
  modal: ReactNode;
  closedCallback: VoidFunction;
  openedCallback: VoidFunction;
}

const useModal = ({ modal, closedCallback, openedCallback }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
    openedCallback();
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    closedCallback();
  }, []);

  const renderModal = () => isOpen && isValidElement(modal) && <Portal selector="#modal">{modal}</Portal>;

  return { open, close, renderModal };
};

export default useModal;
