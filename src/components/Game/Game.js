import React from "react";
import { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessList from "../GuessList";
import Form from "../Form";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  function handleSubmitGuess(guess) {
    setGuesses([...guesses, guess]);
  }

  return (
    <>
      <GuessList guesses={guesses} />
      <Form handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
