import { useState } from "react";

function StudentRow({ student, updateScore, deleteStudent, maxScore }) {
  const [newScore, setNewScore] = useState(student.score);

  const isPass = student.score >= 40;
  const isTopper = student.score === maxScore;

  return (
    <tr className={`row ${isTopper ? "topper" : ""}`}>
      <td className="name">{student.name}</td>

      <td className="score">{student.score}</td>

      <td>
        <span className={isPass ? "badge pass" : "badge fail"}>
          ● {isPass ? "PASS" : "FAIL"}
        </span>
      </td>

      <td className="update">
        <input
          value={newScore}
          onChange={(e) => setNewScore(e.target.value)}
        />
        <button onClick={() => updateScore(student.id, newScore)}>
          SAVE
        </button>
      </td>

      <td>
        <button onClick={() => deleteStudent(student.id)}>
          DELETE
        </button>
      </td>
    </tr>
  );
}

export default StudentRow;