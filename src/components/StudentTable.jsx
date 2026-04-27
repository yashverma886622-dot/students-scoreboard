import StudentRow from "./StudentRow";

function StudentTable({ students, updateScore }) {
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
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <StudentRow
              key={s.id}
              student={s}
              updateScore={updateScore}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;