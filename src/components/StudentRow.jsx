import { useState } from "react";

function StudentRow({ student, updateScore, deleteStudent }) {
  const [newScore, setNewScore] = useState(student.score);
  const isPass = student.score >= 40;

  return (
    <tr>
      <td className="name">{student.name}</td>
      <td className="score">{student.score}</td>
      <td>
        <span className={isPass ? "pass" : "fail"}>
          ● {isPass ? "PASS" : "FAIL"}
        </span>
      </td>
      <td className="update">
        <input
          type="number"
          min="0"
          max="100"
          value={newScore}
          onChange={(event) => setNewScore(event.target.value)}
        />
        <button onClick={() => updateScore(student.id, newScore)}>
          SAVE
        </button>
      </td>
      <td>
        <button onClick={() => deleteStudent(student.id)}>DELETE</button>
      </td>
    </tr>
  );
}

export default StudentRow;
