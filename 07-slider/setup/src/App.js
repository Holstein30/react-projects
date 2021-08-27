import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [index, setIndex] = useState(0);
  const { id, image, name, title, quote } = data[index];

  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const previousPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randNumber = Math.floor(Math.random() * data.length);
    if (randNumber === index) {
      let randNumber = index + 1;
    }
    setIndex(checkNumber(randNumber));
  };
  return (
    <main>
      <button onClick={nextPerson}>
        <FiChevronRight />
      </button>
      <div>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <h3>{title}</h3>
        <p>{quote}</p>
      </div>
      <button onClick={previousPerson}>
        <FiChevronLeft />
      </button>
      <FaQuoteRight />
    </main>
  );
}

export default App;
