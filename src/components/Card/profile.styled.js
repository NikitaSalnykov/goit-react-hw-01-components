import styled from 'styled-components'
import { Profile } from './Profile'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    padding: 20px;
    margin: 10px auto;
    width: 350px;
    background-color: aliceblue;
    border-radius: 20px;
& div>img {
  border-radius: 50%;
  object-fit: cover;
  width: 150px;
  background-color: teal;
}
& p {
  color: silver;
  text-align: center;
}
`


export const Title = styled.p`
    font-weight: 600;
    font-size: 24px;
    color: black;
`