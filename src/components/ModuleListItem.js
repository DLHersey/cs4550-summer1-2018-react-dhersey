import React from 'react';

export default class ModuleListItem
  extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <li className="list-group-item">
          {this.props.title} Course Title
          <span className="float-right">
            <i className="fa fa-trash"></i>
            <i className="fa fa-pencil"></i>
          </span>
        </li>
      );
    }
}