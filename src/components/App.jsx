import Profile from 'components/Profile/Profile.js';
import Statistics from 'components/Statistics/Statistics.js';
import FriendList from 'components/FriendList/FriendList.js';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory.js';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};