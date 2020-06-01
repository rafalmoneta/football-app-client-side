import React from 'react';
import { ModalOverlay, ModalWrapper, ModalContent, ModalContainer, ModalHeader, ModalCloseButton } from './style';

const Modal = ({ children, handleToggle, header }) => (
  <React.Fragment>
    <ModalOverlay />
    <ModalWrapper>
      <ModalContainer>
        <ModalHeader>
          <h2>{header}</h2>
          <ModalCloseButton onClick={handleToggle}>
            <span aria-hidden="true">&times;</span>
          </ModalCloseButton>
        </ModalHeader>
        <ModalContent>
          {children}
        </ModalContent>
      </ModalContainer>
    </ModalWrapper>
  </React.Fragment>
)

export default Modal;