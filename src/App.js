import React, { useState } from "react";
import SingleColor from "./SingleColor";
import "bootstrap/dist/css/bootstrap.min.css";

import Values from "values.js";

function App() {
  const [colorText, setColorText] = useState();
  const [error, setError] = useState();
  const [list, setList] = useState(new Values("#f34000").all(10));
  // console.log(list);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(colorText).all(10);
      setList(colors);
      if(!colorText){
        setError(true)
        alert("Please enter a color")
      }
    } catch (error) {
      setError(true);
      alert("Please enter a valid color")
      // console.log(error);
    }
  };
  console.log(error);
  console.log(new Values().all(10));
  
  // ${error} ? "error" : null
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center gap-3 my-2">
        <h2>Color Generator</h2>
        <form onSubmit={handleSubmit} className="d-flex">
          <input
            type="text"
            className={`${error ? "error" : null}`}
            value={colorText}
            onChange={(e) => {setColorText(e.target.value); setError(false)}}
            placeholder="#f34000"
          />
          <button type="submit" className="btn bg-primary p-1">
            Submit
          </button>
        </form>
      </div>
      <div className="d-flex flex-wrap container-fluid">
        {list?.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
