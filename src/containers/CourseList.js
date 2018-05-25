import React from 'react';
import CourseRow from '../components/CourseRow';
import CourseService from '../services/CourseService';

export default class CourseList
	extends React.Component {
		// eslint-disable-next-line
	constructor() {
        super();
	    this.courseService = CourseService.instance;
	    this.state = {courses: []};
	    this.titleChanged = this.titleChanged.bind(this);
   		this.createCourse = this.createCourse.bind(this);
   		this.deleteCourse = this.deleteCourse.bind(this);
    }

    componentDidMount() {
    	this.findAllCourses();
    }

    findAllCourses() {
    	this.courseService
    		.findAllCourses()
      		.then((courses) => {
        		console.log(courses);
        		this.setState({courses: courses});
      		});
  	}

	titleChanged(event) {
	    this.setState({
	      course: { title: event.target.value }
	    });
	}

	createCourse() {
	    this.courseService
	       	.createCourse(this.state.course)
	       	.then(() => { this.findAllCourses(); });
	}

	deleteCourse(courseId) {
		this.courseService
       		.deleteCourse(courseId)
			.then(() => {this.findAllCourses();});
	}

    renderCourseRows() {
        let courses = null;

        console.log("render course rows")
        console.log(this.state)
        if(this.state) {
            courses = this.state.courses.map((course) => {
                    return <CourseRow key={course.id} course={course} delete={this.deleteCourse}/>
                }
            )
        }
        return (courses)
    }


    render() {
        return (
        	<div>
	            <h2>Course List</h2>    
				<table className="table">
			    	<thead>
			    		<tr>
				    		<th>Title</th>
				    		<th>Owned by</th>
				    		<th>Last Modified</th>
			    		</tr>
			    		<tr>
						   	<th>
						   		<input onChange={this.titleChanged}
                         		className="form-control col-lg-8" id="titleFld"
					        	placeholder="cs101"/>
					        </th>
						   	<th>
						   		<input className="form-control col-lg-5" id="ownerFld" 
						   		placeholder="owner"/>
					        </th>
						   	<th><button onClick={this.createCourse} 
						   		className="float-right btn btn-primary" type="button">Add</button></th>
						</tr>
			    	</thead>
			    	<tbody>
			    		{this.renderCourseRows()}
			    	</tbody>
				</table>
			</div>
        )
    }
}
