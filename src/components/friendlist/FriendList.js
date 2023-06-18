import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from '../friendlistitem/FriendListItem.js';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <section className={css.friendListSection}>
      <div className={css.container}>
        <ul className={css.friendList}>
          {friends.map(friend => (
            <FriendListItem
              key={friend.id}
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
