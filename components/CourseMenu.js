import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import { useStartUpAnimationContext } from '../context/startUpAnimationContext'
import styles from '../styles/CourseMenu.module.scss'

const CourseMenu = ({  }) => {
    // ANIMATE LOAD-IN
    let containerRef = useRef()
    let timeline = useStartUpAnimationContext()
    useEffect(() => {
        // if (timeline===undefined) {let timeline = gsap.timeline({delay: 1.6})}
        timeline.fromTo(containerRef, {
            opacity: 0,
            y: 100
        }, {
            opacity: 1,
            y : 0,
            duration: 0.6
        }, "<=25%")  
    }, [timeline])

    return (
        <div className={styles.container} ref={(el) => {containerRef=el}}>
            <div>
            <h2>Courses</h2>
            </div>
            <div>
                <p>Modules</p>
            </div>
            <div>
                <p>Buttons</p>
            </div>
        </div>
    )
}

export default CourseMenu