import React from 'react';
import { ModalOverlay, ModalWrapper, ModalContent, ModalContainer, ModalHeader, ModalCloseButton } from './style';

const Modal = ({ children, handleToggle }) => (
  <React.Fragment>
    <ModalOverlay />
    <ModalWrapper>
      <ModalContainer>
        <ModalHeader>
          <ModalCloseButton onClick={handleToggle}>
            <span aria-hidden="true">&times;</span>
          </ModalCloseButton>
        </ModalHeader>
        <ModalContent>
          Hello, I'm a modal.
          {children}
        </ModalContent>
      </ModalContainer>
    </ModalWrapper>
  </React.Fragment>
)

export default Modal;