import StudentRow from "./StudentRow";

function StudentTable({ students, updateScore, deleteStudent, maxScore }) {
  return (
    <div className="table-container">
      <div className="table-header">
        <h3>STUDENT RECORDS</h3>
        <span>{students.length} entries</span>
      </div>

      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>SCORE</th>
            <th>STATUS</th>
            <th>UPDATE</th>
            <th>ACTION</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <StudentRow
              key={s.id}
              student={s}
              updateScore={updateScore}
              deleteStudent={deleteStudent}
              maxScore={maxScore}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;