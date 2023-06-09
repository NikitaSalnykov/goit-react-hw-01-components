import { Container, Title, Text, List} from "./profile.styled"


export const Profile = ({username, tag, location, avatar, stats}) => {
  return <Container>
  <div>
    <img
      src={avatar}
      alt="User avatar"
      
    />
    <Title>{username}</Title>
    <Text>@{tag}</Text>
    <Text>{location}</Text>
  </div>

  <List >
    <li>
      <Text >Followers</Text>
      <span >{stats.followers}</span>
    </li>
    <li>
      <Text>Views</Text>
      <span >{stats.views}</span>
    </li>
    <li>
      <Text>Likes</Text>
      <span>{stats.likes}</span>
    </li>
  </List>
</Container>
}
