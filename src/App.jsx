import { useState, useEffect } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("students"));
    if (saved) setStudents(saved);
    else {
      setStudents([
        { id: 1, name: "Aman", score: 78 },
        { id: 2, name: "Riya", score: 45 },
        { id: 3, name: "Karan", score: 90 },
        { id: 4, name: "Neha", score: 32 },
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (name, score) => {
    if (!name.trim() || score === "") return;

    setStudents([
      ...students,
      { id: Date.now(), name, score: Number(score) },
    ]);
  };

  const updateScore = (id, newScore) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, score: Number(newScore) } : s
      )
    );
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  const total = students.length;
  const passed = students.filter((s) => s.score >= 40).length;
  const avg =
    students.length > 0
      ? students.reduce((acc, s) => acc + s.score, 0) / students.length
      : 0;

  const maxScore =
    students.length > 0 ? Math.max(...students.map((s) => s.score)) : 0;

  return (
    <div className="container">
      <Header />

      <input
        className="search"
        placeholder="Search student..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <AddStudentForm addStudent={addStudent} />

      <div className="stats">
        <div><p>TOTAL</p><h2>{total}</h2></div>
        <div><p>PASSED</p><h2>{passed}</h2></div>
        <div><p>AVG SCORE</p><h2>{Math.round(avg)}</h2></div>
      </div>

      <StudentTable
        students={filteredStudents}
        updateScore={updateScore}
        deleteStudent={deleteStudent}
        maxScore={maxScore}
      />
    </div>
  );
}

export default App;