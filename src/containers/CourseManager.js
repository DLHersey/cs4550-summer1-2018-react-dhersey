import React, {Component} from 'react';
//import CourseCard from '../components/CourseCard';
//import ModuleList from  './ModuleList';
import CourseList from './CourseList';

export default class CourseManager
extends Component {
	render() {
	return (
    	<div className="container-fluid">
        	<h1>Course Manager</h1>
        	<CourseList/>
	    </div>
)}}