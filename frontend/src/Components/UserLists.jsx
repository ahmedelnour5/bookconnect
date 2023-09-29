import React from 'react';
import useLists from '../Hooks/useLists';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import '../Styles/Dashboard.css';

const UserLists = ({ lists }) => {
  const BrosweMessage = () => {
    const paperStyles = {
      gap: 2,
      p: 3,
    };
    const navigate = useNavigate();
    const buttonStyles = {
      fontFamily: 'inherit',
      bgcolor: '#5217fc',
      mt: 2,
      mb: 1,
    };
    const handleClick = () => {
      navigate('/books');
    };
    return (
      <Paper elevation={4} sx={paperStyles}>
        <p>Browse our collection of books to start creating lists!</p>
        <Button onClick={handleClick} sx={buttonStyles} variant="contained">
          Explore Books
        </Button>
      </Paper>
    );
  };

  //book component for a book in userlist
  const ListItem = ({ book }) => {
    return (
      <div className="listItem">
        <div className="itemCover">
          <img className="coverImg" src={book.coverImage} loading="lazy"></img>
        </div>
      </div>
    );
  };

  //userList component for userList object
  const UserList = ({ list }) => {
    const renderBooks = () => {
      return list.books.map((b) => <ListItem key={b._id} book={b} />);
    };

    return (
      <div className="userList">
        <h2>{list.listName}</h2>
        <div className="bookList">{renderBooks()}</div>
      </div>
    );
  };

  return (
    <div className="userLists">
      {lists && Object.keys(lists).length > 0 ? (
        lists.map((list) => <UserList key={list._id} list={list} />)
      ) : (
        <BrosweMessage />
      )}
    </div>
  );
};

export default UserLists;
