import { useState } from "react";
import "./App.css";

export default function App() {
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);

  const secretWord = "CASAL";

  const won = guesses.includes(secretWord);

  const lost = guesses.length === 6 && !won;


  function handleSubmit() {
    if (won || lost) return;

    if (guesses.length >= 6) return;

    if (guess.length !== 5) {
      alert("Digite uma palavra com 5 letras");
      return;
    }

    setGuesses([
      ...guesses,
      guess.toUpperCase()
    ]);

    setGuess("");
  }


  return (
    <div>
      <h1>Meu Termo</h1>

      <input
        value={guess}
        maxLength={5}
        onChange={(e) => setGuess(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Enviar
      </button>

      {won && (
        <h2 style={{ color: "green" }}>
          Você venceu! 🎉
        </h2>
      )}

      {lost && (
        <h2 style={{ color: "red" }}>
          Você perdeu. A palavra era {secretWord}
        </h2>
      )}


      {Array.from({ length: 6 }).map((_, index) => {
        const word = guesses[index];

        return (
          <Row
            key={index}
            word={word}
            secretWord={secretWord}
          />
        );
      })}

    </div>
  );
} 



function getLetterStatus(letter, index, secretWord) {
  if (secretWord[index] === letter) {
    return "correct";
  }

  if (secretWord.includes(letter)) {
    return "present";
  }

  return "absent";
}





function Row({ word = "", secretWord }) {
  return (
    <div className="row">
      {word.split("").map((letter, index) => {
        const status = getLetterStatus(
          letter,
          index,
          secretWord
        );

        return (
          <span key={index} className={status}>
            {letter}
          </span>
        );
      })}

      {/* preencher células vazias */}
      {word.length < 5 &&
        Array.from({ length: 5 - word.length }).map((_, i) => (
          <span key={i}>□</span>
        ))}
    </div>
  );
}
