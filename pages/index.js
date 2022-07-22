import ScheduleView from '../components/ScheduleView'
import styles from '../styles/index.module.scss'

export default function Home() {
    return(
        <div>
            <h1 className={styles.title}>Home</h1>
            <ScheduleView />
        </div>
    )
}