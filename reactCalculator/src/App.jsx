import React from "react";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("");
  const takeInput = (event) => {
    setResult(result.concat(event.target.value));
  };

  const clearInput = () => {
    setResult("");
  };

  const calculate = () => {
    setResult(eval(result));
  };
  return (
    <>
      <h1 className="button-center button-2xl m-2 text-center">
        Calculator using React, Vite and Tailwind
      </h1>
      <div
        id="calculator"
        className="w-[30%] bg-gray-200 mt-1 m-auto flex flex-wrap p-5 gap-0.5"
      >
        <input
          type="button"
          placeholder="0"
          className="w-full h-fit p-3 mb-3 bg-gray-100 text-end font-bold text-black border-black border-2"
          value={result}
        />
        <div id="buttons" className="flex flex-wrap">
          <input
            type="button"
            value="1"
            onClick={takeInput}
            className="w-[50%] p-3  border-black border-2 rounded-lg"
          />
          <input
            type="button"
            value="2"
            onClick={takeInput}
            className="w-[50%] p-3  border-black border-2 rounded-lg"
          />
          <input
            type="button"
            value="3"
            onClick={takeInput}
            className="w-[50%] p-3  border-black border-2 rounded-lg"
          />
          <input
            type="button"
            value="4"
            onClick={takeInput}
            className="w-[50%] p-3  border-black border-2 rounded-lg"
          />
          <input
            type="button"
            value="5"
            onClick={takeInput}
            className="w-[50%] p-3  border-black border-2 rounded-lg"
          />
          <input
            type="button"
            value="6"
            onClick={takeInput}
            className="w-[50%] p-3  border-black border-2 rounded-lg"
          />
          <input
            type="button"
            value="7"
            onClick={takeInput}
            className="w-[50%] p-3  border-black border-2 rounded-lg"
          />
          <input
            type="button"
            value="8"
            onClick={takeInput}
            className="w-[50%] p-3  border-black border-2 rounded-lg"
          />
          <input
            type="button"
            value="9"
            onClick={takeInput}
            className="w-[50%] p-3  border-black border-2 rounded-lg"
          />
          <input
            type="button"
            value="0"
            onClick={takeInput}
            className="w-[50%] p-3  border-black border-2 rounded-lg"
          />
          <input
            type="button"
            value="+"
            onClick={takeInput}
            className="w-[50%] p-3  border-black border-2 rounded-lg"
          />
          <input
            type="button"
            value="-"
            onClick={takeInput}
            className="w-[50%] p-3  border-black border-2 rounded-lg"
          />
          <input
            type="button"
            value="*"
            onClick={takeInput}
            className="w-[50%] p-3  border-black border-2 rounded-lg"
          />
          <input
            type="button"
            value="/"
            onClick={takeInput}
            className="w-[50%] p-3  border-black border-2 rounded-lg"
          />
          <input
            type="button"
            value="="
            onClick={calculate}
            className="w-[50%] p-3  border-black border-2 rounded-lg"
          />
          <input
            type="button"
            value="."
            onClick={takeInput}
            className="w-[50%] p-3  border-black border-2 rounded-lg"
          />
          <input
            type="button"
            value="Clear"
            className=" border-black border-2 rounded-lg w-full mt-3 active:bg-white"
            onClick={clearInput}
          />
        </div>
      </div>
    </>
  );
}

export default App;
