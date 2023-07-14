import { TitleList } from './FriendListItem.styled'
import { ItemFriend } from "../FriendList/FriendList.styled"
import PropTypes from 'prop-types'

export const FriendListItem = ({friends}) => {
    return friends.map(
        friend => {
            return <ItemFriend key={friend.id}>
                <span style={friend.isOnline ? {backgroundColor: "green"} : {backgroundColor: "red"}}></span>
                <img src={friend.avatar} alt={friend.name} width="48" height="48"/>
                <TitleList>{friend.name}</TitleList>
            </ItemFriend>
        })
}

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    })).isRequired
}