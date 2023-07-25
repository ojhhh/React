import styled from "styled-components";

export const BoardMainWrap = styled.div``;

export const BoardWrap = styled.div`
  width: 500px;
  margin: 0 auto;
  & .boardContainer {
    border-bottom: 1px solid;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .boardContainer:first-child {
    border-top: 1px solid;
  }
  & .innerTitle,
  .innerContent,
  .innerWrite,
  .innerbtn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .innerTitle {
    width: 150px;
    height: 30px;
  }
  & .innerContent {
    width: 200px;
    height: 30px;
  }
  & .innerWrite {
    width: 50px;
    height: 30px;
  }
  & .innerbtn {
    width: 100px;
    height: 30px;
    display: flex;
  }
  & .innerbtn button {
    width: 100%;
    height: 100%;
    background-color: white;
    border: none;
    cursor: pointer;
    transition: 1s;
  }
  & .innerbtn button:hover {
    background-color: black;
    color: white;
  }
`;
