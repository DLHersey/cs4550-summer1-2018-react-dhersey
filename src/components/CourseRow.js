import React from 'react';

export default class CourseRow extends React.Component {
		// eslint-disable-next-line
	constructor(props) {
		super(props);
	}

    render() {
        return (
            <tr>
           		<td>{this.props.course.title}</td>
           		<td>me</td>
           		<td>{this.props.course.modified}</td>
           		<td>
	            	<button className="btn btn-primary" type="button">Edit</button>
	            	<button className="btn btn-danger" type="button" 
	            		onClick={(e) => this.props.deleteCourse(this.props.course.key)}>Delete</button>
		        </td>
           	</tr>
       )
   }
}
