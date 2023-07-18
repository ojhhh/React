import styled from "styled-components";

export const Wrap = styled.div`
  width: 500px;
  height: 700px;
  margin-top: 20px;
  position: relative;
  border-radius: 20px;
  & .title {
    position: relative;
  }
  & .addBtn {
    position: absolute;
    cursor: pointer;
    right: 20px;
    top: 15px;
    font-size: 20px;
    font-weight: 500;
  }
`;

export const TopBox = styled.div`
  border: 1px solid;
  border-left: none;
  border-right: none;
  width: 500px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 20px 0 10px;

  & span {
    cursor: pointer;
    font-weight: 800;
  }
`;
