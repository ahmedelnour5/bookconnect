import React, { useState } from 'react';
import { Modal, Button, ButtonGroup, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from '@mui/material/CircularProgress';
import Review from './Review';

const ListModal = ({
  open,
  handleClose,
  coverImg,
  handleButtonClick,
  onBtnClose,
  handleFinished,
  handleFinishedClick,
  finished,
  pending,
}) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    height: 450,
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

  const finishedStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 3,
    textAlign: 'center',
    display: 'flex', // Use flexbox display
    flexDirection: 'column',
    justifyContent: 'space-between', // Center horizontally
    alignItems: 'center',
  };

  const closeStyle = {
    position: 'absolute',
    top: '0%',
    left: '0%',
    color: '#d41949',
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={finished ? finishedStyle : style}>
        {pending === true ? (
          <CircularProgress />
        ) : (
          <>
            <IconButton onClick={onBtnClose} sx={closeStyle}>
              <CloseIcon />
            </IconButton>
            <img className="modalImg" src={coverImg} alt="Book cover" />
            {finished ? (
              <Review handleFinished={handleFinished} />
            ) : (
              <ButtonGroup orientation="vertical" variant="text" size="large">
                <Button
                  className="modalBtn"
                  onClick={() => handleFinishedClick('Read')}
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
                  onClick={() => handleFinishedClick('Recommendations')}
                >
                  Recommendations
                </Button>
              </ButtonGroup>
            )}
          </>
        )}
      </Box>
    </Modal>
  );
};
export default ListModal;
