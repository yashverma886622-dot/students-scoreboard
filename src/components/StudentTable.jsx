import StudentRow from "./StudentRow";

function StudentTable({ students, updateScore, deleteStudent }) {
  return (
    <section className="student-table">
      <div className="table-header">
        <h2>Student Scores</h2>
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
          {students.map((student) => (
            <StudentRow
              key={student.id}
              student={student}
              updateScore={updateScore}
              deleteStudent={deleteStudent}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default StudentTable;
