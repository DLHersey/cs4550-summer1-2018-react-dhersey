let _singleton = Symbol();
const WIDGET_API_URL = 'http://localhost:8080/api/widget';
const LESSON_API_URL = 'http://localhost:8080/api/lesson';

export default class WidgetService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new WidgetService(_singleton);
        return this[_singleton]
    }

    //CREATE
    createWidget(widget) {
        return fetch(LESSON_API_URL + '/' + widget.lessonId + '/module', {
            body: JSON.stringify(widget),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response) {
               return response.json()
            });
    }

    //READ
    findAllWidgets() {
        return fetch(WIDGET_API_URL)
            .then(function (response) {
            return response.json();
        });
    }

    //UPDATE
    updateWidget() {

    }

    //DELETE
}