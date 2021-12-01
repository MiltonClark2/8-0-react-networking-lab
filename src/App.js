import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";
import { Component } from "react";


class App extends Component {
  constructor(){
    super();
    this.state = {
      
    }
  }
  
  render(){
    return(
      <div>
        <NavBar />
        <EmployeeList />
      </div>
    )
  }
}


export default App;
