
import _ from 'lodash';
import React, {Component} from 'react';

export default class TableHeader extends Component {

    render() {
        return (
            <thead>
              <tr>
                <th>LP</th>
                <th>USER</th>
                <th>E-MAIL</th>
                <th></th>
              </tr>
            </thead>
        );
    }
}
