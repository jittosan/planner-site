import { gsap, Power3 } from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import { MdAdd, MdOutlineFileUpload } from 'react-icons/md'
import { IoArrowBack } from 'react-icons/io5'
import { useScheduleContext } from '../context/scheduleContext'
import { useSelectScheduleContext } from '../context/selectScheduleContext'
import { useStartUpAnimationContext } from '../context/startUpAnimationContext'
import { refChildSelector } from '../scripts/utils'
import SemesterView from './SemesterView'
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
            x: 0,
            opacity: 1,
        }, {
            x:-10,
            opacity: 0,
            duration: 0.2,
            ease: Power3.easeInOut,
            
        })
        tl.add(() => {setselectedScheduleIndex(-1)}, ">-35%")
        tl.fromTo(containerRef, {
            x: -10,
            opacity: 0,
        }, {
            x:0,
            opacity: 1,
            duration: 0.2,
            ease: Power3.easeInOut
        }, "<=40%")
        // setselectedScheduleIndex(-1)
    }
    const selectSchedule = (index) => {
        let tl = gsap.timeline()
        tl.fromTo(containerRef, {
            x: 0,
            opacity: 1,
            
        }, {
            x:-10,
            opacity: 0,
            duration: 0.2,
            ease: Power3.easeInOut
        })
        // swipe down buttons?
        tl.add(() => {setselectedScheduleIndex(index)}, ">-35%")
        tl.fromTo(containerRef, {
            x: -10,
            opacity: 0,
        }, {
            x:0,
            opacity: 1,
            duration: 0.2,
            ease: Power3.easeInOut
        }, "<=40%")
        
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
                    <button className={styles.backButton} onClick={() => resetSchedule()}><IoArrowBack /></button>
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
                    <SemesterView />
                </>
                :
                <>
                    <div className={styles.scheduleContainer}>
                        {
                            scheduleData.length===0 ?
                            <p className={styles.noScheduleText}>You currently do not have any schedules created. <br /><br />
                            Create/Upload schedules using the options below.</p>
                            :
                            scheduleData.map((item, index) => {return <ScheduleMenuItem key={index} index={index} onSelect={() => selectSchedule(index)} />})
                        }
                    </div>
                    <ScheduleMenuButtonTray />
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

const ScheduleMenuButtonTray = ({  }) => {
    // ANIMATION EFFECTS
    let containerRef = useRef([])
    useEffect(() => {
        let tl = gsap.timeline()
        tl.fromTo(containerRef, {
            opacity: 0,
            y: 5
        }, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            delay: 0.1,
            ease: Power3.easeInOut
        })
    }, [])

    return(
        <div className={styles.buttonContainer} ref={(el) => {containerRef=el}}>
            <button><MdAdd /></button>
            <button><MdOutlineFileUpload /></button>
        </div>
    )
}