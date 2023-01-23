import React from 'react'
import { useScheduleContext } from '../context/scheduleContext'
import { useSelectScheduleContext } from '../context/selectScheduleContext'
import styles from '../styles/ScheduleView.module.scss'

const ScheduleView = () => {
    // get semester data from context
    let [selectedScheduleIndex, _] = useSelectScheduleContext()
    let scheduleData = useScheduleContext()[selectedScheduleIndex]
    console.log(scheduleData)
    return(
        <>
        <div className={styles.container}>
            <ScheduleSemesterItem />
            <ScheduleSemesterItem />
            <ScheduleSemesterItem />
            <ScheduleSemesterItem />
        </div>
        </>
    )
}

export default ScheduleView

const ScheduleSemesterItem = ({  }) => {
    return(
        <div className={styles.semesterItem}>
            <p>Semester</p>
        </div>
    )
}