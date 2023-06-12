import { Container, Title, Text, List} from "./profile.styled"
import PropTypes from "prop-types";

export const Profile = ({username, tag, location, avatar, stats}) => {
  return <Container>
  <div>
    <img
      src={avatar}
      alt="User avatar"
        width="150px"
        height="150px"
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

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired
}