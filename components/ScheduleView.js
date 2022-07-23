import styles from '../styles/ScheduleView.module.scss'

const ScheduleView = ({ closeSchedule }) => {
    return (
        <div className={styles.container}>
            <strong>Modules</strong>
        </div>
    )
}

const ModuleItem = () => {
    return(
        <div>
            <strong>Code</strong>
            <p>title</p>
        </div>
    )
}

export default ScheduleView