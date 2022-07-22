import styles from '../styles/ScheduleMenu.module.scss'
import { exampleSchedules as data } from '../data/tempData'
import { useEffect, useState } from 'react'
import ScheduleView from './ScheduleView'

//temporary data object

const ScheduleMenu = () => {
    // state of opened menu, null if unopened
    const [selectedScheduleIndex, setSelectedScheduleIndex] = useState(null)
    const openSchedule = (index) => {setSelectedScheduleIndex(index)}
    const closeSchedule = () => {setSelectedScheduleIndex(null)}
    const isScheduleOpened = () => {return selectedScheduleIndex!==null}
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
            {
                isScheduleOpened() ? 
                    <>
                    <ScheduleView closeSchedule={closeSchedule} />
                    </>
                    : 
                    <>
                    {scheduleList.map((item, index) => <ScheduleItem scheduleData={item} selectSchedule={openSchedule} key={index} />)}
                    <ScheduleEntry />
                    </>
            }
        </div>
    )
}

const ScheduleItem = ({ scheduleData, selectSchedule }) => {
    
    return(
        <div className={styles.scheduleItem} onClick={() => selectSchedule()}>
            <strong>{scheduleData.code}</strong>
            <p>{scheduleData.name}</p>
        </div>
    )
}

const ScheduleEntry = ({  }) => {
    return(
        <div className={styles.scheduleEntry}>
            <button className={styles.addButton}>Add</button>
            <button className={styles.uploadButton}>Upload</button>
        </div>
    )
}

export default ScheduleMenu