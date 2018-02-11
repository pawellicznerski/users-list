import React, {Component} from "react";
import Table from './Table.js';
import Toolbar from './Toolbar.js';

export default class Userlist extends Component {
  constructor(props){
    super(props);
    this.state={
      data:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(resp => resp.json())
      .then(data => {
          if(data.length!==0){
            this.setState({
              data:data
            })
          } else if (data.length===0){
            console.log("nie ma danych");
          }
        }
      );//end of then
  }//end of component did
  render(){
    return (
      <div>
        <Toolbar data={this.state.data}></Toolbar>
        <Table data={this.state.data}></Table>
      </div>
    )
  }
}
