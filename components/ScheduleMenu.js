import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import { MdAdd, MdOutlineFileUpload } from 'react-icons/md'
import { useStartUpAnimationContext } from '../context/startUpAnimationContext'
import styles from '../styles/ScheduleMenu.module.scss'

const ScheduleMenu = ({  }) => {
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
        })  
    }, [timeline])

    return (
        <div className={styles.container} ref={(el) => {containerRef=el}}>
            <div>
                <h2>Schedules</h2>
            </div>
            <div>
                <p>Modules</p>
            </div>
            <div className={styles.buttonContainer}>
                <button><MdAdd /></button>
                <button><MdOutlineFileUpload /></button>
            </div>
        </div>
    )
}

export default ScheduleMenu