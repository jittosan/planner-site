import React, { useEffect, useRef } from 'react'
import { MdAdd, MdOutlineFileUpload } from 'react-icons/md'
import { useScheduleContext } from '../context/scheduleContext'
import { useSelectScheduleContext } from '../context/selectScheduleContext'
import { useStartUpAnimationContext } from '../context/startUpAnimationContext'
import styles from '../styles/ScheduleMenu.module.scss'

const ScheduleMenu = ({  }) => {
    // get schedule data from context
    let scheduleData = useScheduleContext()

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
        }, "<=25%")  
    }, [timeline])

    return (
        <div className={styles.container} ref={(el) => {containerRef=el}}>
            <div className={styles.headerContainer}>
                <h2>Schedules</h2>
            </div>
            <div className={styles.scheduleContainer}>
                {scheduleData.map((item, index) => {return <ScheduleMenuItem key={index} index={index} />})}
            </div>
            <div className={styles.buttonContainer}>
                <button><MdAdd /></button>
                <button><MdOutlineFileUpload /></button>
            </div>
        </div>
    )
}

export default ScheduleMenu

const ScheduleMenuItem = ({ index }) => {
    // get individual schedule data
    let schedule = useScheduleContext()[index]
    // define schedule selection method
    let [_, setSelectedScheduleIndex] = useSelectScheduleContext()
    let selectSchedule = () => {
        console.log('select', index)
        setSelectedScheduleIndex(index)
    }

    return(
        <div className={styles.scheduleMenuItem} onClick={() => selectSchedule()}>
            <strong>{schedule.name}</strong>
        </div>
    )
}