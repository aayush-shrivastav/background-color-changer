import React, { useEffect, useState } from "react";

function SetColor() {
  const [color, setColor] = useState("white")
  useEffect(() => {
    document.body.style.background = color;
  }, [color])
  return (

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
          <button onClick={() => setColor("red")}>Red</button>
          <button onClick={() => setColor("green")}>Green</button>
          <button onClick={() => setColor("yellow")}>Yellow</button>
          <button onClick={() => setColor("blue")}>Blue</button>
          <button onClick={() => setColor("pink")}>Pink</button>
        </div>

        <button
          className="reset-btn"
          onClick={setColor("white")}
        >
          Reset Color
        </button>
      </section>
    </main>
  );

}

export default SetColor;