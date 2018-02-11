
import _ from 'lodash';
import React, {Component} from 'react';

export default class TableHeader extends Component {
  constructor(props){
    super(props);
  }
  sortTable(itemId){
    this.props.sortTable(itemId)
    // console.log(this);
  }

    render() {
        return (
            <thead>
              <tr>
                <th
                  id="id"
                  onClick={this.sortTable.bind(this,"id")}
                >LP</th>
                <th
                  id="user"
                  onClick={this.sortTable.bind(this,"user")}
                >USER</th>
                <th
                  id="email"
                  onClick={this.sortTable.bind(this,"email")}
                >E-MAIL</th>
                <th></th>
              </tr>
            </thead>
        );
    }
}
