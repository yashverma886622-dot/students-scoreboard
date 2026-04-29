import { useState, useEffect, useMemo } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";
import "./App.css";

const STORAGE_KEY = "students";
const DEFAULT_STUDENTS = [
  { id: 1, name: "Aman", score: 78 },
  { id: 2, name: "Riya", score: 45 },
  { id: 3, name: "Karan", score: 90 },
  { id: 4, name: "Neha", score: 32 },
];

function App() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setStudents(parsed);
          return;
        }
      } catch (error) {
        console.warn("Unable to load students from localStorage:", error);
      }
    }

    setStudents(DEFAULT_STUDENTS);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
  }, [students]);

  const addStudent = (name, score) => {
    const trimmedName = name.trim();
    const parsedScore = Number(score);

    if (!trimmedName || Number.isNaN(parsedScore)) return;

    setStudents((currentStudents) => [
      ...currentStudents,
      {
        id: Date.now(),
        name: trimmedName,
        score: parsedScore,
      },
    ]);
  };

  const updateScore = (id, value) => {
    const parsedScore = Number(value);
    if (Number.isNaN(parsedScore)) return;

    setStudents((currentStudents) =>
      currentStudents.map((student) =>
        student.id === id ? { ...student, score: parsedScore } : student
      )
    );
  };

  const deleteStudent = (id) => {
    setStudents((currentStudents) =>
      currentStudents.filter((student) => student.id !== id)
    );
  };

  const filteredStudents = useMemo(
    () =>
      students.filter((student) =>
        student.name.toLowerCase().includes(search.trim().toLowerCase())
      ),
    [students, search]
  );

  const stats = useMemo(() => {
    const total = students.length;
    const passed = students.filter((student) => student.score >= 40).length;
    const average =
      total > 0
        ? students.reduce((sum, student) => sum + student.score, 0) / total
        : 0;

    return {
      total,
      passed,
      average: Math.round(average),
    };
  }, [students]);

  return (
    <div className="container">
      <Header />

      <div className="search-bar">
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search students by name"
        />
      </div>

      <AddStudentForm addStudent={addStudent} />

      <div className="stats">
        <div className="stat-card">
          <span>Total Students</span>
          <strong>{stats.total}</strong>
        </div>
        <div className="stat-card">
          <span>Passed Students</span>
          <strong>{stats.passed}</strong>
        </div>
        <div className="stat-card">
          <span>Average Score</span>
          <strong>{stats.average}</strong>
        </div>
      </div>

      <StudentTable
        students={filteredStudents}
        updateScore={updateScore}
        deleteStudent={deleteStudent}
      />
    </div>
  );
}

export default App;
