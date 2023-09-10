import React, { useContext, useState } from 'react';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ListModal from './Modal';
import { UserContext } from '../../Context/UserContext';

const AddToList = ({ coverImg, book }) => {
  const iconStyles = {
    padding: 0,
    marginTop: 0.8,
  };

  const LIST_API_URL = 'http://localhost:8080/api/userLists';
  const Rating_API_URL = 'http://localhost:8080/api/ratings';
  // open and close modal
  const [open, setOpen] = useState(false);
  const [finished, setFinished] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [selectedList, setSelectedList] = useState('');
  const [message, setMessage] = useState('');
  const { user } = useContext(UserContext);
  const config = {
    headers: {
      Authorization: 'Bearer ' + user.token,
    },
  };

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
    const listData = { book, selectedList };
    setIsPending(true);
    const response = await axios
      .post(LIST_API_URL, listData, config)
      .then((response) => {
        handleClose();
        setIsPending(false);
        setSuccess(true);
        setMessage(response.data.message);
      })
      .catch((error) => {
        setIsPending(false);
        setError(true);
        setMessage(error.response);
      });
  };

  // set user's listName (read or reccommendations)
  const handleFinishedList = (selectedList) => {
    setFinished(true);
    setSelectedList(selectedList);
  };

  const handleFinished = async (thoughts, rating) => {
    setIsPending(true);

    const listData = { selectedList, book };
    const listResponse = axios.post(LIST_API_URL, listData, config);

    if (thoughts !== '' && rating > 0) {
      const ratingData = { thoughts, book, rating };
      const ratingResponse = axios.post(Rating_API_URL, ratingData, config);
      console.log(config);
      const responses = await axios
        .all([listResponse, ratingResponse])
        .then(
          axios.spread((listRes) => {
            setIsPending(false);
            setFinished(false);
            handleClose();
            setMessage(listRes.data.message);
          })
        )
        .catch((error) => {
          setIsPending(false);
          setFinished(false);
          setError(true);
          handleClose();
          setMessage(error.response);
        });
    } else if (thoughts !== '') {
      const ratingData = { thoughts, book };
      const ratingResponse = axios.post(Rating_API_URL, ratingData, config);
      const responses = await axios
        .all([listResponse, ratingResponse])
        .then(
          axios.spread((listRes) => {
            setIsPending(false);
            setFinished(false);
            handleClose();
            setMessage(listRes.data.message);
          })
        )
        .catch((error) => {
          setIsPending(false);
          setFinished(false);
          setError(true);
          handleClose();
          setMessage(error.response);
        });
    } else if (rating > 0) {
      const ratingData = { rating, book };
      const ratingResponse = axios.post(Rating_API_URL, ratingData, config);
      console.log(config);
      const responses = await axios
        .all([listResponse, ratingResponse])
        .then(
          axios.spread((listRes) => {
            setIsPending(false);
            setFinished(false);
            handleClose();
            setMessage(listRes.data.message);
          })
        )
        .catch((error) => {
          setIsPending(false);
          setFinished(false);
          setError(true);
          handleClose();
          setMessage(error.response);
        });
    } else {
      const listResponse = axios
        .post(LIST_API_URL, listData, config)
        .then((listRes) => {
          setIsPending(false);
          setFinished(false);
          handleClose();
          setMessage(listRes.data.message);
        })
        .catch((error) => {
          setIsPending(false);
          setFinished(false);
          setError(true);
          handleClose();
          setMessage(error.response);
        });
    }
  };

  return (
    <>
      <IconButton className="addToList" onClick={handleOpen} sx={iconStyles}>
        <FavoriteBorderIcon />
        <ListModal
          open={open}
          onBtnClose={handleBtnClose}
          handleClose={handleClose}
          coverImg={coverImg}
          handleButtonClick={handleClick}
          finished={finished}
          handleFinishedClick={handleFinishedList}
          handleFinished={handleFinished}
          pending={isPending}
        />
      </IconButton>
      {success === true ? (
        <Alert onClose={() => setSuccess(false)}>{message}</Alert>
      ) : null}
      {error !== false ? (
        <Alert onClose={() => setError(false)}>{message}</Alert>
      ) : null}
    </>
  );
};

export default AddToList;
