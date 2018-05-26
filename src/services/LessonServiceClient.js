let _singleton = Symbol();
const MODULE_API_URL = 'https://arcane-oasis-72546.herokuapp.com//api/module';
const LESSON_API_URL = 'https://arcane-oasis-72546.herokuapp.com//api/lesson';
export default class LessonService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new LessonService(_singleton);
        return this[_singleton]
    }

    //CREATE
    createLesson(lesson) {
        return fetch(LESSON_API_URL, {
            body: JSON.stringify(module),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response) {
            return response.json();
        });
    }

    //READ
    findAllLessons() {
        return fetch(LESSON_API_URL)
            .then(function(response) {
                return response.json();
            });
    }
    findLessonById(lessonId) {
        return fetch(LESSON_API_URL+'/'+lessonId)
            .then(function (response) {
                return response.json();
            });
    }
    findAllLessonsForModule(courseId, moduleId) {
        return fetch('http://localhost:8080/api/course'+'/'+courseId+'/module/'+moduleId+'/lesson')
            .then(function (response) {
                return response.json();
            });
    }

    //UPDATE
    updateLesson() {

    }

    //DELETE
    deleteLesson(lessonId) {
        console.log('delete' + lessonId);
        return fetch(LESSON_API_URL + '/' + lessonId, {
            method: 'delete'
        }).then(function(response) {
                return response;
            }
        );
    }

}