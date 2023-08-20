import React, { useState } from 'react';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ListModal from './Modal';

const AddToList = ({ coverImg, book }) => {
  const iconStyles = {
    padding: 0,
    marginTop: 0.8,
  };

  const API_URL = 'http://localhost:8080/api/userLists';
  const user = JSON.parse(localStorage.getItem('user'));
  const userID = user._id;

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (!open) {
      setOpen(true);
    }
  };

  const handleClose = () => setOpen(false);

  const handleBtnClose = (e) => {
    console.log(e);
    console.log('close clicked!');
    setOpen(false);
  };

  const handleClick = async (selectedList) => {
    handleClose();
    try {
      const listData = { userID, book, selectedList };
      const { data } = await axios.post(API_URL, listData);
      if (data) {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <IconButton className="addToList" onClick={handleOpen} sx={iconStyles}>
      <FavoriteBorderIcon />
      <ListModal
        open={open}
        onBtnClose={handleBtnClose}
        handleClose={handleClose}
        coverImg={coverImg}
        handleButtonClick={handleClick}
      />
    </IconButton>
  );
};

export default AddToList;
