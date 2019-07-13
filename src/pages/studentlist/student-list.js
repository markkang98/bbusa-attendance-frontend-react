import React from 'react';
import ReactDOM from 'react-dom';
import "./student-list.css";
import LogOutButton from 'components/logout.js';
class StudentList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {username: '', studentList: [], elements: [], headers: []};
        fetch("http://127.0.0.1:5000/getCurrentUser",{
            method: 'GET',
            credentials: "include",
            mode: "cors"
        })
        .then(res => res.text()).then((response)=>{
            console.log(response)
            if(response.length == 0){
              window.location.href = "index.html";
            }
            this.setState({username : response})
        }).then(this.getAllUsers.bind(this))
      }
      getAllUsers(){
        fetch("http://127.0.0.1:5000/getAllStudents?user_id=" + this.state.username,{
            method: 'GET',
            credentials: "include",
            mode: "cors"
          }).then(res => res.json()).then((response) => {
            var allUsers = response.allUsers;
            var i;
            for(i=0; i< allUsers.length; i++){
              var attendance = (<AttendanceButton key= {i} firstName ={allUsers[i].first_name} lastName = {allUsers[i].last_name} belt_color = {allUsers[i].belt_color}></AttendanceButton>)
              let a = this.state.elements.slice();
              a[this.state.elements.length] = attendance;
              this.setState({elements: a})
            }  
            var x;
            var lastBelt = "WHITE";
            var child = [];
            var headerList = [];
            for(x = 0; x < this.state.elements.length; x ++){
              if(this.state.elements[x].props.belt_color == lastBelt){
                child.push(this.state.elements[x]);
              }else{
                var newHeader = (<BeltColorHeader key = {x} beltList = {child} beltColor = {lastBelt + " BELT"}></BeltColorHeader>);
                headerList.push(newHeader);
                child = [this.state.elements[x]];
                lastBelt = this.state.elements[x].props.belt_color;
              }
            }
              var newHeader = (<BeltColorHeader key = {x + 10} beltList = {child} beltColor = {lastBelt}></BeltColorHeader>);
              headerList.push(newHeader);
              this.setState({headers: headerList})  
          })
      }
        
      enterNewStudent(){
        window.location.href = "new-student.html";
      }
      goToAttendanceHistory(){
        window.location.href = "attendance-history.html";
      }
    render() {
        return(
          <div>
            <h1>Students</h1>
            <LogOutButton></LogOutButton>
            <button onClick = {this.goToAttendanceHistory.bind(this)}>Attendance History</button>
            <button onClick = {this.enterNewStudent.bind(this)}>Enter New Student</button>
            {this.state.headers}
          </div>
        );
      }
}
class BeltColorHeader extends React.Component{
  constructor(props){
    super(props)
    this.state = {condition: false};
  }
  expand(){
      this.setState({
        condition: !this.state.condition
      });
    }
  
  render(){
    return(
      <div>
        <button className= { (this.state.condition ? "active" : "") + " " + "accordian" }  onClick = {this.expand.bind(this)}>{this.props.beltColor}</button>
        <div className = {(this.state.condition ? "activePanel" : "panel")}>
          {this.props.beltList}
        </div>
      </div>
    )
  }
}
function panelMaker(props){
  return(
    <div clasName = "panel">
      {props}
    </div>
  )
}
class AttendanceButton extends React.Component{
  constructor(props){
    super(props);
  }
  submitAttendance(){
    fetch("http://127.0.0.1:5000/submitAttendance?first_name=" + this.props.firstName + "&last_name=" + this.props.lastName,{
      method: 'POST',
      credentials: "include",
      mode: "no-cors"
    })
  }
  render(){
    return(
      <div>
        <h2>{this.props.firstName}</h2>
        <h2>{this.props.lastName}</h2>
        <h2>{this.props.belt_color}</h2>
        <button onClick = {this.submitAttendance}>Submit Attendance</button>
      </div>
    );
  }
}

ReactDOM.render(
  <StudentList />
, document.getElementById('student-list'));
