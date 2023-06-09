import React from "react";
import user from '../user.json'
import { Profile } from "./Card/Profile";

export const App = () => {
  return <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
};
