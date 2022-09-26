import React, { useState } from "react";

function Usestate() {
  const getApidata = () => {
    console.log("api data is available");
    return 100;
  };

  const [item, setItem] = useState(() => getApidata());

  console.log(item);
  const handleAdd = () => {
    setItem(item + 1);
  };

  const handelRemove = () => {
    if (item > 0) {
      setItem(item - 1);
    }
  };

  const handelMany = () => {
    setItem((perstate) => perstate + 1);
    setItem((perstate) => perstate + 1);
    setItem((perstate) => perstate + 1);
    setItem((perstate) => perstate + 1);
    setItem((perstate) => perstate + 1);
  };

  const handelClear = () => {
    setItem(0);
  };

  console.log("component is rendering");
  return (
    <div>
      <div>
        <img
          src="https://w7.pngwing.com/pngs/87/38/png-transparent-teddy-bear-plush-drawing-coloring-book-bear-white-child-animals-thumbnail.png"
          style={{ width: "50%", height: "100%", background: "red" }}
        />
        <br />
        <p>count of items {item}</p>
        <button onClick={handleAdd}>+</button>&nbsp;
        <button onClick={handelRemove}>-</button>&nbsp;
        <button onClick={handelMany}>add 5 items</button>&nbsp;
        <button onClick={handelClear}>Clear</button>&nbsp;
      </div>
    </div>
  );
}

export default Usestate;
