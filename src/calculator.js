import React, { useState } from "react";
import "./styles.css";

function Calculator() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (result && value.match(/[0-9]/)) {
      setExpression(value);
      setResult("");
    } else {
      setExpression((prev) => prev + value);
    }
  };

  const handleClear = () => {
    setExpression("");
    setResult("");
  };

  const handleEqual = () => {
    try {
      if (expression.trim() === "") {
        setResult("Error");
      } else {
        // eslint-disable-next-line no-eval
        const evalResult = eval(expression);
        setResult(String(evalResult));
      }
    } catch (e) {
      setResult("Error");
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", "C", "=", "+"
  ];

  return (
    <div className="calculator">
      <input type="text" value={expression} readOnly />
      <div className="buttons">
        {buttons.map((btn, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (btn === "=") handleEqual();
              else if (btn === "C") handleClear();
              else handleClick(btn);
            }}
          >
            {btn}
          </button>
        ))}
      </div>
      <div className="result">{result}</div>
    </div>
  );
}
export default Calculator;
