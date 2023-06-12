import React from "react";
import user from '../user.json'
import data from '../data.json'
import friends from '../friends.json'
import transactions from '../transactions.json'
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

export const App1 = () => {
  return <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
};


export const App2 = () => {
  return <Statistics title="Upload stats" stats={data} />

};

export const App3 = () => {
  return <FriendList friends={friends} />
};

export const App4 = () => {
  return <TransactionHistory items={transactions} />
};

