import React, {Component} from "react";
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

    handleInputChange = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
      }

    handleSubmit = e => {
        e.preventDefault();
        const {match: {params}} = this.props;
        axios.put(`http://localhost:5000/api/courses/${params.id}`, { // `http://localhost:5000/api/courses/${params.id}` ??
          auth: {
              username: window.localStorage.getItem("emailAddress"), //"Email"? "username"?
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

      handleCancel = e => {
        e.preventDefault();
        this.props.history.push("/courses");
      };

      render() {
          const { course, user, validationErrors } = this.state;
          return(
            <div className="bounds course--detail">
                <h1>Update Course</h1>
                <div>
                {validationErrors ? (
                  <div>
                    <h2 className="validation--errors--label"> Validation Errors</h2>
                    <div className="validation--errors">
                        <ul>
                            <li>{validationErrors}</li>
                        </ul>
                    </div> 
                  </div> 
                ) : ""}
              <form onSubmit={ this.handleSubmit }>
                <div className="grid-66">
                  <div className="course--header">
                    <h4 className="course--label">Course</h4>
                    <div><input id="title" name="title" type="text" className="input-title course--title--input" placeholder="Course title..." defaultValue={course.title} onChange={e => this.handleInputChange(e)}/></div>
                    <p>By {user.firstName} {user.lastName}</p>
                  </div>
                  <div className="course--description">
                    <div><textarea id="description" name="description" className placeholder={this.state.course.description} onChange={e => this.handleInputChange(e)}/></div>
                  </div>
                </div>
                <div className="grid-25 grid-right">
                  <div className="course--stats">
                    <ul className="course--stats--list">
                      <li className="course--stats--list--item">
                        <h4>Estimated Time</h4>
                        <div><input id="estimatedTime" name="estimatedTime" type="text" className="course--time--input" placeholder="Hours" defaultValue={this.state.course.estimatedTime} onChange={e =>this.handleInputChange(e)}/></div>
                      </li>
                      <li className="course--stats--list--item">
                        <h4>Materials Needed</h4>
                        <div><textarea id="materialsNeeded" name="materialsNeeded" className placeholder="Materials Needed" defaultValue={this.state.course.materialsNeeded} onChange={e => this.handleInputChange(e)}/></div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="grid-100 pad-bottom"><button className="button" type="submit">Update Course</button><button className="button button-secondary" onclick={this.handleCancel}>Cancel</button></div>
              </form>
            </div>
          </div>
          );
    }
}

export default UpdateCourse;


// This component provides the "Update Course" screen
//  rendering a form that allows a user to update one of their existing courses.
// also renders an "Update Course" button that when clicked sends a PUT request to the REST API's /api/courses/:id route. 
//  also renders a "Cancel" button that returns the user to the "Course Detail" screen.