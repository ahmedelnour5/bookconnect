import React, { useContext, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ListModal from './Modal';
import usePost from '../../Hooks/usePost';

const AddToList = ({ coverImg, book }) => {
  const iconStyles = {
    padding: 0,
    marginTop: 0.8,
  };

  const LIST_API_URL = 'http://localhost:8080/api/userLists';
  const Rating_API_URL = 'http://localhost:8080/api/ratings';
  const [open, setOpen] = useState(false);
  const [finished, setFinished] = useState(false);

  const handleOpen = () => {
    if (!open) {
      setOpen(true);
    }
  };

  const handleClose = () => setOpen(false);

  const handleBtnClose = () => {
    setOpen(false);
    setFinished(false);
  };

  const handleClick = async (selectedList) => {
    handleClose();
    const listData = { book, selectedList };
  };

  const handleFinished = async (selectedList, thoughts, rating) => {
    setFinished(true);

    if (rating > 0 && thoughts !== null) {
      setFinished(false);
      handleClose();
      const ratingData = { rating, thoughts, book };
      const { data, error } = usePost(Rating_API_URL, ratingData);
    } else if (rating > 0) {
      setFinished(false);
      handleClose();
      const ratingData = { rating, book };
      const { data, error } = usePost(Rating_API_URL, ratingData);
    } else if (thoughts !== null) {
      setFinished(false);
      handleClose();
      const ratingData = { thoughts, book };
    } else {
      setFinished(false);
      handleClose();
      const listData = { book, selectedList };
      const { data, error } = usePost(LIST_API_URL, listData);
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
        finished={finished}
        handleFinished={handleFinished}
      />
    </IconButton>
  );
};

export default AddToList;
