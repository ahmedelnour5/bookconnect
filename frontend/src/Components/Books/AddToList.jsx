import React, { useContext, useState } from 'react';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Auth from '../../features/Auth';
import ListModal from './Modal';
import { UserContext } from '../../Context/UserContext';

const AddToList = ({ coverImg, book }) => {
  const iconStyles = {
    padding: 0,
    marginTop: 0.8,
  };

  const API_URL = 'http://localhost:8080/api/userLists';
  const { user } = useContext(UserContext);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (!open) {
      setOpen(true);
    }
  };

  const handleClose = () => setOpen(false);
  const handleBtnClose = () => setOpen(false);

  const handleClick = async (selectedList, user) => {
    handleClose();

    try {
      const listData = { book, selectedList };
      const config = {
        headers: {
          Authorization: 'Bearer ' + user.token,
        },
      };
      const { data } = await axios.post(API_URL, listData, config);
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
