import styles from '../styles/ScheduleView.module.scss'

const ScheduleView = ({ closeSchedule }) => {
    return (
        <div className={styles.container}>
            <p className={styles.backButton} onClick={() => closeSchedule()}> {'<'} Back</p>
            <strong>Modules</strong>
        </div>
    )
}

export default ScheduleView