import React, {Component} from "react";
import { Link } from "react-router-dom"; 
import axios from "axios";
import { renderers } from "react-markdown";

class CreateCourse extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: "",       
        description: "",
        estimatedTime: "",
        materialsNeeded: "",
        userId: ""
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }   

    handleInputChange = e => {
      e.preventDefault();
      this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
      e.preventDefault();
      axios.post("http://localhost:5000/api/courses/", { // `http://localhost:5000/api/courses/`${params.id} ??
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
        .then(alert("New course created!")) 
        .then(() => {
            this.props.history.push("/");
        })
        .catch(() => {
           this.props.history.push("/error");
        });  
    };
};

render() 
    return (
        
    )

export default CreateCourse;
//This component provides the "Create Course" screen
// rendering a form 
//  that allows a user to create a new course
// also renders a "Create Course" button t
// when clicked sends a POST request to the REST API's /api/courses route
// also renders a "Cancel" button that returns the user to the default route (i.e. the list of courses).
