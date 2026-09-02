import React, { Component } from "react";

class StudentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      grade: "",
      error: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
      error: "",
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const name = this.state.name.trim();
    const grade = Number(this.state.grade);

    if (!name) {
      this.setState({
        error: "Please enter student name.",
      });
      return;
    }

    if (
      this.state.grade === "" ||
      Number.isNaN(grade) ||
      grade < 0 ||
      grade > 100
    ) {
      this.setState({
        error: "Grade must be between 0 and 100.",
      });
      return;
    }

    this.props.onAddStudent(name, grade);

    this.setState({
      name: "",
      grade: "",
      error: "",
    });
  };

  render() {
    return (
      <section className="form-card">
        <h2>Add New Student</h2>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Student Name</label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter student name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="grade">Grade</label>

            <input
              id="grade"
              name="grade"
              type="number"
              min="0"
              max="100"
              placeholder="0 - 100"
              value={this.state.grade}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="add-button">
            Add Student
          </button>
        </form>

        {this.state.error && (
          <p className="error-message">{this.state.error}</p>
        )}
      </section>
    );
  }
}

export default StudentForm;
