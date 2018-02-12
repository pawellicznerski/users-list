
import _ from 'lodash';
import React, {Component} from 'react';
import TableHeader from './Table_header.js';
import TableItem from './Table_item.js';

export default class Table extends Component {
  constructor(props){
    super(props);
    this.state={
      data:this.props.data,

    }
  }
  deleteUser(id){
    this.props.deleteUser(id);
  }
  renderItems() {
      return _.map(this.props.data, (item, index) => <TableItem key={index} {...item} index={index} deleteUser={this.deleteUser.bind(this)}/>);
  }
  sortTable(itemId){
    this.props.sortTable(itemId)
  }

  render() {
      return (
          <table>
              <TableHeader
                sortTable={this.sortTable.bind(this)}
                sortby={this.props.sortby}
                descending={this.props.descending}
              />
              <tbody>
                  {this.renderItems()}
              </tbody>
          </table>
      );
  }
}
