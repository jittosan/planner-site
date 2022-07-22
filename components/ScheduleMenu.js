import styles from '../styles/ScheduleMenu.module.scss'
import { exampleSchedules as data } from '../data/tempData'
import { useEffect, useState } from 'react'

//temporary data object

const ScheduleMenu = () => {
    // state to store module information
    const [scheduleList, setScheduleList] = useState([])
    const pushSchedule = (newSchedule) => {setScheduleList(scheduleList.push(newSchedule))}
    // read module data on load
    useEffect(() => {
        setScheduleList(data)
    }, [])
    
    return (
        <div className={styles.container}>
            <h2>Schedules</h2>
            {scheduleList.map((item, index) => <ScheduleItem scheduleData={item} key={index} />)}
            <ScheduleEntry pushSchedule={pushSchedule} />
        </div>
    )
}

const ScheduleItem = ({ scheduleData }) => {
    return(
        <div className={styles.moduleItem}>
            <strong>{scheduleData.code}</strong>
            <p>{scheduleData.name}</p>
        </div>
    )
}

const ScheduleEntry = ({ pushModule }) => {
    return(
        <div>
            <p> -- Add Schedule -- </p>
        </div>
    )
}

export default ScheduleMenu