import React from 'react';
import { Modal, Button, ButtonGroup, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ListModal = ({
  open,
  handleClose,
  coverImg,
  handleButtonClick,
  onBtnClose,
}) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 3,
    textAlign: 'center',
    display: 'flex', // Use flexbox display
    flexDirection: 'column',
    justifyContent: 'start', // Center horizontally
    alignItems: 'center',
  };

  const closeStyle = {
    position: 'absolute',
    top: '0%',
    left: '0%',
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <IconButton onClick={onBtnClose} sx={closeStyle}>
          <CloseIcon />
        </IconButton>
        <img className="modalImg" src={coverImg}></img>
        <ButtonGroup orientation="vertical" variant="text">
          <Button
            className="modalBtn"
            onClick={() => handleButtonClick('Read')}
          >
            Read
          </Button>
          <Button
            className="modalBtn"
            onClick={() => handleButtonClick('Want to Read')}
          >
            Want to Read
          </Button>
          <Button
            className="modalBtn"
            onClick={() => handleButtonClick('Currently Reading')}
          >
            Currently Reading
          </Button>
          <Button
            className="modalBtn"
            onClick={() => handleButtonClick('Recommendations')}
          >
            Reccomendations
          </Button>
        </ButtonGroup>
      </Box>
    </Modal>
  );
};
export default ListModal;
