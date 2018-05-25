import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ModuleListItem from '../components/ModuleListItem';
import ModuleService from "../services/ModuleServiceClient";
import ModuleEditor from '../containers/ModuleEditor';

export default class ModuleList
extends React.Component {
    constructor(props) {
        super(props);
        this.moduleService = ModuleService.instance;
        this.state = {courseId: '',
                      module: { title: '' },
                      modules: [{title: 'Module 1', id: 123},]};

        this.createModule = this.createModule.bind(this);
        this.setCourseId = this.setCourseId.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
    }


    setModules(modules) {
        this.setState({modules: modules})
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
    }

    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.findAllModulesForCourse(newProps.courseId);
    }


    findAllModules() {
        this.moduleService
            .findAllModules()
            .then((modules) => {this.setModules(modules)});
    }

    findAllModulesForCourse(courseId) {
        this.moduleService
            .findAllModulesForCourse(courseId)
            .then((modules) => {this.setModules(modules)});
    }

    createModule() {
        this.moduleService
            .createModule(this.state.module)
            .then(() => { this.findAllModulesForCourse(this.state.courseId); })                                                                                                                                                                              .then(() => { this.findAllModulesForCourse(this.state.courseId); });
    }

    titleChanged(event) {
        console.log(event.target.value);
        this.setState({module: {title: event.target.value}});
    }


    deleteModule(moduleId) {
        console.log('delete this module?: '+ moduleId);
    }


    renderModuleList() {
        let modules = this.state.modules.map((module) => {
            return <ModuleListItem module={module} key={module.id} courseId={this.state.courseId}/>
        });
        return modules;
    }

    render() { return (
        <Router>
            <div className="row">
                <div className="col-4 pannel">
                    <div className="form-control">
                        <input onChange={this.titleChanged}
                               value={this.state.module.title}
                               placeholder="New Module"
                               className="form-control form-inline"/>
                        <button onClick={this.createModule} className="btn btn-primary form-inline">
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                    <br/>
                    <ul className="list-group">
                        {this.renderModuleList()}
                    </ul>
                </div>
                <div className="col-8">
                    <Route path="/course/:courseId/module/:moduleId"
                           component={ModuleEditor}/>
                </div>
            </div>
        </Router>
);}}
