import React, { Component } from 'react'
import '../Component/Login.css';
import MainPage from './MainPage';



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
    };
  }

  //   this.Login = this.Login.bind(this);
  //   this.onChange = this.onChange.bind(this);
  // }
  // Login() {
  //   const { Username, Password } = this.state;

  //   if (Username === 'mandee' && Password === '12345') {
  //     document.write("Login success");
  //     return <MainPage />
  //   }
  //   else {
  //     alert("UserName or password Incorrect");
  //   }
  // }
  // onChange(e) {
  //   this.setState({ [e.target.name]: e.target.value });
  // }

  valid(item, type) {
    let itemValue = item.target.value;
    switch (type) {
      case "name" : {
        if(itemValue.length<4){
          item.target.style.color="red";
          this.setState({name: itemValue })
        }else{
          item.target.style.color="";
          this.setState({name: itemValue})
        }
      }
      case "password" : {
        if(itemValue.length<6){
        item.target.style.color="red"
        this.setState({password: itemValue})
      }else{
        item.target.style.color="";
        this.setState({password: itemValue})
      }
    }
  }  
  }
  Login() {
    let obj ={}
    obj.name = this.state.name;
    obj.password = this.state.password
    const { name, password } = this.state;

    if (name === 'mandee' && password === '123456') {
      
      return <MainPage />
    }
    else {
      alert("UserName or password Incorrect");
    }
  } 
  
  render() {
    return (
      <div class="login">
        <h1>Continue Your Journey</h1>
        <form >
          <p><input type="text" name="name" value={this.name} placeholder="Enter Your UserName" onChange={(item)=> this.valid(item,"name")} /></p>
          <p><input type="password" name="Password" value={this.password} placeholder="Password" onChange={(item)=> this.valid(item,"password")} /></p>
          <p class="submit"><input type="submit" onClick={()=>this.Login()} name="commit" /></p>
        </form>
      </div>

    )
  }
}

export default Login;