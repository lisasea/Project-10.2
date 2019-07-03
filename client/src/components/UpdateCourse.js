import React, {Component} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'; 

class UpdateCourse extends Component {
    constructor(props) {
      super(props);
      this.state = {
        course: [],
        user: [],
        title: "",       
        description: "",
        estimatedTime: "",
        materialsNeeded: "",
        erros: []
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleCancel = this.handleCancel.bind(this);
    }   

    handleSubmit = e => {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/courses/${params.id}`, { // `http://localhost:5000/api/courses/${params.id}` ??
          auth: {
              username: window.localStorage.getItem("emailAddress"), //"Email?"
              password: window.localStorage.getItem("password")
          },
          data: {
              title: this.state.title,
              description: this.state.description,
              estimatedTime: this.state.estimatedTime,
              materialsNeeded: this.state.materialsNeeded
          }
        })
          .then(alert("Course has been updated!")) 
          .then(() => {
              this.props.history.push("/");
          })
          .catch((err) => {
             console.log(err);
             this.props.history.push("/error");
          });  
      };

// This component provides the "Update Course" screen
//  rendering a form that allows a user to update one of their existing courses.
// also renders an "Update Course" button that when clicked sends a PUT request to the REST API's /api/courses/:id route. 
//  also renders a "Cancel" button that returns the user to the "Course Detail" screen.
//
//
//



