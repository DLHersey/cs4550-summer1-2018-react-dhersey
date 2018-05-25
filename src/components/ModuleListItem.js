import React from 'react';
import { Link } from 'react-router-dom'

export default class ModuleListItem
  extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            moduleId: ''
        }
    }

    componentDidMount() {
        this.selectCourse(this.props.courseId);
    }

    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }

//
//     onClick={() =>
// {this.props.delete(this.props.module.id)}}
    render() {
      return (
        <li className="list-group-item">
            <Link to={`/course/${this.state.courseId}/module/${this.props.module.id}`}>
                {this.props.module.title}
            </Link>
            <button className="btn btn-danger float-right"
                    type="button">
                <i className="fa fa-trash" ></i>
            </button>
        </li>
      );
    }
}