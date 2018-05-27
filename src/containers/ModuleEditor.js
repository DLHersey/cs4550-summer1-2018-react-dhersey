import React from 'react';

import ModuleList from './ModuleList';
import LessonTabs from './LessonTabs';

export default class ModuleEditor
    extends React.Component {

    constructor(props) {
        super(props);
        //this.selectCourse = this.selectCourse.bind(this);
        //this.setCourseId = this.setCourseId.bind(this);
        //this.setModuleId = this.setModuleId.bind(this);
        this.state = {
            courseId: '', moduleId: ''
        };
    }
/*
    componentDidMount() {
        this.setCourseId(
            this.props.match.params.courseId);

        this.setModuleId(
            this.props.match.params.moduleId);
    }

    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }

    setCourseId(courseId) {
        this.setState
        ({courseId: courseId});
    }
    setModuleId(moduleId) {
        this.setState
        ({moduleId: moduleId});
    }

*/
    render() { return(
        <div className="container-fluid bg-light">
            <h2>Editing Module: {this.props.match.params.moduleId}</h2>
            <div className="row">
                <LessonTabs courseId={this.props.match.params.courseId} moduleId={this.props.match.params.moduleId}/>
            </div>
        </div>
    );}}
