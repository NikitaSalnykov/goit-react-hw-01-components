import { FriendListItem } from "../FriendListItem/FriendListItem"
import PropTypes from 'prop-types'
 
export const FriendList = ({friends}) => {
    return  <ul>
   <FriendListItem friends={friends}/>
</ul>
} 

FriendListItem.propTypes = {
    friends: PropTypes.array.isRequired
}