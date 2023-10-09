import React, { useState } from "react";

function Shift({ shiftSelect, setShiftSelect }) {
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const selectOption = options.map((e) => {
    return (
      <option key={e} value={e}>
        {e}
      </option>
    );
  });

  return (
    <div className="layout-row justify-content-center mt-100">
      <select
        data-testid="select"
        onChange={(e) => setShiftSelect(e.target.value)}
      >
        <option value="" disabled>
          Enter shift amount
        </option>
        {selectOption}
      </select>
    </div>
  );
}

export default Shift;
