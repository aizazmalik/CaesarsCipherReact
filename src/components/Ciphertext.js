import React, { useEffect } from "react";

function Ciphertext({ cipherText, setCipherText, setPlainText, shiftSelect }) {
  const decryptText = (cipherText, shift) => {
    let plainArr = [];
    let plainLetter;

    cipherText.split("").map((cipher) => {
      let code = cipher.charCodeAt(cipher);
      if (cipher === " ") {
        return plainArr.push(cipher);
      }
      // Uppercase letters
      if (code >= 65 && code <= 90) {
        let diff = code - 65 - shift;
        if (diff >= 0) {
          plainLetter = String.fromCharCode((diff % 26) + 65);
        } else {
          plainLetter = String.fromCharCode(((26 + diff) % 26) + 65);
        }
      }
      // Lowercase letters
      else if (code >= 97 && code <= 122) {
        let diff = code - 97 - shift;
        if (diff >= 0) {
          plainLetter = String.fromCharCode((diff % 26) + 97);
        } else {
          plainLetter = String.fromCharCode(((26 + diff) % 26) + 97);
        }
      }
      return plainArr.push(plainLetter);
    });
    return plainArr.join("");
  };

  return (
    <div className="card w-18 ml-20">
      <h3 className="card-text text-center my-0 py-20">Ciphertext</h3>
      <textarea
        name="ciphertext"
        rows={6}
        cols={30}
        placeholder="Enter Ciphertext"
        className="mx-25 mb-25"
        data-testid="cipher-text"
        value={cipherText}
        onChange={(e) => {
          setCipherText(e.target.value);
          setPlainText(decryptText(e.target.value, shiftSelect));
        }}
      />
    </div>
  );
}

export default Ciphertext;
