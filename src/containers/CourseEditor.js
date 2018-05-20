import React from 'react';
import ModuleList from './ModuleList';
import LessonTabs from './LessonTabs';

export default class CourseEditor 
	extends React.Component {
		constructor() {
			super();
		}

		render() {
			return (
				<div>
					Edit Course
					<div className="row">
						<div className="col col-sm-2">
							<ModuleList/>
						</div>
						<div className="col col-lg-auto">
						</div>
					</div>
				</div>
			)
		}
}