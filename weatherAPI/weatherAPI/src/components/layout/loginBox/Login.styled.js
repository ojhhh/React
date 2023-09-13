import styled from "styled-components";

export const LoginBoxInput = styled.button`
  width: 100px;
  height: 20px;
`;

// 만들고 싶은 태그 div에 스타일을 적용 시켜서 내보내주자
// & : 스타일이 적용되고 있는 대상
// & .login-title {} : 스타일이 적용되고 있는 대상의 자식 태그
export const LoginBoxWrap = styled.div`
  border: 1px solid;
  width: ${(props) => props.width || "100px"};
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & .login-title {
    color: black;
    font-size: 20px;
    text-align: center;
  }
  & ${LoginBoxInput} {
    background-color: white;
    border-radius: 20px;
    border: 1px solid red;
  }
  & input {
    margin-bottom: 2px;
  }
`;
