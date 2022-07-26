import React, { useState } from "react";

const ComparisonPage = () => {
  const [result, setResult] = useState(0);
  const [result2, setResult2] = useState(0);
  const [resultAnnouncement, setResultAnnouncement] = useState("")

  const [priceInput, setPriceInput] = useState(0);
  const [priceInput2, setPriceInput2] = useState(0);
  const [sizeInput, setSizeInput] = useState(0);
  const [sizeInput2, setSizeInput2] = useState(0);

  const priceInputHandler = (e) => {
    setPriceInput(e.target.valueAsNumber);
  };
  const priceInput2Handler = (e) => {
    setPriceInput2(e.target.valueAsNumber);
  };
  const sizeInputHandler = (e) => {
    setSizeInput(e.target.valueAsNumber);
  };
  const sizeInput2Handler = (e) => {
    setSizeInput2(e.target.valueAsNumber);
  };

  const getResults = (e) => {
    setResult(`${(priceInput / ((sizeInput / 2) ** 2 * Math.PI)).toFixed(2)} Ft/cm²`);
    setResult2(`${(priceInput2 / ((sizeInput2 / 2) ** 2 * Math.PI)).toFixed(2)} Ft/cm²`);
    setResultAnnouncement(setResult < setResult2 ? "Az első pizza jobban megéri" : "A második pizza jobban megéri")
  };

  return (
    <div className="comparePage">
      <div className="pizzaOneAndTwo">
        <div className="pizzaOne">
          <h3>Pizza 1</h3>
          <h4>Ár (Ft)</h4>
          <input
            value={priceInput}
            onChange={priceInputHandler}
            type="number"
          />
          <h4>Méret (cm)</h4>
          <input value={sizeInput} onChange={sizeInputHandler} type="number" />
        </div>
        <div className="pizzaTwo">
          <h3>Pizza 2</h3>
          <h4>Ár (Ft)</h4>
          <input
            value={priceInput2}
            onChange={priceInput2Handler}
            type="number"
          />
          <h4>Méret (cm)</h4>
          <input
            value={sizeInput2}
            onChange={sizeInput2Handler}
            type="number"
          />
        </div>
      </div>
      <div className="compareBtn">
        <button onClick={getResults}>Összehasonlítás</button>
        <h4>{resultAnnouncement}</h4>
      </div>
      <div className="results">
        <h4>{result}</h4>
        <h4>{result2}</h4>
      </div>
    </div>
  );
};

export default ComparisonPage;
