import React, {Component} from "react";
import Table from './Table.js';
import Toolbar from './Toolbar.js';
import _ from 'lodash';


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

updateData(newData){
  const data= this.state.data?this.state.data:[];
  data.push(newData);
  this.setState({
    data:data,
  })
  fetch(`https://jsonplaceholder.typicode.com/users`, {
          method : 'POST',
          headers: {
              'Content-Type': 'application/json',
            },
          body: JSON.stringify(newData)
      });
}
deleteUser(id){
  const data= this.state.data?this.state.data:[]
  console.log(id);
  _.remove(data, item => item.id === id);
  this.setState({
    data:data,
  })
}

  render(){
    return (
      <div>
        <Toolbar
          data={this.state.data}
          updateData={this.updateData.bind(this)}
        ></Toolbar>
        <Table
          data={this.state.data}
          deleteUser={this.deleteUser.bind(this)}
        ></Table>
      </div>
    )
  }
}
