/** @jsxImportSource theme-ui */
import React from "react";
import { Modal, ModalProps } from "@digi.swap/uikit";
import Gdigi from "./Gdigi";
import { modalProps } from "./styles";

const GdigiModal: React.FC<ModalProps> = ({ onDismiss }) => {
  return (
    <Modal zIndex={10} title="Get GDIGI" onDismiss={onDismiss} {...modalProps}>
      <Gdigi />
    </Modal>
  );
};

export default GdigiModal;
