import React from 'react';
import ReactDOM from 'react-dom';
import "./new-student.css";
import { properties } from 'components/properties.js';
class CreateNewStudent extends React.Component{
  constructor(props){
    super(props);
    this.state = {submitted: false, currentUser: '', beltColor: '', contractType: '', firstName:'', lastName:''};
    fetch(properties.host + "/getCurrentUser",{
            method: 'GET',
            credentials: "include",
            mode: "cors"
        })
        .then(res => res.text()).then((response)=>{
            console.log(response)
            if(response.length == 0){
              window.location.href = "index.html";
            }
            this.setState({currentUser: response});
        })
  }
  handleClick(event){
    event.preventDefault();
    event.target.reset();
    this.setState({submitted: true});
    var queryParmas = "?userid=" + this.state.currentUser + "&beltColor=" + this.state.beltColor + "&contractType=" + this.state.contractType + "&firstName=" + this.state.firstName + "&lastName=" + this.state.lastName;
    fetch(properties.host + "/enterStudentInformation" + queryParmas,{
      method: 'POST',
      credentials: "include",
      mode: "cors"
    }).then(res=>res.json()).then((response) => console.log(response)).then(()=>
    {
      this.setState({submitted: true})
    })
  }
  handleBeltChange(event){
    this.setState({beltColor: event.target.value})
  }
  handleFirstChange(event){
    this.setState({firstName: event.target.value})
  }
  handleLastChange(event){
    this.setState({lastName: event.target.value})
  }
  handleContractChange(event){
    this.setState({contractType: event.target.value})
  }
  render(){
    return(
      <div className = "new-student-form">
      <form onSubmit={this.handleClick.bind(this)}>
        <input type = "text" placeholder = "First Name" onChange={this.handleFirstChange.bind(this)}></input>
        <input type = "text" placeholder = "Last Name" onChange={this.handleLastChange.bind(this)}></input>
        <select onChange={this.handleBeltChange.bind(this)}>
          <option value="WHITE">WHITE</option>
          <option value="ORANGE">ORANGE</option>
          <option value="YELLOW">YELLOW</option>
          <option value="GREEN">GREEN</option>
          <option value = "PURPLE">PURPLE</option>
          <option value="BLUE">BLUE</option>
          <option value="BROWN">BROWN</option>
          <option value="RED">RED</option>
          <option value="REDDOUBLESTRIPE">REDDOUBLESTRIPE</option>
          <option value="REDBLACK">REDBLACK</option>
          <option value="BLACK">BLACK</option>
        </select>
        <input type = "text" placeholder = "Contract Type" onChange={this.handleContractChange.bind(this)}></input>
        <input type = "submit"></input>
        <SuccessAlert success = {this.state.submitted} name = {this.state.firstName + " " + this.state.lastName}></SuccessAlert>
      </form>
      </div>
    )
  }
}
class SuccessAlert extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    if(this.props.success){
      return(
        <h3>Success! You've added {this.props.name}. Add another student</h3>
      )
    }else{
      return(
        <div></div>
      )
    }
  }
}

ReactDOM.render(
    <CreateNewStudent />
  , document.getElementById('new-student'));