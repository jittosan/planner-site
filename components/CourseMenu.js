import { gsap } from 'gsap'
import React, { useEffect, useRef } from 'react'
import { MdAdd, MdOutlineFileUpload } from 'react-icons/md'
import { useCourseContext } from '../context/courseContext'
import { useStartUpAnimationContext } from '../context/startUpAnimationContext'
import styles from '../styles/CourseMenu.module.scss'

const CourseMenu = ({  }) => {
    // load course data from context
    let courseData = useCourseContext()

    // ANIMATE LOAD-IN
    let containerRef = useRef()
    let timeline = useStartUpAnimationContext()
    useEffect(() => {
        // if (timeline===undefined) {let timeline = gsap.timeline({delay: 1.6})}
        timeline.fromTo(containerRef, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y : 0,
            duration: 0.5
        }, "<=10%")  
    }, [timeline])

    return (
        <div className={styles.container} ref={(el) => {containerRef=el}}>
            <div className={styles.headerContainer}>
                <h2>Courses</h2>
                <p>Your courses & programmes</p>
            </div>
            <div className={styles.courseContainer}>
            {courseData.map((_, index) => {return <CourseMenuItem key={index} index={index} />})}
            </div>
            <div className={styles.buttonContainer}>
                <button><MdAdd /></button>
                <button><MdOutlineFileUpload /></button>
            </div>
        </div>
    )
}

export default CourseMenu

const CourseMenuItem = ({ index }) => {
    // get individual Course data
    let course = useCourseContext()[index]

    return(
        <div className={styles.courseMenuItem}>
            <strong>{course.name}</strong>
            <span className={styles.typeTag}>{course.type}</span>
        </div>
    )
}