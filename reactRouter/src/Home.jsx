import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigateTo = useNavigate();

  const navigate = () => {
    navigateTo("/about");
  };
  return (
    <>
      <h1>This is Home Page</h1>
      <button onClick={navigate}>About Page</button>
    </>
  );
}

export default Home;
