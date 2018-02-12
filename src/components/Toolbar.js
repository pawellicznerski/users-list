import React, {Component} from "react";
import _ from 'lodash';

export default class Toolbar extends Component {
  constructor(props){
    super(props);
    this.state={
      showForm:false,
      name:'',
      email:'',
      warning:'',
    }
  }
  showComment(){
    const inputshaveValue= this.state.email || this.state.name;
    if(inputshaveValue){
      return (
        <button onClick={this.resetInputsValues.bind(this)}>Reset fields</button>
      )
    }
  }

  resetInputsValues(){
      this.setState({
        name:'',
        email:'',
      })
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
    const inputIsValid= this.validateInputFormat();
    if(inputIsValid){
      const foundSameEmail= this.handleFoundingSameEmail();
      if(!foundSameEmail){
        this.updatingData();
      } else{
        this.setState({warning:"email already exists"})
      }
    }
  }

  validateInputFormat(){
    const nameRegex = /^[a-zA-Z_ ]{5,20}$/;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!nameRegex.test(this.state.name)){
      this.setState({
        warning:"wrong name"
      })
      console.log("wrong name");
      return false;
    } else if(!emailRegex.test(this.state.email)){
      this.setState({
        warning:"wrong email"
      })
      console.log("wrong email");
      return false;
    } else {
      this.setState({
        warning:""
      })
      console.log("email nad name format are ok");
      return true;
    }
  }

  handleFoundingSameEmail(){
    return _.find(this.props.data,el=>el.email===this.state.email);
  }

  updatingData(){
    const randomId = Math.random().toString(16).substring(2);
    const Newobj = {id:`${randomId}`,name:`${this.state.name}`, email:`${this.state.email}`};
    this.props.updateData(Newobj);
    this.setState({name:"",email:"",showForm:false })
  }


  render(){
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
        </form>
      )
    }
    if(this.props.data.length<10){
      return (
        <div>
          <button onClick={this.toggleForm.bind(this)}>Add user</button>
        </div>
      )
    }
    return (
      <div>
        <button>Add user</button>
      </div>
    )
  }
}
