import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/jquery/dist/jquery.min.js';
import LessonService from "../services/LessonServiceClient";
import App from './WidgetList';
import {Provider, connect} from 'react-redux'
import {createStore} from 'redux'
import {FIND_ALL_WIDGETS, ADD_WIDGET, DELETE_WIDGET, SAVE} from "../constants/index"
import {widgetReducer} from "../reducers/widgetReducer"
import {WidgetContainer} from '../components/Widget'
import {findAllWidgets, addWidget, save} from "../actions/index"

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

    componentDidMount() {
        this.findAllLessonsForModule(this.props.courseId, this.props.moduleId)
    }

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
        let lessonTabs = this.state.rLessons.map((lesson) => {
            return <a data-toggle="pill" href={'#'+lesson.id} key={lesson.id}>{lesson.title}</a>
        });
        return lessonTabs;
    }

    renderLessonContent() {
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

    render() {

        let store = createStore(widgetReducer)
        return(
            <div className={"container"}>
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
                    <br/>

                </div>
                <Provider store={store}>
                    <App />
                </Provider>
            </div>
        )}
}