import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import CourseList from './CourseList';
import CourseEditor from './CourseEditor';

export default class CourseManager
extends Component {
	render() {
	return (
	    <Router>
            <div>
                <h1>Course Manager</h1>

                <Route path="/courses"
                       component={CourseList}>
                </Route>

                <Route path="/course/:courseId"
                       component={CourseEditor}>
                </Route>

            </div>
        </Router>
)}}