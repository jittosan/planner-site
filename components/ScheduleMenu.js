import { gsap, Power3 } from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import { MdAdd, MdOutlineFileUpload } from 'react-icons/md'
import { useScheduleContext } from '../context/scheduleContext'
import { useSelectScheduleContext } from '../context/selectScheduleContext'
import { useStartUpAnimationContext } from '../context/startUpAnimationContext'
import { refChildSelector } from '../scripts/utils'
import styles from '../styles/ScheduleMenu.module.scss'

const ScheduleMenu = ({  }) => {
    // get schedule data from context
    let scheduleData = useScheduleContext()
    // get selected schedule data from context
    let [selectedScheduleIndex, setselectedScheduleIndex] = useSelectScheduleContext()
    const isScheduleSelected = () => {return selectedScheduleIndex!==-1}
    const resetSchedule = () => {
        let tl = gsap.timeline()
        tl.fromTo(containerRef, {
            y: 0,
            opacity: 1
        }, {
            y:-20,
            opacity: 0,
            duration: 0.3,
            ease: Power3.easeInOut
        })
        tl.fromTo(containerRef, {
            y: -20,
            opacity: 0
        }, {
            y:0,
            opacity: 1,
            duration: 0.3,
            ease: Power3.easeInOut
        }, "<=75%")
        setselectedScheduleIndex(-1)
    }
    const selectSchedule = (index) => {
        let tl = gsap.timeline()
        tl.fromTo(containerRef, {
            y: 0,
            opacity: 1
        }, {
            y:-20,
            opacity: 0,
            duration: 0.3,
            ease: Power3.easeInOut
        })
        tl.fromTo(containerRef, {
            y: -20,
            opacity: 0
        }, {
            y:0,
            opacity: 1,
            duration: 0.3,
            ease: Power3.easeInOut
        }, "<=75%")
        setselectedScheduleIndex(index)
    }

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
                {
                    isScheduleSelected() ?
                    <>
                    <h2>{scheduleData[selectedScheduleIndex].name}</h2>
                    <p>{scheduleData[selectedScheduleIndex].description}</p>
                    </>
                    :
                    <>
                    <h2>Schedules</h2>
                    <p>Your academic schedules</p>
                    </>
                }
            </div>
            {
                isScheduleSelected() ?
                <>
                    <p onClick={() => resetSchedule()}>Selected</p>
                </>
                :
                <>
                    <div className={styles.scheduleContainer}>
                        {scheduleData.map((item, index) => {return <ScheduleMenuItem key={index} index={index} onSelect={() => selectSchedule(index)} />})}
                    </div>
                    <div className={styles.buttonContainer}>
                        <button><MdAdd /></button>
                        <button><MdOutlineFileUpload /></button>
                    </div>
                </>
            }
        </div>
    )
}

export default ScheduleMenu

const ScheduleMenuItem = ({ index, onSelect }) => {
    // get individual schedule data
    let schedule = useScheduleContext()[index]

    // ANIMATION EFFECTS
    let containerRef = useRef()
    const [hover, setHover] = useState(false)
    useEffect(() => {
        // on hover over
        if (hover) {
            gsap.fromTo(refChildSelector(containerRef, 'strong'), {
                // opacity: 1,
                x: 0,
                scale:1,
            }, {
                // opacity: 0.5,
                x: 100,
                scale:1.1,
                duration: 0.2
            })
        }
        // on hover out
        else {
            gsap.fromTo(refChildSelector(containerRef, 'strong'), {
                // opacity: 0.5,
                x: 100
            }, {
                // opacity: 1,
                x: 0,
                duration: 0.2
            })
        }
    }, [hover])

    return(
        <div 
        className={styles.scheduleMenuItem} 
        ref={(el) => {containerRef = el}}
        onMouseOver={() => {setHover(true)}}
        onMouseOut={() => {setHover(false)}}
        onClick={() => onSelect()}
        >
            <strong>{schedule.name}</strong>
        </div>
    )
}