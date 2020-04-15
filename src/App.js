import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const users = [
  {
    id: 1,
    name: `Kunal`,
    surname: 'Bhattacharya',
    dob: '15 May'
  },
  {
    id: 2,
    name: `Deepika`,
    surname: 'Chandra',
    dob: '8 June'
  },
];

class UserPage extends React.Component {
  render() {
    const {
      params: { userId },
    } = this.props.match;

    const userData = users.find(function (item) {
      return item.id == userId;
    })
    return (
      <>
        <p>
          <strong>ID: {userData.id}</strong>
          <br />
          <strong>FIRST NAME: {userData.name}</strong>
          <br />
          <strong>LAST NAME: {userData.surname}</strong>
          <br />
          <strong>DOB: {userData.dob}</strong>
        </p>
      </>
    );
  }
}

class Home extends React.Component {
  render() {
    return(
      <>
      {
        users.map(function(item){
          return(
            <>
            <Link to={"/users/"+item.id}>{item.name}</Link>
            <br />
            </>
          )
        })
      }
      </>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route
            path="/home"
            render={(props) => <Home />}
          />
          <Route
            path="/users/:userId"
            render={(props) => <UserPage {...props} />}
          />
        </Router>
      </div>
    );
  }
}

export default App;
