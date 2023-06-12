import styled from "styled-components"

export const Table = styled.table`
    margin: 10px auto;
    width: 450px;
    background-color: white;
    box-shadow: 1px 1px 12px -5px rgba(0,0,0,0.75);

    font-size: 14px;
    border-spacing: 0;
    text-align: center;
    & th {

    background: #BCEBDD;
    padding: 10px 20px;
    }
    & th, td {
    border-style: solid;
    border-width: 0 1px 1px 0;
    border-color: silver;
    }   
    & td:first-child {
    text-align: left;
    padding-left: 20px;
    }


`


export const TableRaw = styled.tr`
  transition: 100ms ease-in-out;
&:hover {
  background-color: teal;
  color: white
}
`

