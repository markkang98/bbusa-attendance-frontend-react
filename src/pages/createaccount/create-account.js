import React from 'react';
import ReactDOM from 'react-dom';
class CreateAccount extends React.Component{
    constructor(props) {
        super(props);
        this.state = {allUsers: ""};
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange(event){
        this.setState({username: event.target.value, password: this.state.password});
        console.log(this.state.username)
      }
      handleChangePassword(event){
        this.setState({username: this.state.username, password: event.target.value});
        console.log(this.state.password)
      }
      createUser(event){
        event.preventDefault();
        fetch("http://blackbeltusa.us-east-1.elasticbeanstalk.com/registration?userid=" + this.state.username + "&password=" + this.state.password,{
          method: 'POST',
          credentials: "include",
          mode: "cors"
        }).then(res => res.json).then((response)=>console.log(response))
        .then(()=>
        {
          window.location.href = "index.html";
        })
        }

    render() {
        return (
          <form>
              <h1>Register</h1>
            <label>
              Name:
              <input type="text" onChange={this.handleChange.bind(this)} />
            </label>
            <label>
                Password:
                <input type="password" onChange={this.handleChangePassword.bind(this)} />
            </label>
            <button  onClick = {this.createUser.bind(this)}>Register</button>
          </form>
        );
      }
}
ReactDOM.render(
  <CreateAccount />
, document.getElementById('root'));
