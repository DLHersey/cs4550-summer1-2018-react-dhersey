import React from 'react';
import ModuleList from './ModuleList';

export default class CourseEditor
	extends React.Component {
    constructor(props) {
        super(props);
        this.state = {courseId: ''};
        this.selectCourse = this.selectCourse.bind(this);
    }

    componentDidMount() {
        this.selectCourse
        (this.props.match.params.courseId);
    }

    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }

    componentWillReceiveProps(newProps){
        this.selectCourse
        (newProps.match.params.courseId);
    }


    render() {
        return (
            <div className="bg-light">
                <h2>Editing course: {this.state.courseId}</h2>
                <div className="row">
                    <div className="col">
                        <ModuleList courseId={this.state.courseId}/>
                    </div>
                </div>
            </div>
        )
    }
}