import "./App.css";
import Header from "./Header";
import { useState } from "react";
import ReactDOM from "react-dom/client";

const labelStyle = {
  paddingLeft: 25,
  paddingRight: 25,
  paddingTop: 0,
  paddingBottom: 100,
  color: "#282828",
  fontSize: 30,
};

const blueLabelStyle = {
  paddingLeft: 25,
  paddingRight: 25,
  paddingTop: 0,
  paddingBottom: 100,
  color: "#049fd9",
  fontSize: 30,
};

const unitLabelStyle = {
  paddingLeft: 10,
  paddingRight: 25,
  paddingTop: 100,
  paddingBottom: 100,
  color: "#049fd9",
  fontSize: 25,
};

const errorStyle = {
  paddingLeft: 60,
  paddingBottom: 50,
  fontSize: 20,
  color: '#ff0000',

}

function render() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
}

function App() {
  const [inputs, setInputs] = useState("");

  const [errors, setErrors] = useState("");

  const handleChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //errors = ""
    setErrors(errors + "");
    console.log(errors);

    var validEntry = true;

    if (inputs.length <= 21) {
      setErrors(errors + "You have not filled in all fields. ");
      console.log(errors);
      validEntry = false;
    }

    //setErrors(errors + "test error ");
    console.log(errors);

    //setErrors("This is an error");

    if (validEntry == true) {
      const element = document.createElement("a");
      const file = new Blob([JSON.stringify(inputs)], {
        type: "application/json",
      });
      element.href = URL.createObjectURL(file);
      element.download = "Fan_Input.json";
      document.body.appendChild(element);
      element.click();
    }

  };

  return (
    <background className="App-background">
      <Header title="Fan Algorithm" className="navbar" />
      <form onSubmit={handleSubmit}>

        <table border="0">
          <tr>
            <td><label style={labelStyle}>Number of Fan Trays:</label></td>
            <td>
              <input
                id="numFanTrays"
                className="App-text-input"
                type="number"
                name="numFanTrays"
                value={inputs.numFanTrays || ""}
                onChange={handleChange}
              />
              </td>
          </tr>
          <tr>
            <td><label style={labelStyle}>Fans per Tray:</label></td>
            <td>
            <input
                id="numFansPerTray"
                className="App-text-input"
                type="number"
                name="numFansPerTray"
                value={inputs.numFansPerTray || ""}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td><label style={labelStyle}>Number of Removed Fan Trays:</label></td>
            <td>
            <input
                id="numRemovedTrays"
                className="App-text-input"
                type="number"
                name="numRemovedTrays"
                value={inputs.numRemovedTrays || ""}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td><label style={labelStyle}>Number of Horizontal Zones:</label></td>
            <td>
            <input
                id="numHZones"
                className="App-text-input"
                type="number"
                name="numHZones"
                value={inputs.numHZones || ""}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td><label style={labelStyle}>Number of Vertical Zones:</label></td>
            <td><input
                id="numVZones"
                className="App-text-input"
                type="number"
                name="numVZones"
                value={inputs.numVZones || ""}
                onChange={handleChange}
              />
              </td>
          </tr>
          <tr>
            <td><label style={labelStyle}>Airflow Direction:</label></td>
            <td>
              <select
                className="App-dropdown"
                id="airFlowDir"
                name="airFlowDir"
                value={inputs.airFlowDir || ""}
                onChange={handleChange}
              >
                <option value=""></option>
                <option value="frontToBack">Front to Back</option>
                <option value="backToFront">Back to Front</option>
                <option value="biDirectional">Bi-directional</option>
              </select>
              </td>
          </tr>
          <tr>
            <td><label style={labelStyle}>Desired Lifetime:</label></td>
            <td>
            <input
                id="lifetime"
                className="App-text-input"
                type="number"
                name="lifetime"
                value={inputs.lifetime || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}>years</label>
            </td>
          </tr>
          
          <tr>
            <td><label style={labelStyle}>Minimum Operating Temperature: </label></td>
            <td>
            <input
                id="lowTemp"
                className="App-text-input"
                type="number"
                name="lowTemp"
                value={inputs.lowTemp || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}> Celsius</label>
              
            </td>
          </tr>
          <tr>
            <td><label style={labelStyle}>Maximum Operating Temperature: </label></td>
            <td>
            <input
                id="highTemp"
                className="App-text-input"
                type="number"
                name="highTemp"
                value={inputs.highTemp || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}> Celsius</label>
            </td>
          </tr>
          <tr>
            <td><label style={labelStyle}>Ambient Air Temperature: </label></td>
            <td>
            <input
                id="ambientTemp"
                className="App-text-input"
                type="number"
                name="ambientTemp"
                value={inputs.ambientTemp || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}> Celsius</label>
            </td>
          </tr>
          <tr>
            <td></td>
            <td><br/></td>
          </tr>
          <tr>
            <td><label style={blueLabelStyle}>Fan RPM at each level below</label></td>
            <td><br/></td>
          </tr>
          <tr>
            <td><label style={labelStyle}>10%: </label></td>
            <td>
            <input
                id="tenPercentRPM"
                className="App-text-input"
                type="number"
                name="tenPercentRPM"
                value={inputs.tenPercentRPM || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}>RPM</label>
            </td>
          </tr>
          <tr>
            <td><label style={labelStyle}>20%: </label></td>
            <td>
            <input
                id="twentyPercentRPM"
                className="App-text-input"
                type="number"
                name="twentyPercentRPM"
                value={inputs.twentyPercentRPM || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}>RPM</label>
            </td>
          </tr>
          <tr>
            <td><label style={labelStyle}>30%: </label></td>
            <td>
              <input
                id="thirtyPercentRPM"
                className="App-text-input"
                type="number"
                name="thirtyPercentRPM"
                value={inputs.thirtyPercentRPM || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}>RPM</label>
              </td>
          </tr>
          <tr>
            <td><label style={labelStyle}>40%: </label></td>
            <td>
            <input
                id="fortyPercentRPM"
                className="App-text-input"
                type="number"
                name="fortyPercentRPM"
                value={inputs.fortyPercentRPM || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}>RPM</label>
            </td>
          </tr>
          <tr>
            <td><label style={labelStyle}>50%: </label></td>
            <td>
            <input
                id="fiftyPercentRPM"
                className="App-text-input"
                type="number"
                name="fiftyPercentRPM"
                value={inputs.fiftyPercentRPM || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}>RPM</label>
            </td>
          </tr>
          <tr>
            <td><label style={labelStyle}>60%: </label></td>
            <td>
            <input
                id="sixtyPercentRPM"
                className="App-text-input"
                type="number"
                name="sixtyPercentRPM"
                value={inputs.sixtyPercentRPM || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}>RPM</label>
            </td>
          </tr>
          <tr>
            <td><label style={labelStyle}>70%: </label></td>
            <td>
            <input
                id="seventyPercentRPM"
                className="App-text-input"
                type="number"
                name="seventyPercentRPM"
                value={inputs.seventyPercentRPM || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}>RPM</label>
            </td>
          </tr>
          <tr>
            <td><label style={labelStyle}>80%: </label></td>
            <td>
            <input
                id="eightyPercentRPM"
                className="App-text-input"
                type="number"
                name="eightyPercentRPM"
                value={inputs.eightyPercentRPM || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}>RPM</label>
            </td>
          </tr>
          <tr>
            <td><label style={labelStyle}>90%: </label></td>
            <td>
            <input
                id="ninetyPercentRPM"
                className="App-text-input"
                type="number"
                name="ninetyPercentRPM"
                value={inputs.ninetyPercentRPM || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}>RPM</label>
            </td>
          </tr>
          <tr>
            <td><label style={labelStyle}>100%: </label></td>
            <td>
            <input
                id="hundredPercentRPM"
                className="App-text-input"
                type="number"
                name="hundredPercentRPM"
                value={inputs.hundredPercentRPM || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}>RPM</label>
            </td>
          </tr>
          <tr>
            <td></td>
            <td><br/></td>
          </tr>
          <tr>
            <td><label style={labelStyle}>Waterfall or Granular Cooling:</label></td>
            <td>
            <select
                className="App-dropdown"
                id="coolingType"
                name="coolingType"
                value={inputs.coolingType || ""}
                onChange={handleChange}
              >
                <option value=""></option>
                <option value="waterfall">Waterfall</option>
                <option value="granular">Granular</option>
              </select>
            </td>
          </tr>
          <tr>
            <td><label style={labelStyle}>Max Power Consumption Per Fan: </label></td>
            <td>
            <input
                id="maxPower"
                className="App-text-input"
                type="number"
                name="maxPower"
                value={inputs.maxPower || ""}
                onChange={handleChange}
              />
              <label style={unitLabelStyle}>Watts</label>
            </td>
          </tr>
          
        </table>


        <input type="submit" className="App-button" />
        <br/>
        <label id = "ERRORS" style = {errorStyle}> {errors} </label>
        <br/>
      </form>
    </background>
  );
}

export default App;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
