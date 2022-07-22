import styles from '../styles/ScheduleView.module.scss'
import { tempModuleData as data } from '../data/tempData'
import { useEffect, useState } from 'react'

//temporary data object

const CourseMenu = () => {
    // state to store module information
    const [moduleList, setmoduleList] = useState([])
    const pushModule = (newModule) => {setmoduleList(moduleList.push(newModule))}
    // read module data on load
    useEffect(() => {
        setmoduleList(data)
    }, [])
    
    return (
        <div className={styles.container}>
            <h2>Courses</h2>
            {/* {moduleList.map((item, index) => <ModuleItem moduleData={item} key={index} />)} */}
            <ModuleEntry pushModule={pushModule} />
        </div>
    )
}

const ModuleItem = ({ moduleData }) => {
    return(
        <div className={styles.moduleItem}>
            <strong>{moduleData.code}</strong>
            <p>{moduleData.name}</p>
        </div>
    )
}

const ModuleEntry = ({ pushModule }) => {
    return(
        <div>
            <p> -- Add Course -- </p>
        </div>
    )
}

export default CourseMenu