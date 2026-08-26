import React, { Component } from "react";

class StudentItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      grade: props.student.grade,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.student.grade !== this.props.student.grade) {
      this.setState({
        grade: this.props.student.grade,
      });
    }
  }

  handleGradeChange = (event) => {
    this.setState({
      grade: event.target.value,
    });
  };

  handleSaveGrade = () => {
    const grade = Number(this.state.grade);

    if (grade < 0 || grade > 100 || Number.isNaN(grade)) {
      alert("Grade must be between 0 and 100.");
      return;
    }

    this.props.onUpdateGrade(
      this.props.student.id,
      grade
    );

    this.setState({
      editing: false,
    });
  };

  handleCancel = () => {
    this.setState({
      editing: false,
      grade: this.props.student.grade,
    });
  };

  render() {
    const { student } = this.props;

    const passed = student.grade >= 40;

    return (
      <article
        className={`student-item ${
          passed ? "student-passed" : "student-failed"
        }`}
      >
        <div className="student-info">
          <div className="student-avatar">
            {student.name.charAt(0).toUpperCase()}
          </div>

          <div>
            <h3>{student.name}</h3>

            <span
              className={`status ${
                passed ? "status-passed" : "status-failed"
              }`}
            >
              {passed ? "Passed" : "Failed"}
            </span>
          </div>
        </div>

        <div className="grade-section">
          {this.state.editing ? (
            <div className="edit-grade">
              <input
                type="number"
                min="0"
                max="100"
                value={this.state.grade}
                onChange={this.handleGradeChange}
              />

              <button onClick={this.handleSaveGrade}>
                Save
              </button>

              <button onClick={this.handleCancel}>
                Cancel
              </button>
            </div>
          ) : (
            <>
              <div className="grade">
                <strong>{student.grade}</strong>
                <span>/100</span>
              </div>

              <button
                className="edit-button"
                onClick={() =>
                  this.setState({ editing: true })
                }
              >
                Edit
              </button>
            </>
          )}
        </div>

        <div className="actions">
          <button
            className="pass-button"
            onClick={() =>
              this.props.onMarkPassed(student.id)
            }
          >
            Pass
          </button>

          <button
            className="fail-button"
            onClick={() =>
              this.props.onMarkFailed(student.id)
            }
          >
            Fail
          </button>

          <button
            className="delete-button"
            onClick={() =>
              this.props.onRemove(student.id)
            }
          >
            Delete
          </button>
        </div>
      </article>
    );
  }
}

export default StudentItem;
