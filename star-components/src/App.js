import React from "react";
import Star from "./Star";
import Rating from "./Rating";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h2>Star Components:</h2>
      <Star color="pink" isFilled />
      <Star color="magenta" />
      <Star color="indigo" isFilled />
      <h2>Rating Component (uses Stars):</h2>
      <Rating stars={4} />
    </div>
  );
}
