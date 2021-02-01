import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../../App.css";

const Intro = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      });
  };
  return (
    <div className="introContainer">
      <div className="quote-side">
        <p>{quote}</p>
        <i>{author}</i>
      </div>
      <div className="welcome-side">
        <div className="inner-title-intro">
          <h1 className="title-intro">
            <span>Welcome</span>
            <br />
            To <br />
            Chin Chin Gastronomy
          </h1>
          <Link to="/home" className="enter-button">
            Enter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
