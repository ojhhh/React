import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SignUpWrap, SignWrap } from "./Signup.styled";
import { SignUp } from "../../../features/users";
import Global from "../../../Global";

const Signup = () => {
  const { dispatch } = useContext(Global);
  const [getId, setGetId] = useState("");
  const [getPw, setGetPw] = useState("");

  useEffect(() => {
    console.log(getId, getPw);
  }, [getId, getPw]);

  return (
    <SignUpWrap>
      <div className="SignTitle">
        <h1>Signup</h1>
      </div>
      <SignWrap>
        <div className="SignContainer">
          <label>ID</label>
          <input name="user_id" onChange={(e) => setGetId(e.target.value)} />
          <label>PW</label>
          <input
            type="password"
            name="user_pw"
            onChange={(e) => setGetPw(e.target.value)}
          />
          <button
            onClick={() => dispatch(SignUp({ user_id: getId, user_pw: getPw }))}
          >
            Signup
          </button>
        </div>
      </SignWrap>
    </SignUpWrap>
  );
};

export default Signup;
