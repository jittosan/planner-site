import styles from '../styles/ScheduleView.module.scss'
import { tempModuleData as data } from '../data/tempData'
import { useEffect, useState } from 'react'

//temporary data object

const ScheduleView = () => {
    // state to store module information
    const [moduleList, setmoduleList] = useState([])
    const pushModule = (newModule) => {setmoduleList(moduleList.push(newModule))}
    // read module data on load
    useEffect(() => {
        setmoduleList(data)
    }, [])
    
    return (
        <div className={styles.container}>
            <strong>Modules:</strong>
            {moduleList.map((item, index) => <ModuleItem moduleData={item} key={index} />)}
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
            <p> -- Add Module -- </p>
        </div>
    )
}

export default ScheduleView