import styles from '../styles/CourseMenu.module.scss'
import { exampleCourses as data } from '../data/tempData'
import { useEffect, useState } from 'react'

//temporary data object

const CourseMenu = () => {
    // state to store course information
    const [courseList, setCourseList] = useState([])
    const pushCourse = (newCourse) => {setCourseList(courseList.push(newModule))}
    // read module data on load
    useEffect(() => {
        setCourseList(data)
    }, [])
    
    return (
        <div className={styles.container}>
            <h2>Courses</h2>
            <i>Primary Majors, Second Majors, Minors, Specialisations, Special Programmes</i>
            {courseList.map((item, index) => <CourseItem courseData={item} key={index} />)}
            <ModuleEntry pushCourse={pushCourse} />
        </div>
    )
}

const CourseItem = ({ courseData }) => {
    return(
        <div className={styles.moduleItem}>
            {/* <strong>{moduleData.code}</strong> */}
            <p>{courseData.name}</p>
        </div>
    )
}

const ModuleEntry = ({ pushModule }) => {
    return(
        <div>
            <p> -- Add Course -- </p>
        </div>
    )
}

export default CourseMenu