import React from 'react'

function Shift() {

  return (
    <div className="layout-row justify-content-center mt-100">
      <select data-testid="select">
        <option value="" disabled>Enter shift amount</option>
      </select>
    </div>
  );
}

export default Shift