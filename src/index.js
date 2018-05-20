import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import CourseManager from './containers/CourseManager';
import CourseEditor from './containers/CourseEditor';

ReactDOM.render(
 	<div className="container-fluid">
 		<CourseManager/>
 		<CourseEditor/>
 	</div>,
 document.getElementById('root')
);