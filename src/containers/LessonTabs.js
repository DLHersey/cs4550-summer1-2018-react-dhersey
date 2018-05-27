import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import LessonService from "../services/LessonServiceClient";
import LessonListItem from '../components/LessonListItem';

export default class LessonTabs
    extends React.Component {

    constructor(props) {
        super(props);
        this.lessonService = LessonService.instance;
        this.state = {
            rLessons: []
        };
    }

    setLessons(lessons) {
        this.setState({rLessons: lessons})
    }

    //only needs to create with placeholder name
    /*createLesson() {
        this.lessonService
            .createLesson(this.state.lesson)
            .then(() => {
                this.findAllLessonsForModule(
                    this.props.match.params.courseId, this.props.match.params.moduleId)})
    }*/

    findAllLessons() {
        this.lessonService
            .findAllLessons()
            .then((lessons) => {this.setLessons(lessons)});
    }

    findAllLessonsForModule(courseId, moduleId) {
        this.lessonService
            .findAllLessonsForModule(courseId, moduleId)
            .then((lessons) => {
                this.setLessons(lessons)});
    }

    deleteLesson(lessonId) {
        this.lessonService
            .deleteLesson(lessonId)
            .then(() => {
                this.findAllLessonsForModule(
                    this.props.courseId, this.props.moduleId)})
    }

    renderLessonTabs() {
        this.findAllLessonsForModule(this.props.courseId, this.props.moduleId);
        let lessonTabs = this.state.rLessons.map((lesson) => {
            return <LessonListItem lesson={lesson} key={lesson.id}/>
        });
        return lessonTabs;
    }
/*
    renderLessonContent() {
        this.findAllLessonsForModule(
            this.props.courseId, this.props.moduleId);
        let lessonContent = this.state.rLessons.map((lesson) => {
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
*/
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

                </div>
            </div>
        )}
}