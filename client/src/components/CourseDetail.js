import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactMarkdown, { renderers } from "react-markdown";

class CourseDetail extends Component { // setup empty courses array and empty users array
    constructor(props){
      super(props)
      this.state = {
        courses: [], //course: ??
        user: []    //users: ??
      };
      this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() { //retrieves detail for a course from the REST API's /api/courses/:id route 
        const {
            match: { params }
        } = this.props;
         
        axios.get(`http://localhost:5000/api/courses/${params.id}`)
        .then (res => {
          this.setState({ 
            courses: res.data,
            user: res.data.user
          })
        })
        .catch (err => {
            if (err) {
                const { history } = this.props;
                history.push("/notfound");
            }
        });
    }

    handleDelete = (e) => {
        const {
            match: { params },
            history
          } = this.props;

        e.preventDefault();
        axios.delete(`http://localhost:5000/api/courses/${params.id}`, {
            auth: {
                username: window.localStorage.getItem("emailAddress"), //"Email?"
                password: window.localStorage.getItem("password")
            },
            data: {
                id: this.state.courseId
            }
        })
        .then(() => {
          history.push("/");
        })
        .catch(() => {
          history.push("/error");
        });
    }
}

    render() {
        return(
            
        )
    }

//The component also renders a "Delete Course" button
//that when clicked should send a DELETE request to the REST API's /api/courses/:id route in order to delete a course
//  also renders an "Update Course" button for navigating to the "Update Course" screen.
/* Use npm to install the react-markdown package (see https://www.npmjs.com/package/react-markdown for more information).
On the "Course Detail" screen, use the <ReactMarkdown> component to render the course description and materialsNeeded properties as markdown formatted text.

*/






export default CourseDetail;