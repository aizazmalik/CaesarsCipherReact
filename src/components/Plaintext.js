import React, { useEffect, useState } from "react";

function Plaintext({ setPlainText, plainText, setCipherText, shiftSelect }) {
  const encryptText = (plainText, shift) => {
    let cipherArr = [];
    let cipherLetter;

    plainText.split("").map((letter) => {
      let code = letter.charCodeAt(letter);
      if (letter === " ") {
        return cipherArr.push(letter);
      }
      // Uppercase letters
      if (code >= 65 && code <= 90) {
        cipherLetter = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      }
      // Lowercase letters
      else if (code >= 97 && code <= 122) {
        cipherLetter = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
      return cipherArr.push(cipherLetter);
    });
    return cipherArr.join("");
  };

  return (
    <div className="card w-18 mr-20">
      <h3 className="card-text text-center my-0 py-20">Plaintext</h3>
      <textarea
        name="plaintext"
        rows={6}
        cols={30}
        placeholder="Enter Plaintext"
        className="mx-25 mb-25"
        data-testid="plain-text"
        value={plainText}
        onChange={(e) => {
          setPlainText(e.target.value);
          setCipherText(encryptText(e.target.value, shiftSelect));
        }}
      />
    </div>
  );
}

export default Plaintext;
