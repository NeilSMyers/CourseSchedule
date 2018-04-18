import React, {Component} from "react";
import {connect} from "react-redux";

class CourseLibrary extends Component {

  constructor(props) {
    super(props)

    this.renderCourse = this.renderCourse.bind(this);
  }

  renderCourse(course) {
    return (
      <li key={this.index++} className="course">
        <div className="course__info">
          <div className="course__title-contatiner">
            <div className="course__title">{course.title}</div>
          </div>
        </div>
        <div className="course__description">
          <h6 className="course__desciption-title">Course Description</h6>
          <p>{course.description}</p>
        </div>
      </li>
    )
  }

  render() {
    this.index = 0
    return (
      <ul>
        {this.props.courses.map(this.renderCourse)}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  console.log(`state: ${JSON.stringify(state.courses)}`);
  return {courses: state.courses}
}

export default connect(mapStateToProps)(CourseLibrary);