import React from 'react';
import CourseRow from '../components/CourseRow';

export default class CourseList
	extends React.Component {
		// eslint-disable-next-line
	constructor() {
        super();
    }
    render() {
        return (
        	<div>
	            <h2>Course List</h2>    
				<table className="table">
			    	<thead><tr><th>Title</th></tr></thead>
			    	<tbody>
			    		<CourseRow/>
			    		<CourseRow/>
			    		<CourseRow/>
			    	</tbody>
				</table>
			</div>
        )
    }
}
