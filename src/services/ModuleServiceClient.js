let _singleton = Symbol();
const MODULE_API_URL = 'http://localhost:8080/api/module';
const COURSE_API_URL = 'http://localhost:8080/api/course';
export default class ModuleService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new ModuleService(_singleton);
        return this[_singleton]
    }

    //CREATE
    createModule(module) {
        return fetch(MODULE_API_URL, {
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
    findAllModules() {
        return fetch(MODULE_API_URL)
            .then(function(response) {
                return response.json();
            });
    }
    findModuleById(moduleId) {
        return fetch(MODULE_API_URL+'/'+{moduleId})
            .then(function (response) {
                return response.json();
            });
    }
    findAllModulesForCourse(courseId) {
        return fetch(COURSE_API_URL + '/'+ courseId + '/module')
            .then(function (response) {
                return response.json();
            });
    }

    //UPDATE
    updateModule() {

    }

    //DELETE
    deleteModule(moduleId) {
        console.log('delete' + moduleId);
        return fetch(MODULE_API_URL + '/' + moduleId, {
            method: 'delete'
        }).then(function(response) {
                return response;
            }
        );
    }

}