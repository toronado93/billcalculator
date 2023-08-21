import { useState } from "react";
import "./App.css";

function App() {
  // State
  let [amount, setAmount] = useState(0);
  let [tips1, setTips1] = useState(0);
  let [tips2, setTips2] = useState(0);

  // Handler
  function billHandle(amount) {
    setAmount(amount);
  }

  function tipHandle1(tips) {
    setTips1(tips);
  }

  function tipHandle2(tips) {
    setTips2(tips);
  }

  // Derive State

  const totaltip = Number(tips1) + Number(tips2);

  function clearHandle() {
    setAmount(0);
    setTips1(0);
    setTips2(0);
  }

  return (
    <div className="container">
      <Bill amount={amount} handleData={billHandle}></Bill>
      <Service handleTip={tipHandle1}>How did you like the service?</Service>
      <Service handleTip={tipHandle2}>
        How did your friend like the service?
      </Service>

      <p>
        You pay <span>£{Number(amount) + Number(amount * totaltip)}</span>{" "}
        <span>
          (£{amount}+ £{amount * totaltip} tip)
        </span>
      </p>

      <button
        onClick={() => {
          clearHandle();
        }}
        className="btn"
      >
        Clear
      </button>
    </div>
  );
}

function Bill(props) {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>How much was the bill?</p>
        <input
          value={props.amount}
          onChange={(e) => props.handleData(e.target.value)}
          type="number"
        ></input>
      </div>
    </>
  );
}

function Service(props) {
  return (
    <>
      {props.children}
      <select
        onChange={(e) => {
          props.handleTip(e.target.value);
        }}
      >
        <option value={0.1}>It was good(%10)</option>
        <option value={0.25}>Awesome(%25)</option>
        <option selected value={0}>
          It wasnt impressive at all (0%)
        </option>
      </select>
    </>
  );
}

export default App;
