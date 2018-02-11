
import _ from 'lodash';
import React, {Component} from 'react';

export default class TableItem extends Component {
  constructor(props){
    super(props);
  }

    renderItems() {
        // const props = _.omit(this.props, 'todos');
        //
        // return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} {...props} />);
    }

    render() {
      // console.log(this.props.name);
        return (
            <tr>
              <th>{this.props.id}</th>
              <th>{this.props.name}</th>
              <th>{this.props.email}</th>
              <th>X</th>
            </tr>
        );
    }
}
