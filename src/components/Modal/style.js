import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: .5;
`

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`

export const ModalContainer = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: 1.75rem auto;
  border-radius: 3px;
  width: 100%;
  max-width: 900px;
  padding: 2rem;
`


export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  h2 {
    margin: 0;
  }
`

export const ModalContent = styled.div`
  
`

export const ModalCloseButton = styled.button`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  opacity: .5;
  cursor: pointer;
  border: none;
`