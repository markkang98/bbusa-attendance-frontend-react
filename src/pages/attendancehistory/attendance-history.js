import React from 'react';
import ReactDOM from 'react-dom';
import {Calendar, CalendarControls} from 'react-yearly-calendar';
import './attendance-history.css';

class AttendanceHistorySearch extends React.Component{
  constructor(props){
    super(props)
    this.state = {currentUser:'', currentYear: 2019, first_name: '', last_name: '', attendance_dates: null}
    fetch("http://blackbeltusa.us-east-1.elasticbeanstalk.com/getCurrentUser",{
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
    prevYear(){
      this.setState({currentYear: this.state.currentYear - 1})
    }
    nextYear(){
      this.setState({currentYear: this.state.currentYear + 1})
    }
    getAttendanceDates(event){
      event.preventDefault();
      var queryParams = "?first_name=" + this.state.first_name + "&last_name=" + this.state.last_name;
      fetch("http://blackbeltusa.us-east-1.elasticbeanstalk.com/findAttendanceDates" +  queryParams,{
        method: 'GET',
        credentials: "include",
        mode: "cors"
      })
      .then(res=>res.json())
      .then((response) => {
        var i;
        var dates = [];
        for(i = 0; i < response.length; i ++){
          var date = response[i].attendance_date;
          dates.push(date);
        }
        var attended = {attended: dates}
        console.log(attended)
        this.setState({attendance_dates: attended, fullName: this.state.first_name + " " + this.state.last_name + "'s Attendance History"})
        })
    }
    changeFirstName(event){
      this.setState({first_name: event.target.value})
    }
    changeLastName(event){
      this.setState({last_name: event.target.value})
    }
    render(){
      return(
        <div>
          <form onSubmit ={this.getAttendanceDates.bind(this)}>
          <input type = "text" placeholder = "First Name" onChange={this.changeFirstName.bind(this)}></input>
          <input type = "text" placeholder = "Last Name" onChange={this.changeLastName.bind(this)}></input>
          <input type = "submit"></input>
          </form>
          <h1>{this.state.fullName}</h1>
          <CalendarControls 
          year = {this.state.currentYear} 
          onPrevYear = {this.prevYear.bind(this)} 
          onNextYear={this.nextYear.bind(this)}
          />
          <Calendar
          year={this.state.currentYear}
          showWeekSeparators = {true}
          customClasses =  {this.state.attendance_dates}
          />
        </div>
        
      )
    }
  }
  

ReactDOM.render(
    <AttendanceHistorySearch />
  , document.getElementById('attendance-history'));
  