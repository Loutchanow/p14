import { Button as BaseButton } from '@mui/base/Button';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import {  useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { saveUser } from '../../slices/userSlice';
import { useState } from 'react';
import Modal from './Modal';

export default function UnstyledButtonsSimple() {

  const ready = useSelector((state: RootState) => state.users.readyToSave);
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const handleSave = () => {
    if (ready) {
      dispatch(saveUser());
      setModalOpen(true); 
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false); 
  };

  return (
    <>
    <Stack spacing={2} direction="row" margin={1}>
      <StyledButton disabled={!ready}  onClick={handleSave}>Save</StyledButton>
    </Stack>
     <Modal open={modalOpen} handleClose={handleCloseModal} />
    </>
  );
}

const blue = {
  200: '#99CCFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0066CC',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const StyledButton = styled(BaseButton)(
  ({ theme, disabled }: { theme: any; disabled?: boolean }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: ${disabled ? grey[500] : blue[500]};
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: ${disabled ? 'default' : 'pointer'};
  border: 1px solid ${disabled ? grey[500] : blue[500]};
  box-shadow: 0 2px 1px ${
    theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(45, 45, 60, 0.2)'
  }, inset 0 1.5px 1px ${blue[400]}, inset 0 -2px 1px ${blue[600]};

  &:hover {
    background-color: ${disabled ? grey[600] : blue[600]};
  }

  &:active {
    background-color: ${disabled ? grey[700] : blue[700]};
    box-shadow: none;
    transform: scale(0.99);
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};

    outline: none;
  }

  &.base--disabled {
    background-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[200] : grey[700]};
    border: 0;
    cursor: default;
    box-shadow: none;
    transform: scale(1);
  }
`,
);
