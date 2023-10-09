import React, { useState, useRef, useEffect } from "react";
import { Ciphertext, Plaintext, Shift } from "./components";
import "./App.css";
import "h8k-components";

const title = "Caesar's Cipher";

function App() {
  const [plainText, setPlainText] = useState("");
  const [cipherText, setCipherText] = useState("");
  const [shiftSelect, setShiftSelect] = useState("");
  const [textFlag, setTextFlag] = useState("");

  const plainTextRef = useRef();
  const cipherTextRef = useRef();

  // useEffect(() => {
  //   setCipherText(encryptText(plainText, shiftSelect));
  // }, [plainText]);

  // useEffect(() => {
  //   setPlainText(decryptText(cipherText, shiftSelect));
  // }, [cipherText]);

  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <Shift shiftSelect={shiftSelect} setShiftSelect={setShiftSelect} />
      <div className="layout-row justify-content-center mt-40">
        <Plaintext
          setPlainText={setPlainText}
          plainText={plainText}
          setCipherText={setCipherText}
          shiftSelect={shiftSelect}
        />
        <Ciphertext
          cipherText={cipherText}
          setCipherText={setCipherText}
          setPlainText={setPlainText}
          shiftSelect={shiftSelect}
        />
      </div>
    </div>
  );
}

export default App;
