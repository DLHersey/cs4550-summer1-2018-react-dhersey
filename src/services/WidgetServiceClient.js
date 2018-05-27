let _singleton = Symbol();
const LESSON_API_URL = 'http://localhost:8080/api/widget';
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

    //READ

    //UPDATE

    //DELETE
}