import React, {Component} from "react";

export default class Toolbar extends Component {
  constructor(props){
    super(props);
    this.state={
      showForm:false,
      name:'',
      email:''
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
  render(){
    console.log(this.state.showForm);
    if(this.state.showForm){
      return (
        <form>
          <input type="text" placeholder="name" autoFocus></input>
          <input type="text" placeholder="email"></input>
          <button type="submit">submit</button>
          {this.showComment()}
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
