import React from 'react';
// import PropTypes from 'prop-types';
import FriendListItem from 'components/friendlistitem/FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <section className={css.friendListSection}>
      <div className={css.container}>
        <ul className={css.friendList}>
          {friends.map(item => (
            <FriendListItem
              key={item.id}
              avatar={item.avatar}
              name={item.name}
              isOnline={item.isOnline}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

// FriendList.propTypes = {
//   key: PropTypes.number,
//   avatar: PropTypes.string,
//   name: PropTypes.string,
//   isOnline: PropTypes.bool,
// };

export default FriendList;
