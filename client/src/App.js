import React from "react";
//import logo from "./logo.svg";
//import "./App.css";
import axios from "axios";

// import components
import Courses from "./components/Courses";

// below code adapted from https://alligator.io/react/axios-react/
export default class CoursesList extends React.Component {
  state = {
    isLoading: true,
    courses: []
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/courses`)
      .then(res => {
        const courses = res.data;
        this.setState({ courses });
      })
  }

  render() {
    return (
      <ul>
        { this.state.courses.map(course => <li>{course.title}</li>)}
      </ul>
    ) }
}