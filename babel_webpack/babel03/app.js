class App extends React.Component {
  render() {
    retrun(
      <ul>
        <li>list 01</li>
        <li>list 02</li>
        <li>list 03</li>
      </ul>
    );
  }
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
