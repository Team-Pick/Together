import styled, { CSSObject } from "styled-components";
import { AbsoluteCenter } from "../../style/libStyle";

export const Container = styled.div<{ style?: CSSObject }>`
  min-width: 400px;
  padding: 24px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  box-sizing: border-box;
  z-index: 10;

  ${AbsoluteCenter}

  @media screen and (max-width: 768px) {
    min-width: 368px;
    padding: 16px;
  }

  ${({ style }) => style}
`;

export const Icon = styled.div<{ style?: CSSObject }>`
  width: 80px;
  height: 80px;
  border-radius: 16px;
  background-color: #c0f3ff;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ style }) => style}
`;

export const Title = styled.h3<{ style?: CSSObject }>`
  color: #1c1c1e;
  font-weight: bold;
  margin: 0px;
  font-size: 20px;
  line-height: 28px;
  margin-top: 16px;

  ${({ style }) => style}
`;

export const Content = styled.p`
  color: #1c1c1e;
  font-size: 16px;
  line-height: 24px;
  margin: 0px;
  margin-top: 8px;
  font-weight: 400;
`;

export const ButtonsContainer = styled.div<{ style?: CSSObject }>`
  width: 100%;
  ${({ style }) => style}
  margin-top : 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  button {
    width: 160px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
    border-radius: 8px;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  .cancel {
    border: 1px solid #0068ff;
    color: #0068ff;
    background-color: white;
  }

  .submit {
    background-color: #0068ff;
    border: 0px;
    color: white;
  }

  ${({ style }) => style}
`;
