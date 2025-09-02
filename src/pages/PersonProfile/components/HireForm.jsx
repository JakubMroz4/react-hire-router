import { useState } from "react";

function HireForm({ person, handler, initialWage }) {
  const [wage, setWage] = useState(initialWage);

  function handleSubmit(event) {
    event.preventDefault();

    handler(person, wage);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={(e) => setWage(e.target.value)}
        value={wage}
      />
      {initialWage > 0 ? (
        <button type="submit">Edit</button>
      ) : (
        <button type="submit">Hire</button>
      )}
    </form>
  );
}

export default HireForm;
