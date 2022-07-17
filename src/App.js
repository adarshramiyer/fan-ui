import logo from "./logo.svg";
import "./Orbitron-VariableFont_wght.ttf";
import "./App.css";
import Header from "./Header";
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

const labelStyle = {
  paddingLeft: 25,
  paddingRight: 25,
  paddingTop: 100,
  paddingBottom: 100,
  color: '#cce6eb',
  fontSize: 30,
}

function App() {
  const [inputs, setInputs] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert({inputs})
  }

  return (
    <background className="App-background">
      <Header title="Fan Algorithm" className="navbar" />
      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>First Input:</label>
        <input
          className="App-text-input"
          type="text"
          name="firstInput"
          value={inputs.firstInput || ""}
          onChange={handleChange}
        />

        <br />

        <label style={labelStyle}>Second Input:</label>
        <input
          className="App-text-input"
          type="number"
          name="secondInput"
          value={inputs.secondInput || ""}
          onChange={handleChange}
        />

        <br />

        <label style={labelStyle}>Third Input:</label>
        <select
          className="App-dropdown"
          name="dropdown1"
          value={inputs.dropdown1 || ""}>
            <option value="Choice 1">Choice 1</option>
            <option value="Choice 2">Choice 2</option>
            <option value="Choice 3">Choice 3</option>
          </select>


        <br/>

        <input type="submit" />
      </form>
    </background>
  );
}

export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
