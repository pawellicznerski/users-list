
import _ from 'lodash';
import React, {Component} from 'react';

export default class TableHeader extends Component {
  sortTable(itemId){
    this.props.sortTable(itemId)
    // console.log(this);
  }

  renderHeaderText(value){
    const {sortby,descending}=this.props;
    // let title = "User";
    const text = (sortby && sortby===value)
    ?value += descending?"\u2191":"\u2193"
    :value;
    return text;
  }

    render() {

        return (
            <thead>
              <tr>
                <th
                >LP</th>
                <th
                  onClick={this.sortTable.bind(this,"name")}>
                  {this.renderHeaderText("name")}
                </th>
                <th
                  onClick={this.sortTable.bind(this,"email")}>
                  {this.renderHeaderText("email")}
                </th>
                <th></th>
              </tr>
            </thead>
        );
    }//render
}//component


//
