import styled from "styled-components";

export const PopUpWrap = styled.div`
  width: 500px;
  height: 700px;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 20px;

  & .ContainerTop {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
    position: relative;
  }
  & h2 {
    position: absolute;
    top: 0;
    left: 140px;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
  }
  & span {
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
  }
  & .popupContainer {
    width: 100%;
    height: 660px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .Container {
    width: 400px;
    height: 200px;
    border-radius: 20px;
    background-color: white;
  }
  & .ContainerBody {
    width: 100%;
    height: 160px;
    border-top: 1px solid;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  & input {
    width: 300px;
    height: 30px;
  }
  & button {
    width: 50px;
    height: 35px;
    background-color: white;
    border: 1px solid;
    transition: 1px;
    cursor: pointer;
  }
  & button:hover {
    border: none;
    background: black;
    color: white;
  }
`;
