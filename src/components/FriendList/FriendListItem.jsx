import { Title } from "components/Profile/profile.styled"
import { ItemFriend } from "./FriendList.styled"

export const FriendListItem = ({friends}) => {
    return friends.map(
        friend => {
            return <ItemFriend key={friend.id}>
                <span style={friend.isOnline ? {backgroundColor: "green"} : {backgroundColor: "red"}}></span>
                <img src={friend.avatar} alt={friend.name} width="48" />
                <Title>{friend.name}</Title>
            </ItemFriend>
        })
}