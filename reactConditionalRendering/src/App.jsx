import { useState } from "react";

import Toggle from "./Toggle.jsx";

function App() {
  const [toggle, setToggle] = useState(false);
  const togglePage = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <button onClick={togglePage}>Toggle</button>
      {toggle && <Toggle />}
    </>
  );
}

export default App;
