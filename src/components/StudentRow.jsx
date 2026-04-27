import { useState } from "react";

function StudentRow({ student, updateScore }) {
  const [newScore, setNewScore] = useState(student.score);

  const isPass = student.score >= 40;

  return (
    <tr className="row">
      <td>{student.name}</td>

      <td className="score">{student.score}</td>

      <td>
        <span className={isPass ? "badge pass" : "badge fail"}>
          ● {isPass ? "PASS" : "FAIL"}
        </span>
      </td>

      <td>
        <input
          value={newScore}
          onChange={(e) => setNewScore(e.target.value)}
        />
        <button onClick={() => updateScore(student.id, newScore)}>
          SAVE
        </button>
      </td>
    </tr>
  );
}

export default StudentRow;