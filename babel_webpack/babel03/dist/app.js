class App extends React.Component {
  render() {
    retrun( /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "list 01"), /*#__PURE__*/React.createElement("li", null, "list 02"), /*#__PURE__*/React.createElement("li", null, "list 03")));
  }
}
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render( /*#__PURE__*/React.createElement(App, null));
