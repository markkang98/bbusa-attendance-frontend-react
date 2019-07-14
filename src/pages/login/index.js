import React from 'react';
import ReactDOM from 'react-dom';

class LogIn extends React.Component{
  constructor(props) {
      super(props);
      this.state = {username: '', password: '', loggedin: false, loading: true};
      this.handleChange = this.handleChange.bind(this);
      fetch("https://blackbeltusa.us-east-1.elasticbeanstalk.com/getCurrentUser",{
          method: 'GET',
          credentials: "include",
          mode: "cors"
      }).then(res=>res.text()).then((response) => {
        if(response.length !== 0){
          window.location.href = "student-list.html";
          this.setState({loggedin: true});
        }
      }).then(()=>{
        this.setState({loading: false})
      })
    }
  
    handleChange(event){
      this.setState({username: event.target.value, password: this.state.password});
    }
    handleChangePassword(event){
      this.setState({username: this.state.username, password: event.target.value});
    }
    createUser(event){
      event.preventDefault();
      fetch("https://blackbeltusa.us-east-1.elasticbeanstalk.com/login?userid=" + this.state.username + "&password=" + this.state.password,{
          method: 'POST',
          credentials: "include",
          mode: "cors"
      }).then(res=>res.text()).then((response) => console.log(response)).then(()=>
      {
        window.location.href = "student-list.html";
      })
    }
    goToCreateAccount(event){
      window.location.href = "create-account.html";
    }
   
  render() {
    if (this.state.loggedin || this.state.loading) {
      return <div />
    }else{
      return (
        <div>
        <form>
            <h1>Log In</h1>
          <label>
            Name:
            <input type="text" value={this.state.username} onChange={this.handleChange.bind(this)} />
          </label>
          <label>
              Password:
              <input type="password" value={this.state.password} onChange={this.handleChangePassword.bind(this)} />
          </label>
          <button onClick = {this.createUser.bind(this)}>Log In</button>
        </form>
        <button onClick = {this.goToCreateAccount}>Create Account</button>
        </div>
      );
    }
  }
}
ReactDOM.render(
    <LogIn />
, document.getElementById('log-in'));
