import styled from "styled-components";

export const ItemFriend = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    padding: 20px 0;
    margin: 15px auto;
    width: 290px;
    background-color: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 1px 1px 12px -5px rgba(0,0,0,0.75);

    transform: scale(1);
    transition: transform 500ms ease-in-out;
    &:hover {
    transform: scale(1.1)
    }
    & span {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        margin-right: 30px;
    }
`