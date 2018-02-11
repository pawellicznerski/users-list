
import _ from 'lodash';
import React, {Component} from 'react';

export default class TableItem extends Component {
  constructor(props){
    super(props);
  }

    deleteUser(id){
      this.props.deleteUser(id);
    }

    render() {
      const {id,index,name,email} = this.props;
        return (
            <tr>
              <th>{index+1}</th>
              <th>{name}</th>
              <th>{email}</th>
              <th onClick={this.deleteUser.bind(this,id)}>X</th>
            </tr>
        );
    }
}
