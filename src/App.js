import React from 'react'
import { Ciphertext, Plaintext, Shift } from './components'
import './App.css'
import 'h8k-components'

const title = "Caesar's Cipher";

function App() {

  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <Shift />
      <div className="layout-row justify-content-center mt-40">
        <Plaintext />
        <Ciphertext /> 
      </div> 
    </div>
  )
}

export default App