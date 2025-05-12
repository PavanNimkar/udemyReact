import React, { useEffect, useState } from "react";
import axios from "axios";
function Pokemon() {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [moves, setMoves] = useState();
  useEffect(() => {
    async function getData() {
      const response = await axios.get(`api`);
      console.log(response);
      setMoves(response.data.moves.length);
      setName(response.data.name);
    }
    getData();
  });
  return (
    <>
      <h1>Pokemon</h1>
      <p>You have choosen {name}</p>
      <p>I have {moves} moves</p>
      <select
        name=""
        id=""
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </>
  );
}

export default Pokemon;
