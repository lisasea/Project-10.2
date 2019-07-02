import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Courses extends Component { // setup empty courses array
  state = {
    courses: []
  };


componentDidMount() {
  this.getCourses();
};

// get list of courses from REST API /api/courses route using axios
// link course to it's Course Detail screen and link to "Create Course" screen


var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css?family=Work+Sans:400,500" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Cousine" rel="stylesheet" type="text/css" />
          <link href="../styles/global.css" rel="stylesheet" />
          <title>Courses</title>
        </div>
      );
    }
  });

};

export default Courses;