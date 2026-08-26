import React, { Component } from "react";
import StudentItem from "./StudentItem";

class StudentList extends Component {
  componentDidMount() {
    console.log("StudentList componentDidMount");
  }

  componentDidUpdate() {
    console.log("StudentList componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("StudentList componentWillUnmount");
  }

  render() {
    const {
      students,
      onUpdateGrade,
      onRemove,
      onMarkPassed,
      onMarkFailed,
    } = this.props;

    return (
      <section className="students-section">
        <div className="section-heading">
          <h2>Students</h2>
          <span>{students.length} student(s)</span>
        </div>

        {students.length === 0 ? (
          <div className="empty-state">
            <p>No students found.</p>
            <span>Try changing the filter or add a new student.</span>
          </div>
        ) : (
          <div className="student-list">
            {students.map((student) => (
              <StudentItem
                key={student.id}
                student={student}
                onUpdateGrade={onUpdateGrade}
                onRemove={onRemove}
                onMarkPassed={onMarkPassed}
                onMarkFailed={onMarkFailed}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default StudentList;
