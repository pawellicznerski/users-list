
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
    renderItems() {
        return _.map(this.props.data, (item, index) => <TableItem key={index} {...item} index={index} />);
    }

    render() {
        return (
            <table>
                <TableHeader></TableHeader>
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        );
    }
}
