import * as constants from "../constants/index"

//HEADING
export const headingTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.HEADING_TEXT_CHANGED,
        id: widgetId,
        text: newText})
)
export const headingSizeChanged = (dispatch, widgetId, newSize) => (
    dispatch({
        type: constants.HEADING_SIZE_CHANGED,
        id: widgetId,
        size: newSize})
)

//PARAGRAPH
export const paragraphTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.PARAGRAPH_TEXT_CHANGED,
        id: widgetId,
        text: newText})
)

//IMAGE
export const imageSrcChanged = (dispatch, widgetId, newSrc) => (
    dispatch({
        type: constants.IMAGE_SRC_CHANGED,
        id: widgetId,
        src: newSrc})
)

//LIST
export const listItemsChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.LIST_ITEMS_CHANGED,
        id: widgetId,
        listItems: newText})
)
export const listTypeChanged = (dispatch, widgetId, newType) => (
    dispatch({
        type: constants.LIST_TYPE_CHANGED,
        id: widgetId,
        listType: newType})
)

//LINK
export const linkTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.LINK_TEXT_CHANGED,
        id: widgetId,
        text: newText})
)
export const linkHrefChanged = (dispatch, widgetId, newHref) => (
    dispatch({
        type: constants.LINK_HREF_CHANGED,
        id: widgetId,
        href: newHref})
)




export const findAllWidgets = dispatch => {
    fetch('http://localhost:8080/api/widget')
        .then(response => (response.json()))
        .then(widgets => dispatch({
            type: constants.FIND_ALL_WIDGETS,
            widgets: widgets }))
}
export const addWidget = dispatch => (
    dispatch({type: constants.ADD_WIDGET})
)
export const save = dispatch => (
    dispatch({type: constants.SAVE})
)
export const preview = dispatch => (
    dispatch({type: constants.PREVIEW})
)