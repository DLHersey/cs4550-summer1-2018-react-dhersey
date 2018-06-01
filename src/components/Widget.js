import React from  'react'
import {connect} from 'react-redux'
import {DELETE_WIDGET} from "../constants/index"
import * as actions from '../actions'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

const Heading = ({widget, preview, headingTextChanged, headingSizeChanged}) => {
    let selectElem;
    let inputElem;
    return(
        <div>
            <div hidden={preview}>
                <h2> Heading {widget.size}</h2>
                <input onChange={() => headingTextChanged(widget.id, inputElem.value)}
                       value={widget.text}
                       ref={node => inputElem = node}/>
                <select onChange={() => headingSizeChanged(widget.id, selectElem.value)}
                        value={widget.size}
                        ref={node => selectElem = node}>
                    <option value="1">Heading 1</option>
                    <option value="2">Heading 2</option>
                    <option value="3">Heading 3</option>
                </select>
                <hr/>
                <h3>Preview</h3>
            </div>
            {widget.size == 1 && <h1>{widget.text}</h1>}
            {widget.size == 2 && <h2>{widget.text}</h2>}
            {widget.size == 3 && <h3>{widget.text}</h3>}
        </div>
    )
}

const Paragraph = ({widget, preview, paragraphTextChanged}) => {
    let textElem;
    return (
        <div >
            <div hidden={preview}>
                <h2>Paragraph</h2>
                <textarea onChange={() => paragraphTextChanged(widget.id, textElem.value)}
                          value={widget.text}
                          ref={node => textElem = node}/>
                <hr/>
                <h3>Preview</h3>
            </div>
            <div>
                {widget.text}
            </div>
        </div>
    )
}

const Image = ({widget, preview, imageSrcChanged}) => {
    let inputElem;
    return (
        <div>
            <div hidden={preview}>
                <h2>Image</h2>
                <input onChange={() => imageSrcChanged(widget.id, inputElem.value)}
                       value={widget.src}
                       ref={node => inputElem = node}
                placeholder="image url"/>
                <hr/>
                <h3>Preview</h3>
            </div>
            <div>
                {widget.src}
            </div>
        </div>
    )
}

const List = ({widget, preview, listItemsChanged, listTypeChanged}) => {
    let textElem;
    let selectElem;
    return (
        <div>
            <div hidden={preview}>
                <h2>List</h2>
                <textarea onChange={() => listItemsChanged(widget.id, textElem.value)}
                          value={widget.listItems}
                          ref={node => textElem = node}/>
                <select onChange={() => listTypeChanged(widget.id, selectElem.value)}
                        value={widget.listType}
                        ref={node => selectElem = node}>
                    <option value="ordered">Ordered</option>
                    <option value="unordered">Unordered</option>
                </select>
                <hr/>
                <h3>Preview</h3>
            </div>
            <div>
                {widget.listType == 'ordered' && <h1>{widget.text}</h1>}
                {widget.listType == 'unordered' && <h2>{widget.text}</h2>}
            </div>
        </div>
    )
}

const Link = ({widget, preview, linkTextChanged, linkHrefChanged}) => {
    let inputElem;
    let labelElem;
    return (
        <div>
            <div hidden={preview}>
                <h2>Link</h2>
                <input type="url"
                       placeholder="link path"
                       onChange={() => linkHrefChanged(widget.id, inputElem.value)}
                       value={widget.href}
                       ref={node => inputElem = node}/>
                <input type="text"
                       placeholder="link text"
                       onChange={() => linkTextChanged(widget.id, labelElem.value)}
                       value={widget.text}
                       ref={node => labelElem = node}/>
                <hr/>
                <h3>Preview</h3>
            </div>
            <div>
                <a href={'//'+widget.href}>{widget.text}</a>
            </div>
        </div>
    )
}

const Widget = ({widget, preview, dispatch}) => {
    let selectElement
    return(
        <li className="pannel pannel-light border border-dark p-3 mb-1">
            <div hidden={preview}>
                id: {widget.id} {widget.widgetType}

                <select className="float-right"
                        value={widget.widgetType}
                        onChange={e =>
                            dispatch({
                                type: 'SELECT_WIDGET_TYPE',
                                id: widget.id,
                                widgetType: selectElement.value
                            })} ref={node => selectElement = node}>
                    <option>Heading</option>
                    <option>Paragraph</option>
                    <option>List</option>
                    <option>Image</option>
                    <option>Link</option>
                </select>
                <button className="btn btn-danger float-right"
                        onClick={e => (dispatch({type: DELETE_WIDGET, id: widget.id})
                )}>Delete</button>
            </div>
            <div>
                {widget.widgetType==='Heading' && <HeadingContainer widget={widget}/>}
                {widget.widgetType==='Paragraph' && <ParagraphContainer widget={widget}/>}
                {widget.widgetType==='List' && <ListContainer widget={widget}/>}
                {widget.widgetType==='Image' && <ImageContainer widget={widget}/>}
                {widget.widgetType==='Link' && <LinkContainer widget={widget}/>}
            </div>
        </li>
    )
}

const findAllWidgets = dispatch => {
    fetch('http://localhost:8080/api/widget')
        .then(response => (response.json()))
        .then(widgets => dispatch({type: 'FIND_ALL_WIDGETS', widgets: widgets}))
};


const dispatchToPropsMapper = dispatch => ({
    headingTextChanged: (widgetId, newText) =>
        actions.headingTextChanged(dispatch, widgetId, newText),
    headingSizeChanged: (widgetId, newSize) =>
        actions.headingSizeChanged(dispatch, widgetId, newSize),
    paragraphTextChanged: (widgetId, newText) =>
        actions.paragraphTextChanged(dispatch, widgetId, newText),
    imageSrcChanged: (widgetId, newSrc) =>
        actions.imageSrcChanged(dispatch, widgetId, newSrc),
    listItemsChanged: (widgetId, newText) =>
        actions.listItemsChanged(dispatch, widgetId, newText),
    listTypeChanged: (widgetId, newType) =>
        actions.listTypeChanged(dispatch, widgetId, newType),
    linkTextChanged: (widgetId, newText) =>
        actions.linkTextChanged(dispatch, widgetId, newText),
    linkHrefChanged: (widgetId, newHref) =>
        actions.linkHrefChanged(dispatch, widgetId, newHref)
})
const stateToPropsMapper = state => ({
    preview: state.preview
})

const HeadingContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Heading)
const ParagraphContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Paragraph)
const ImageContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Image)
const ListContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(List)
const LinkContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Link)


const WidgetContainer = connect(state => ({
    preview: state.preview
}))(Widget)
export default WidgetContainer