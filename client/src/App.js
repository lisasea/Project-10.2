import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

// call REST API
// GET a list of courses
// Render the list of course titles / results in an unordered list
// open a terminal and start your rest api  npm start
// open another terminal and start your React app / browse to client folder, then, npm start

// below code adapted from https://alligator.io/react/axios-react/
export default class CoursesList extends React.Component {
  state = {
    courses: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
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

/* //code lines 13-63 from https://reactjs.org/docs/faq-ajax.html
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }
}
*/



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
