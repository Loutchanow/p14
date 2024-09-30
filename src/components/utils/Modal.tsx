import React from 'react';
import styled from 'styled-components';

interface SimpleModalProps {
  open: boolean;
  handleClose: () => void;
}

const SimpleModal: React.FC<SimpleModalProps> = ({ open, handleClose }) => {
  if (!open) return null;

  return (
    <ModalOverlay onClick={handleClose}>
      <ModalContent>
        <ModalHeader>
          <h2>Confirmation</h2>
        </ModalHeader>
        <ModalBody>
          <p>L'utilisateur a été crée avec succès !</p>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default SimpleModal;


const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: black;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid white;
  width: 400px;
  max-width: 90%;
  position: relative;
`;

const ModalHeader = styled.div`
  margin-bottom: 10px;
  h2 {
    margin: 0;
  }
`;

const ModalBody = styled.div`
  margin-bottom: 20px;
`;
