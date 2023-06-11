import { FriendListItem } from "./FriendListItem"

 
export const FriendList = ({friends}) => {
    return  <ul>
   <FriendListItem friends={friends}/>
</ul>
} 