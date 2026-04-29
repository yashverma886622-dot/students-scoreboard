import { useState } from "react";

function AddStudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const numericScore = Number(score);

    if (!trimmedName) {
      return;
    }

    if (
      score === "" ||
      Number.isNaN(numericScore) ||
      numericScore < 0 ||
      numericScore > 100
    ) {
      return;
    }

    addStudent(trimmedName, numericScore);
    setName("");
    setScore("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Student name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="number"
        placeholder="Score (0-100)"
        min="0"
        max="100"
        value={score}
        onChange={(event) => setScore(event.target.value)}
      />
      <button type="submit">+ ADD</button>
    </form>
  );
}

export default AddStudentForm;
