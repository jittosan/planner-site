import { createContext, useContext } from "react";

// create course content using React Context API
const CourseContext = createContext()

// context Provider wrapper for App
const CourseContextWrapper = ({ children, content }) => {
    return(
        <CourseContext.Provider value={content}>
            { children }
        </CourseContext.Provider>
    )
}

// context Subscriber
const useCourseContext = () => {
    return useContext(CourseContext)
}

// export context methods
export {
    CourseContextWrapper,
    useCourseContext
}