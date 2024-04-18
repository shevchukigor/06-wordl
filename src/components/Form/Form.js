import React from "react";
import { useState } from "react";

function Form({ handleSubmitGuess }) {
  const [guessInput, setGuessInput] = useState("");
  function handleSubmit(event) {
    event.preventDefault();

    handleSubmitGuess(guessInput);

    setGuessInput(() => "");
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={(event) =>
          setGuessInput(() => event.target.value.toUpperCase())
        }
        value={guessInput}
      />
    </form>
  );
}

export default Form;
