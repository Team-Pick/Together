import React from "react";
import { ModalButtonsProps, ModalContentProps, ModalIcon, ModalProps, ModalTitleProps } from "./types";
import * as S from "./style";
import { usePreventScroll } from "../../hooks/usePreventScroll";

const ModalContainer = ({ children, style }: ModalProps) => {
  usePreventScroll();

  return <S.Container style={style}>{children}</S.Container>;
};

const Icon = ({ children, style }: ModalIcon) => {
  return <S.Icon style={style}>{children}</S.Icon>;
};

const Title = ({ children, style }: ModalTitleProps) => {
  return <S.Title style={style}>{children}</S.Title>;
};

const Content = ({ children, style }: ModalContentProps) => {
  return <S.Content style={style}>{children}</S.Content>;
};

const Buttons = ({ children, style }: ModalButtonsProps) => {
  return <S.ButtonsContainer style={style}>{children}</S.ButtonsContainer>;
};

export const Modal = Object.assign(ModalContainer, { Icon, Title, Content, Buttons });
