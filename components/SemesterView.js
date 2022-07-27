import React, { useState } from 'react'
import { useScheduleContext } from '../context/scheduleContext'
import { useSelectScheduleContext } from '../context/selectScheduleContext'
import styles from '../styles/SemesterView.module.scss'

const SemesterView = () => {
    // get schedule data
    let [selectedScheduleIndex, _] = useSelectScheduleContext()
    let scheduleData = useScheduleContext()[selectedScheduleIndex]
    // state to store current sem being displayed
    const [currentSemesterIndex, setCurrentSemesterIndex] = useState(0)
    let currentSemData = scheduleData.semesters[currentSemesterIndex]

    return (
        <>
        <div className={styles.scheduleContainer}>
            <div className={styles.headerContainer}>
                <h3>{currentSemData.name}</h3>
                <p>Y{currentSemData.year} S{currentSemData.sem} |  <span>{currentSemData.acadYear}</span></p>
            </div>
            <div className={styles.moduleContainer}>
                {currentSemData.modules.map((item, index) => <SemesterModuleItem moduleData={item} key={index} />)}
            </div>
            <SemesterModuleEntry />
        </div>
        <div className={styles.footerContainer}>
            <p>Pages</p>
        </div>
        </>
    )
}

export default SemesterView

const SemesterModuleItem = ({ moduleData }) => {

    return(
        <div className={styles.semesterModuleItem}>
            <span>{moduleData}</span>
            <p>Module Title</p>
        </div>
    )
}

const SemesterModuleEntry = ({  }) => {
    return(
        <form className={styles.moduleEntry}>
            <label>New Module: </label>
            <input placeholder='Module code..' />
        </form>
    )
}