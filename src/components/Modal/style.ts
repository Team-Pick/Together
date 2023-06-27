import styled, { CSSObject } from "styled-components";
import { AbsoluteCenter } from "../../style/libStyle";

export const Container = styled.div<{ style?: CSSObject }>`
  padding: 24px;
  background-color: white;
  display: flex;
  flex-direcntion: column;
  align-items: center;
  border-radius: 16px;

  ${AbsoluteCenter}

  @media screen and (max-width: 768px) {
    padding: 16px;
  }

  ${({ style }) => style}
`;

export const Icon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 16px;
  background-color: #c0f3ff;
`;

export const Title = styled.h3<{ style?: CSSObject }>`
  color: #1c1c1e;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  margin-top: 16px;

  ${({ style }) => style}
`;

export const Content = styled.p`
  color: #1c1c1e;
  font-size: 16px;
  lint-height: 24px;
  margin-top: 8px;
`;

export const ButtonsContainer = styled.div<{ style?: CSSObject }>`
  ${({ style }) => style}
  magin-top : 24px;
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

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  .cancel {
    border: 1px solid #0068ff;
    color: #0068ff;
  }

  .submit {
    background-color: #0068ff;
    border: 0px;
    color: white;
  }

  ${({ style }) => style}
`;
