import React from "react";
import { useState } from "react";

function Counter() {
  let count = 0;
  const [currentCount, setCount] = useState(count);
  const countIncrement = () => {
    setCount(currentCount + 1);
  };
  const countDecrement = () => {
    setCount(currentCount - 1);
  };
  return (
    <>
      <div className="p-3">
        <h1 className="text-2xl mt-10 font-bold text-center">
          Simple Counter using React useState hook
        </h1>
        <div>
          <h3 className="font-semibold text-center mt-30 text-5xl">Count :</h3>
          <h3 className="font-semibold text-center mt-10 text-5xl">
            {currentCount}
          </h3>

          <div id="button-container" className="flex justify-center">
            <button
              onClick={countIncrement}
              className="m-10 bg-green-500 rounded-2xl p-3 flex justify-center items-center active:bg-green-600 cursor-pointer active:text-white"
            >
              Increase
            </button>
            <button
              onClick={countDecrement}
              className="m-10 bg-red-500 rounded-2xl p-3 flex justify-center items-center active:bg-red-600 cursor-pointer active:text-white"
            >
              Decrease
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
