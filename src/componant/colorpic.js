import React, {useState} from "react";

function SetColor(){
  const [color, setColor] = useState("white")
  function colorChanger(value){
    document.body.style.background = value;
    setColor(value)
  }
  return(

  <main className="color-picker">
    <section className="color-card">
      <h1>Color Studio</h1>

      <p className="subtitle">
        Choose your favorite background color
      </p>

      <div
        className="color-preview"
        style={{ backgroundColor: color }}
      />

      <p className="selected-color">
        Selected Color: <span>{color}</span>
      </p>

      <div className="btn-color">
        <button onClick={() => colorChanger("red")}>Red</button>
        <button onClick={() => colorChanger("green")}>Green</button>
        <button onClick={() => colorChanger("yellow")}>Yellow</button>
        <button onClick={() => colorChanger("blue")}>Blue</button>
        <button onClick={() => colorChanger("pink")}>Pink</button>
      </div>

      <button
        className="reset-btn"
        onClick={() => colorChanger("white")}
      >
        Reset Color
      </button>
    </section>
  </main>
);
  
}

export default SetColor;