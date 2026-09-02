import React, { Component } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
      filter: "all",
      sortOrder: "none",
      lastAddedStudent: null,
    };

    console.log("App constructor");
  }

  componentDidMount() {
    console.log("App componentDidMount");

    const sampleStudents = [
      {
        id: 1,
        name: "Aarav Sharma",
        grade: 85,
      },
      {
        id: 2,
        name: "Priya Patel",
        grade: 72,
      },
      {
        id: 3,
        name: "Rahul Mehta",
        grade: 45,
      },
      {
        id: 4,
        name: "Ananya Shah",
        grade: 91,
      },
    ];

    this.setState({
      students: sampleStudents,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("App componentDidUpdate");

    if (prevState.students.length !== this.state.students.length) {
      console.log("Student list has changed.");
    }

    if (prevState.lastAddedStudent !== this.state.lastAddedStudent) {
      if (this.state.lastAddedStudent) {
        console.log(
          `New student added: ${this.state.lastAddedStudent.name}`
        );
      }
    }
  }

  componentWillUnmount() {
    console.log("App componentWillUnmount");
  }

  addStudent = (name, grade) => {
    const newStudent = {
      id: Date.now(),
      name: name.trim(),
      grade: Number(grade),
    };

    this.setState((prevState) => ({
      students: [...prevState.students, newStudent],
      lastAddedStudent: newStudent,
    }));
  };

  updateGrade = (id, newGrade) => {
    const grade = Number(newGrade);

    if (grade < 0 || grade > 100 || Number.isNaN(grade)) {
      alert("Grade must be between 0 and 100.");
      return;
    }

    this.setState((prevState) => ({
      students: prevState.students.map((student) =>
        student.id === id
          ? { ...student, grade }
          : student
      ),
    }));
  };

  removeStudent = (id) => {
    this.setState((prevState) => ({
      students: prevState.students.filter(
        (student) => student.id !== id
      ),
    }));
  };

  markPassed = (id) => {
    this.updateGrade(id, 40);
  };

  markFailed = (id) => {
    this.updateGrade(id, 39);
  };

  handleFilterChange = (filter) => {
    this.setState({ filter });
  };

  handleSortChange = (sortOrder) => {
    this.setState({ sortOrder });
  };

  getDisplayedStudents = () => {
    let students = [...this.state.students];

    if (this.state.filter === "passed") {
      students = students.filter((student) => student.grade >= 40);
    }

    if (this.state.filter === "failed") {
      students = students.filter((student) => student.grade < 40);
    }

    if (this.state.sortOrder === "high") {
      students.sort((a, b) => b.grade - a.grade);
    }

    if (this.state.sortOrder === "low") {
      students.sort((a, b) => a.grade - b.grade);
    }

    return students;
  };

  getStatistics = () => {
    const { students } = this.state;

    const total = students.length;

    const passed = students.filter(
      (student) => student.grade >= 40
    ).length;

    const failed = total - passed;

    const average =
      total > 0
        ? (
            students.reduce(
              (sum, student) => sum + student.grade,
              0
            ) / total
          ).toFixed(1)
        : "0.0";

    return {
      total,
      passed,
      failed,
      average,
    };
  };

  render() {
    const displayedStudents = this.getDisplayedStudents();
    const statistics = this.getStatistics();

    return (
      <div className="app">
        <header className="header">
          <div>
            <h1>Student Grade Tracker</h1>
            <p>Manage student grades with React Class Components</p>
          </div>
        </header>

        <main className="container">
          <section className="statistics">
            <div className="stat-card">
              <span>Total Students</span>
              <strong>{statistics.total}</strong>
            </div>

            <div className="stat-card passed-card">
              <span>Passed</span>
              <strong>{statistics.passed}</strong>
            </div>

            <div className="stat-card failed-card">
              <span>Failed</span>
              <strong>{statistics.failed}</strong>
            </div>

            <div className="stat-card average-card">
              <span>Average Grade</span>
              <strong>{statistics.average}%</strong>
            </div>
          </section>

          <StudentForm onAddStudent={this.addStudent} />

          <section className="controls">
            <div>
              <label>Filter:</label>

              <button
                className={
                  this.state.filter === "all" ? "active" : ""
                }
                onClick={() => this.handleFilterChange("all")}
              >
                All
              </button>

              <button
                className={
                  this.state.filter === "passed" ? "active" : ""
                }
                onClick={() => this.handleFilterChange("passed")}
              >
                Passed
              </button>

              <button
                className={
                  this.state.filter === "failed" ? "active" : ""
                }
                onClick={() => this.handleFilterChange("failed")}
              >
                Failed
              </button>
            </div>

            <div>
              <label>Sort:</label>

              <select
                value={this.state.sortOrder}
                onChange={(event) =>
                  this.handleSortChange(event.target.value)
                }
              >
                <option value="none">Default</option>
                <option value="high">Highest Grade</option>
                <option value="low">Lowest Grade</option>
              </select>
            </div>
          </section>

          <StudentList
            students={displayedStudents}
            onUpdateGrade={this.updateGrade}
            onRemove={this.removeStudent}
            onMarkPassed={this.markPassed}
            onMarkFailed={this.markFailed}
          />
        </main>
      </div>
    );
  }
}

export default App;
