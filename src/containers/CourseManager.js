import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

import CourseList from './CourseList';
import CourseEditor from './CourseEditor';

export default class CourseManager
extends Component {
	render() {
	return (
	    <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                    <a className="navbar-brand">Course Manager</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Course List</a>
                            </li>
                        </ul>
                    </div>
                    <span className="nav-item">
                        <a className="nav-link" href="#">Profile</a>
                    </span>
                </nav>
                <div className="container-fluid">
                    <Route path="/courselist"
                           component={CourseList}>
                    </Route>

                    <Route path="/course/:courseId"
                           component={CourseEditor}>
                    </Route>
                </div>
            </div>
        </Router>
)}}