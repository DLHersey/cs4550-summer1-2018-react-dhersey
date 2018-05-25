import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import LessonService from "../services/LessonServiceClient";

export default class LessonTabs
    extends React.Component {

    constructor(props) {
        super(props);
        this.lessonService = LessonService.instance;
        this.state = {
            courseId: '',
            moduleId: '',
            lesson: {title: 'New Topic'},
            lessons: [{title: 'Topic', id: 0},]
        }
    }

    setLessons(lessons) {
        this.setState({lessons: lessons})
    }

    componentDidMount() {
        this.setCourseId(
            this.props.courseId);
        this.setModuleId(
            this.props.moduleId);
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

    createLesson() {
        this.lessonService
            .createLesson(this.state.lesson)
            .then(() => {this.findAllLessonsForModule(this.state.courseId, this.state.moduleId)})
    }

    findAllLessons() {
        this.lessonService
            .findAllLessons()
            .then((lessons) => {this.setLessons(lessons)});
    }

    findAllLessonsForModule(courseId, moduleId) {
        this.lessonService
            .findAllLessonsForModule(courseId)
            .then((lessons) => {this.setLessons(lessons)});
    }

    deleteLesson(lessonId) {
        this.lessonService
            .deleteLesson(lessonId)
            .then(() => {this.findAllLessonsForModule(this.state.courseId, this.state.moduleId)})
    }

    renderLessonTabs() {
        let lessonTabs = this.state.lessons.map((lesson) => {
            return <li key={lesson.id}><a data-toggle="pill" href={'#'+lesson.id}>{lesson.title}</a></li>
        });
        return lessonTabs;
    }

    renderLessonContent() {
        let lessonContent = this.state.lessons.map((lesson) => {
            return (
                <div key={lesson.id} id={lesson.id} className="tab-pane fade">
                    <h3>{lesson.title}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                </div>
            )
        });
        return lessonContent;
    }

    render() {
        return(
            <div>
                <ul className="nav nav-pills">
                    <li className="active"><a data-toggle="pill" href="#intro">Home</a></li>
                    {this.renderLessonTabs()}
                </ul>

                <div className="tab-content">
                    <div id="intro" className="tab-pane fade in active">
                        <h3>Intro</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p>
                    </div>
                    {this.renderLessonContent()}
                </div>
            </div>
        )}
}