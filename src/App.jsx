import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx";
import Modal from "./components/Modal.jsx";
import { useState } from "react";
import { useRef } from "react";
function App() {
  const mod = useRef();
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid = userInput.duration;
  function handleChange(inputIdentifier, newValue) {
    if (newValue === 1) {
      mod.current.open();
      return;
    }
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Modal ref={mod}>
        <h2>Successfullyy implemented dialog box</h2>
        <p>Just refreshhh..!!!</p>
      </Modal>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputIsValid && (
        <p className="center">Please input a duration greater than zero </p>
      )}
      {inputIsValid && <Results Input={userInput} />}
    </>
  );
}

export default App;
