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

const hundredPercentStyle = {
  paddingLeft: 25,
  paddingRight: 20,
  paddingTop: 100,
  paddingBottom: 100,
  color: '#cce6eb',
  fontSize: 30,
}

const checkLabelStyle = {
  paddingLeft: 10,
  paddingRight: 25,
  paddingTop: 100,
  paddingBottom: 100,
  color: '#94eb5b',
  fontSize: 25,
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

        <label style={labelStyle}>Number of Fan Trays:</label>
        <input
          id="numFanTrays"
          className="App-text-input"
          type="number"
          name="numFanTrays"
          value={inputs.numFanTrays || ""}
          onChange={handleChange}
        />

        <br />

        <label style={labelStyle}>Fans per Tray:</label>
        <input
          id="numFansPerTray"
          className="App-text-input"
          type="number"
          name="numFansPerTray"
          value={inputs.numFansPerTray || ""}
          onChange={handleChange}
        />

        <br />

        <label style={labelStyle}>Number of Horizontal Zones:</label>
        <input
          id="numHZones"
          className="App-text-input"
          type="number"
          name="numHZones"
          value={inputs.numHZones || ""}
          onChange={handleChange}
        />

        <br />

        <label style={labelStyle}>Number of Vertical Zones:</label>
        <input
          id="numVZones"
          className="App-text-input"
          type="number"
          name="numVZones"
          value={inputs.numVZones || ""}
          onChange={handleChange}
        />

        <br />

        <label style={labelStyle}>Airflow Direction:</label>
        <input
          id="backToFront"
          className="App-checkbox"
          type="checkbox"
          name="backToFront"
          value={inputs.backToFront || ""}
          onChange={handleChange}
        />
        <label style={checkLabelStyle}>Back to Front</label>
        <input
          id="frontToBack"
          className="App-checkbox"
          type="checkbox"
          name="frontToBack"
          value={inputs.frontToBack || ""}
          onChange={handleChange}
        />
        <label style={checkLabelStyle}>Front to Back</label>

        <br />

        <label style={labelStyle}>Desired Lifetime:</label>
        <input
          id="lifetime"
          className="App-text-input"
          type="number"
          name="lifetime"
          value={inputs.lifetime || ""}
          onChange={handleChange}
        />
        <label style={checkLabelStyle}>years</label>

        <br />

        <label style={labelStyle}>Number of Removed Fan Trays:</label>
        <input
          id="numRemovedTrays"
          className="App-text-input"
          type="number"
          name="numRemovedTrays"
          value={inputs.numRemovedTrays || ""}
          onChange={handleChange}
        />

        <br />

        <label style={labelStyle}>Operating Temperature Range: </label>
        <input
          id="lowTemp"
          className="App-text-input"
          type="number"
          name="lowTemp"
          value={inputs.lowTemp || ""}
          onChange={handleChange}
        />
        <label style={checkLabelStyle}> Celsius to </label>
        <input
          id="highTemp"
          className="App-text-input"
          type="number"
          name="highTemp"
          value={inputs.highTemp || ""}
          onChange={handleChange}
        />
        <label style={checkLabelStyle}> Celsius</label>

        <br />

        <label style={labelStyle}>Ambient Air Temperature: </label>
        <input
          id="ambientTemp"
          className="App-text-input"
          type="number"
          name="ambientTemp"
          value={inputs.ambientTemp || ""}
          onChange={handleChange}
        />
        <label style={checkLabelStyle}> Celsius</label>

        <br/><br/>

        <label style={labelStyle}>RPM increase at each 10% increment of fan speed: </label>
        <br/>
        <label style={labelStyle}>10%: </label>
        <input
          id="tenPercentRPM"
          className="App-text-input"
          type="number"
          name="tenPercentRPM"
          value={inputs.tenPercentRPM || ""}
          onChange={handleChange}
        />
        <label style={checkLabelStyle}>RPM</label>
        <br/>
        <label style={labelStyle}>20%: </label>
        <input
          id="twentyPercentRPM"
          className="App-text-input"
          type="number"
          name="twentyPercentRPM"
          value={inputs.twentyPercentRPM || ""}
          onChange={handleChange}
        />
        <label style={checkLabelStyle}>RPM</label>
        <br/>
        <label style={labelStyle}>30%: </label>
        <input
          id="thirtyPercentRPM"
          className="App-text-input"
          type="number"
          name="thirtyPercentRPM"
          value={inputs.thirtyPercentRPM || ""}
          onChange={handleChange}
        />
        <label style={checkLabelStyle}>RPM</label>
        <br/>
        <label style={labelStyle}>40%: </label>
        <input
          id="fortyPercentRPM"
          className="App-text-input"
          type="number"
          name="fortyPercentRPM"
          value={inputs.fortyPercentRPM || ""}
          onChange={handleChange}
        />
        <label style={checkLabelStyle}>RPM</label>
        <br/>
        <label style={labelStyle}>50%: </label>
        <input
          id="fiftyPercentRPM"
          className="App-text-input"
          type="number"
          name="fiftyPercentRPM"
          value={inputs.fiftyPercentRPM || ""}
          onChange={handleChange}
        />
        <label style={checkLabelStyle}>RPM</label>
        <br/>
        <label style={labelStyle}>60%: </label>
        <input
          id="sixtyPercentRPM"
          className="App-text-input"
          type="number"
          name="sixtyPercentRPM"
          value={inputs.sixtyPercentRPM || ""}
          onChange={handleChange}
        />
        <label style={checkLabelStyle}>RPM</label>
        <br/>
        <label style={labelStyle}>70%: </label>
        <input
          id="seventyPercentRPM"
          className="App-text-input"
          type="number"
          name="seventyPercentRPM"
          value={inputs.seventyPercentRPM || ""}
          onChange={handleChange}
        />
        <label style={checkLabelStyle}>RPM</label>
        <br/>
        <label style={labelStyle}>80%: </label>
        <input
          id="eightyPercentRPM"
          className="App-text-input"
          type="number"
          name="eightyPercentRPM"
          value={inputs.eightyPercentRPM || ""}
          onChange={handleChange}
        />
        <label style={checkLabelStyle}>RPM</label>
        <br/>
        <label style={labelStyle}>90%: </label>
        <input
          id="ninetyPercentRPM"
          className="App-text-input"
          type="number"
          name="ninetyPercentRPM"
          value={inputs.ninetyPercentRPM || ""}
          onChange={handleChange}
        />
        <label style={checkLabelStyle}>RPM</label>
        <br/>
        <label style={hundredPercentStyle}>100%: </label>
        <input
          id="hundredPercentRPM"
          className="App-text-input"
          type="number"
          name="hundredPercentRPM"
          value={inputs.hundredPercentRPM || ""}
          onChange={handleChange}
        />
        <label style={checkLabelStyle}>RPM</label>
        
        <br/><br/>

        <label style={labelStyle}>Waterfall or Granular Cooling:</label>
        <select
          className="App-dropdown"
          id = "coolingType"
          name="coolingType"
          value={inputs.coolingType || ""}
          onChange={handleChange}
        >
          <option value="Choice 1">Waterfall</option>
          <option value="Choice 2">Granular</option>
        </select>

        <br />

        <label style={labelStyle}>Max Power Consumption Per Fan</label>
        <input
          id="maxPower"
          className="App-text-input"
          type="number"
          name="maxPower"
          value={inputs.maxPower || ""}
          onChange={handleChange}
        />
        <label style={checkLabelStyle}>Watts</label>

        <br/><br/>

        <input type="submit" className="App-button" />
        <br/>
      </form>
    </background>
  );
}

export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
