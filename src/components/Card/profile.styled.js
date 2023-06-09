import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    padding-top: 20px;
    margin: 10px auto;
    width: 350px;
    background-color: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 1px 1px 12px -5px rgba(0,0,0,0.75);
& div>img {
  margin: 15px auto;
  border-radius: 50%;
  width: 150px;
  background-color: teal;
  transition: 100ms ease-in-out;
  transform: scale(1);
}
  & div>img:hover{
    transform: scale(1.1);
  }
 & div {
text-align: center
} & div>p {
  margin-bottom: 10px;
}
`
export const Text = styled.p`
  color: grey;
`

export const Title = styled.p`
    font-weight: 600;
    font-size: 24px;
    color: black;
`

export const List = styled.ul`
 display: flex;
 text-align: center;
    justify-content: space-evenly;
    width: 100%;
   background-color: aliceblue;
 & li{
  padding: 20px;
  flex-wrap: wrap;
  width: 150px;
  border-top: 2px solid silver;
 }
 & li:nth-child(2){
border-left: 2px solid silver;
border-right: 2px solid silver;
 }
 & span {
    font-weight: 600;
    font-size: 18px;
 }
`