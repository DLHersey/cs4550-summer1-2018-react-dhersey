import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export default class LessonTabs
    extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <li key={this.props.lesson.id}>
            <a data-toggle="pill" href={'#'+this.props.lesson.id}>{this.props.lesson.title}</a>
        </li>
        )
    }
}