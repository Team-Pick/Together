import { Modal } from "../components";
import React, { useEffect } from "react";
import { useModal } from "../components/Modal/useModal";

export default {
  title: "Components/Modal",
  component: Modal,
};

export const Default = () => {
  const { renderModal, open, close } = useModal({
    openedCallback: () => {
      return;
    },
    closedCallback: () => {
      return;
    },
  });

  useEffect(() => {
    open();
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#F1F5F9" }}>
      <div id="modal" />
      {renderModal(
        <Modal>
          <Modal.Icon></Modal.Icon>
          <Modal.Title>모달 제목 한줄입니다.</Modal.Title>
          <Modal.Content>
            모달 내용 한줄입니다. <br /> 모달 내용 한줄입니다.
          </Modal.Content>
          <Modal.Buttons>
            <button className="cancel" onClick={close}>
              취소
            </button>
            <button className="submit">확인</button>
          </Modal.Buttons>
        </Modal>,
      )}
    </div>
  );
};
