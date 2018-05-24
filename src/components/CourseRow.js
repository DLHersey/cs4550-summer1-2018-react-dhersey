import React from 'react';
import { Link } from 'react-router-dom'

export default class CourseRow extends React.Component {
		// eslint-disable-next-line
	constructor(props) {
		super(props);
	}

    render() {
        return (
            <tr>
           		<td>
                    <Link to={`/course/${this.props.course.id}`}>
                        {this.props.course.title}
                    </Link>
                </td>
           		<td>me</td>
           		<td>{this.props.course.modified}</td>
           		<td>
	            	<button className="btn btn-primary" type="button">Edit</button>
	            	<button className="btn btn-danger" type="button" 
	            		onClick={() =>
                        {this.props.delete(this.props.course.id)}}>Delete</button>
		        </td>
           	</tr>
       )
   }
}
