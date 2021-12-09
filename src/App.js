import React, { useState } from "react";
import "./styles.css";
var youtuberDictionary = {
  Technology: [
    { name: "Unbox Therapy", ratings: "9.5/10" },
    { name: "Technical Guruji", ratings: "9/10" },
    { name: "Geeky Ranjit", ratings: "7/10" }
  ],
  Programming: [
    { name: "TanayPratap", ratings: "9/10" },
    { name: "Clever Programmer", ratings: "8/10" },
    { name: "CodeWithHarry", ratings: "8.5/10" }
  ],
  Travel: [
    { name: "Flying Beast", ratings: "9/10" },
    { name: "Sourav Joshi Vlogs", ratings: "9/10" },
    { name: "Tech Burner vlogs", ratings: "8/10" }
  ]
};

export default function App() {
  var [genre, setMyfav] = useState("Programming");

  function genreClickHandler(genre) {
    setMyfav(genre);
  }

  return (
    <div className="App">
      <header className="head"> Youtubers & Influencers </header>
      <p style={{ fontSize: "medium" }}>
        Choose a genre and get started.
      </p>
      <div>
        {Object.keys(youtuberDictionary).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              padding: "0.5rem 1 rem",
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
        <hr />
      </div>
      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {youtuberDictionary[genre].map((youtuber) => (
            <li
              key={youtuber.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid black",
                width: "50%",
                
                textAlign: "center",
                margin: "1rem auto",
                borderRadius: "0.5rem",
                backgroundColor: "#E5E7EB"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {youtuber.name} </div>
              <div style={{ fontSize: "smaller" }}> {youtuber.ratings} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

