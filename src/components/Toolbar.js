import React, {Component} from "react";

export default class Toolbar extends Component {
  constructor(props){
    super(props);
    this.state={
      showForm:false,
      name:'',
      email:''
      warning:''
    }
  }
  showComment(){
    console.log("wszystko gra");
  }
  toggleForm(){
    this.setState({
      showForm:true
    })
  }
  handleOnChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]:value
    })
  }
  handleOnSubmit(e){
    e.preventDefault();
    const inputIsNotValid= this.validateInputFormat();
    if(inputIsNotValid){
      
    }

  }


  validateInputFormat(){
    const nameRegex = /^[a-zA-Z]{1,20}$/;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!emailRegex.test(this.state.email)){
      this.setState({
        warning:"wrong email"
      })
      return false;
    } else if(!nameRegex.test(this.state.name)){
      this.setState({
        warning:"wrong name"
      })
      return false;
    } else {
      this.setState({
        warning:""
      })
      return true;
    }
  }


  render(){
    console.log(this.state.showForm);
    if(this.state.showForm){
      return (
        <form onSubmit={this.handleOnSubmit.bind(this)}>
          <input
            onChange={this.handleOnChange.bind(this)}
            name="name"
            type="text"
            placeholder="name"
            value={this.state.name}
            autoFocus
          ></input>
          <input
            onChange={this.handleOnChange.bind(this)}
            name="email"
            type="text"
            placeholder="email"
            value={this.state.email}
          ></input>
          <button type="submit">submit</button>
          {this.showComment()}
          {this.state.name}
          {this.state.email}
        </form>
      )
    }
    return (
      <div>
        <button onClick={this.toggleForm.bind(this)}>Add user</button>
        {this.showComment()}
      </div>
    )
  }
}
