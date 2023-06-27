import React from "react";
import { ModalButtonsProps, ModalContentProps, ModalProps, ModalTitleProps } from "./types";
import * as S from "./style";

const Modal = ({ children, style }: ModalProps) => {
  return <>{<S.Container style={style}>{children}</S.Container>}</>;
};

const Title = ({ children, style }: ModalTitleProps) => {
  return <S.Title style={style}>{children}</S.Title>;
};

const content = ({ children, style }: ModalContentProps) => {
  return <S.Content style={style}>{children}</S.Content>;
};

const Buttons = ({ children, style }: ModalButtonsProps) => {
  return <S.ButtonsContainer style={style}>{children}</S.ButtonsContainer>;
};

export default Object.assign(Modal, { Title, content, Buttons });
