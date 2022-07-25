/*
 *      CLASS DEFINITION FOR COURSE
 *
 *
 *
 */

class Course {
    meta: { name: string; acadYear: string }
    modules: Object[];

    constructor(data ?: any) {
        // initialise empty values
        this.initalise()
        //if data is input on constructor, load data
        if (data!==undefined) {this.load(data)}
        
    }

    initalise() : boolean {
        // initialise empty values
        this.meta.name = ''
        this.meta.acadYear = ''
        this.modules = []
        return true
    }

    load(data : any) : boolean {
        // validate input schema FIRST, return false if invalid
        // load in values from data
        this.meta.name = data.meta.name
        this.meta.acadYear = data.meta.acadYear
        this.modules = data.modules
        return true
    }
}

class CourseParser {

}

export { Course, CourseParser }