import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions"
import WidgetContainer from '../components/Widget'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

class WidgetList extends Component {
    constructor(props) {
        super(props)
        this.props.findAllWidgets()
    }
    render() {
        return(
            <div className="container-fluid">
                <button className="float-right mb-4 btn btn-info"
                        hidden={this.props.previewMode}
                        onClick={this.props.save}>
                    Save
                </button>
                <button className="mb-4 btn btn-outline-secondary"
                        onClick={this.props.preview}>
                    Preview
                </button>

                <ul className="col"
                    type="none">
                    {this.props.widgets.map(widget => (
                        <WidgetContainer widget={widget}
                                         preview={this.props.previewMode}
                                         key={widget.id}/>
                    ))}
                </ul>
                <button className="btn btn-block btn-success"
                        onClick={this.props.addWidget}>Add widget
                </button>
            </div>
        )
    }
}

const stateToPropertiesMapper = (state) => ({
    widgets: state.widgets,
    previewMode: state.preview
})
const dispatcherToPropsMapper
    = dispatch => ({
    findAllWidgets: () => actions.findAllWidgets(dispatch),
    addWidget: () => actions.addWidget(dispatch),
    save: () => actions.save(dispatch),
    preview: () => actions.preview(dispatch)
})
const App = connect(
    stateToPropertiesMapper,
    dispatcherToPropsMapper)(WidgetList)

export default App;