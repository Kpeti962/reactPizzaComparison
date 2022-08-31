import React, { useState } from "react";
import { motion } from "framer-motion";

const ComparisonPage = () => {
  const [result, setResult] = useState();
  const [result2, setResult2] = useState();
  const [resultAnnouncement, setResultAnnouncement] = useState([]);

  const [priceInput, setPriceInput] = useState("");
  const [priceInput2, setPriceInput2] = useState("");
  const [sizeInput, setSizeInput] = useState("");
  const [sizeInput2, setSizeInput2] = useState("");

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
    e.preventDefault();

    if (priceInput > 0 && priceInput2 > 0 && sizeInput > 0 && sizeInput2 > 0) {
      setResult(
        `${(priceInput / ((sizeInput / 2) ** 2 * Math.PI)).toFixed(2)} Ft/cm²`
      );
      setResult2(
        `${(priceInput2 / ((sizeInput2 / 2) ** 2 * Math.PI)).toFixed(2)} Ft/cm²`
      );
      Number((priceInput / ((sizeInput / 2) ** 2 * Math.PI)).toFixed(2)) <
      Number((priceInput2 / ((sizeInput2 / 2) ** 2 * Math.PI)).toFixed(2))
        ? setResultAnnouncement("Az első pizza jobban megéri")
        : setResultAnnouncement("A második pizza jobban megéri");
      document.getElementById("announcement").classList.remove("hidden");
      document.querySelector(".results").classList.remove("hidden");
      if (setResult === setResult2) {
        setResultAnnouncement("Ugyanannyiba kerül mindkét pizza");
      }
    } else {
      setResult("");
      setResult2("");
      setResultAnnouncement("Nincs eredmény");
      alert("Minden mezőbe pozitív értéket írj!");
    }
  };

  const resetHandler = () => {
    setPriceInput("");
    setPriceInput2("");
    setSizeInput("");
    setSizeInput2("");
    setResult("");
    setResult2("");
    setResultAnnouncement("");
  };

  return (
    <div className="comparePage">
      <div className="pizzaOneAndTwo">
        <div className="pizzaOne">
          <h3>Pizza 1</h3>
          <h4>Ár (Ft)</h4>
          <motion.input
            animate={{
              boxShadow: `0 0 0 5px #FF0000, 0 0 0 4px #FFFFFF`,
               borderRadius: "20px",
            }}
            whileFocus={{
              boxShadow: `0 0 0 10px #FFFFFF, 0 0 0 8px #FFFFFF`,
              transition: {
                boxShadow: {
                  duration: 0.3,
                  from: `0 0 0 5px #FFFFFF, 0 0 0 4px #FFFFFF`,
                },
              },
            }}
            value={priceInput}
            onChange={priceInputHandler}
            type="number"
          />
          <h4>Méret (cm)</h4>
          <motion.input
            animate={{
              boxShadow: `0 0 0 5px #FF0000, 0 0 0 4px #FFFFFF`,
              borderRadius: "20px",
            }}
            whileFocus={{
              boxShadow: `0 0 0 10px #FFFFFF, 0 0 0 8px #FFFFFF`,
              transition: {
                boxShadow: {
                  duration: 0.3,
                  from: `0 0 0 5px #FFFFFF, 0 0 0 4px #FFFFFF`,
                },
              },
            }}
            value={sizeInput}
            onChange={sizeInputHandler}
            type="number"
          />
        </div>
        <div className="pizzaTwo">
          <h3>Pizza 2</h3>
          <h4>Ár (Ft)</h4>
          <motion.input
            animate={{
              boxShadow: `0 0 0 5px #007F00, 0 0 0 4px #FFFFFF`,
              borderRadius: "20px",
            }}
            whileFocus={{
              boxShadow: `0 0 0 10px #FFFFFF, 0 0 0 8px #FFFFFF`,
              transition: {
                boxShadow: {
                  duration: 0.3,
                  from: `0 0 0 5px #FFFFFF, 0 0 0 4px #FFFFFF`,
                },
              },
            }}
            value={priceInput2}
            onChange={priceInput2Handler}
            type="number"
          />
          <h4>Méret (cm)</h4>
          <motion.input
            animate={{
              boxShadow: `0 0 0 5px #007F00, 0 0 0 4px #FFFFFF`,
              borderRadius: "20px",
            }}
            whileFocus={{
              boxShadow: `0 0 0 10px #FFFFFF, 0 0 0 8px #FFFFFF`,
              transition: {
                boxShadow: {
                  duration: 0.3,
                  from: `0 0 0 5px #FFFFFF, 0 0 0 4px #FFFFFF`,
                },
              },
            }}
            value={sizeInput2}
            onChange={sizeInput2Handler}
            type="number"
          />
        </div>
      </div>
      <div className="compareBtn">
        <button onClick={getResults}>Összehasonlítás</button>
        <button onClick={resetHandler}>Lenulláz</button>
        <h4 id="announcement">{resultAnnouncement}</h4>
      </div>
      <div className="results">
        <h4>{result}</h4>
        <h4>{result2}</h4>
      </div>
    </div>
  );
};

export default ComparisonPage;
