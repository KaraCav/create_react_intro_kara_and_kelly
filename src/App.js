import React, { Component } from "react";
import logo from "./logo.svg";
import people from "./people.json";
import Person from "./Person";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: people,
      first_name: "",
      last_name: "",
      email: "",
      gender: "",
      ip_address: ""
    };
    this.handleDeletePerson = this.handleDeletePerson.bind(this);
    this.addToPeople = this.addToPeople.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleDeletePerson(id) {
    const newPeopleArry = this.state.people.filter(person => person.id != id);
    this.setState({ people: newPeopleArry });
  }

  handleChange(val, prop) {
    this.setState({ [prop]: val });
  }

  addToPeople() {
    const id = people[people.length - 1].id + 1;
    const newPerson = {
      id: id,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      gender: this.state.gender,
      ip_address: this.state.ip_address
    };
    // const newPeopleArray = [...this.state.people, newPerson];
    const newPeopleArray = this.state.people.slice();
    newPeopleArray.push(newPerson);
    this.setState({ people: newPeopleArray });
  }

  render() {
    const { people } = this.state;
    const peopleList = people.map(person => (
      <Person
        key={person.id}
        handleDeletePersonFromApp={this.handleDeletePerson}
        singlePersonProp={person}
      />
    ));

    return (
      <div className="App">
        <header className="App-header">
          <input
            onChange={event =>
              this.handleChange(event.target.value, "first_name")}
            placeholder="first_name"
            type="text"
          />
          <br />
          <input
            onChange={event =>
              this.handleChange(event.target.value, "last_name")}
            placeholder="last_name"
            type="text"
          />
          <br />
          <input
            onChange={event => this.handleChange(event.target.value, "email")}
            placeholder="email"
            type="text"
          />
          <br />
          <input
            onChange={event => this.handleChange(event.target.value, "gender")}
            placeholder="gender"
            type="text"
          />
          <br />
          <input
            onChange={event =>
              this.handleChange(event.target.value, "ip_address")}
            placeholder="ip_address"
            type="text"
          />{" "}
          <br />
          <button onClick={this.addToPeople}>Add Person</button>
        </header>
        <div className="App-intro">{peopleList}</div>
      </div>
    );
  }
}

export default App;
