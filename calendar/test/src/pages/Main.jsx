import { Component } from "react";
// import { Mycom, Mycom2 } from "../components/Mycom";
import Mycom3 from "../components/Mycom3";

export default class Main extends Component {
  render() {
    return (
      <>
        main page
        <br />
        <Mycom3 newNum={1} newNum2={2} newNum3={3} />
      </>
    );
  }
}
/* <Mycom name="first component" Cname="red" />
   <Mycom name="second component" Cname="blue" />
   <Mycom2 /> */
