import { randColor } from "getRandomColor";
import styled from "styled-components";

export const ItemList = styled.li`
display: flex;
flex-direction: column;
background-color: ${randColor};
color: white;
transition: 200ms ease-in-out;
&:hover{
background-color: lightblue;
color: black;
}
& span+span{
font-size: 25px;
}
`


export const Section = styled.section`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    overflow: hidden;
    padding-top: 40px;
    margin: 10px auto;
    width: 500px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 1px 1px 12px -5px rgba(0,0,0,0.75);

`

