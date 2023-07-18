import styled from "styled-components";

export const ListBox = styled.div`
  /* border-bottom: 1px solid; */
  width: 500px;
  height: 30px;
  & .listContainer {
    display: flex;
  }
  & .CheckBox {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-content: center;
  }
  & .ListBody {
    width: 470px;
    height: 30px;
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
`;
