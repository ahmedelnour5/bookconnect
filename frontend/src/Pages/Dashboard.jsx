import React, { useState } from 'react';
import useLists from '../Hooks/useLists';
import UserHeader from '../Components/Header/userHeader';

const UserLists = () => {
  const { lists } = useLists();

  //book component for a book in userlist
  const ListItem = ({ book }) => {
    return (
      <div className="listItem">
        <div className="itemCover">
          <img className="coverImg" src={book.coverImage} loading="lazy"></img>
        </div>
        <div className="itemDetails">
          <span className="book-title">{book.title}</span>
          <span className="book-author">{book.author.name}</span>
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

  const renderLists = () => {
    return lists
      ? lists.map((list) => <UserList key={list._id} list={list} />)
      : null;
  };

  return <div className="userLists">{renderLists()}</div>;
};
const Dashboard = () => {
  return (
    <div className="Dashboard">
      <UserHeader />
      <UserLists />
    </div>
  );
};

export default Dashboard;
