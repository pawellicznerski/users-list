import React, {Component} from "react";
import Table from './Table.js';
import Toolbar from './Toolbar.js';
import Header from './Header/Header.js';
import _ from 'lodash';


export default class Userlist extends Component {
  constructor(props){
    super(props);
    this.state={
      data:'',
      sortby:'',
      descending:false,
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
sortTable(itemId){
  let data = Array.from(this.state.data);
  console.log(data);
  const descending = this.state.sortby === itemId && !this.state.descending;
  data.sort((a,b)=>{
    return ( descending
      ?((a[itemId]>b[itemId])? 1:-1)
      :((a[itemId]<b[itemId])? 1:-1)
    )});

  this.setState({
    data:data,
    sortby:itemId,
    descending:descending
  })
  console.log(this.state.descending);
}

  render(){
    const noUsersInfo = <span>No users</span>;
    return (
      <div>
        <Toolbar
          data={this.state.data}
          updateData={this.updateData.bind(this)}
        ></Toolbar>
        <Table
          data={this.state.data}
          deleteUser={this.deleteUser.bind(this)}
          sortTable={this.sortTable.bind(this)}
          sortby={this.state.sortby}
          descending={this.state.descending}
        ></Table>
      {this.state.data.length?'':noUsersInfo}
      </div>
    )
  }
}
