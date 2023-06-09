import { Container, Title } from "./profile.styled"


export const Profile = ({username, tag, location, avatar, stats}) => {
  return <Container>
  <div>
    <img
      src={avatar}
      alt="User avatar"
      
    />
    <Title>{username}</Title>
    <p>@{tag}</p>
    <p>{location}</p>
  </div>

  <ul >
    <li>
      <span >Followers</span>
      <span >{stats.followers}</span>
    </li>
    <li>
      <span>Views</span>
      <span >{stats.views}</span>
    </li>
    <li>
      <span>Likes</span>
      <span>{stats.likes}</span>
    </li>
  </ul>
</Container>
}
