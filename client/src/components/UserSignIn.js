import React, {Component} from 'react';
import { Link } from 'react-router-dom'; 

class UserSignIn extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: '',
      password: '' 
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }   
   
  handleSubmit = event => {
    console.log( this.state)
    event.preventDefault();
    let userInfo = {"password": this.state.password, "emailAddress": this.state.emailAddress} 
    this.props.signIn(userInfo)
  };

    change = e => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    render() {
        return ( 
            var NewComponent = React.createClass({
                render: function() {
                  return (
                    <div>
                      <hr />
                      <div className="bounds">
                        <div className="grid-33 centered signin">
                          <h1>Sign In</h1>
                          <div>
                            <form>
                              <div><input id="emailAddress" name="emailAddress" type="text" className placeholder="Email Address" defaultValue /></div>
                              <div><input id="password" name="password" type="password" className placeholder="Password" defaultValue /></div>
                              <div className="grid-100 pad-bottom"><button className="button" type="submit">Sign In</button><button className="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button></div>
                            </form>
                          </div>
                          <p>&nbsp;</p>
                          <p>Don't have a user account? <a href="sign-up.html">Click here</a> to sign up!</p>
                        </div>
                      </div>
                    </div>
                  );
                }
              });
     )
   } 
}
export default UserSignIn;


// provides the "Sign In" screen
// rendering a form that allows a user to sign using their existing account information
// component also renders a "Sign In" button 
// when clicked signs in the user 
// a "Cancel" button that returns the user to the default route (i.e. the list of courses).


