import CourseMenu from '../components/CourseMenu'
import ScheduleMenu from '../components/ScheduleMenu'
import Sidebar from '../components/Sidebar'
import styles from '../styles/index.module.scss'

export default function Home() {
    return(
        <main className={styles.main}>
            <div className={styles.titleCard}>
                <h1 className={styles.title}>Academic Planner<span>by ESP</span></h1>
            </div>
            {/* <Sidebar /> */}
            <div className={styles.content}>
                <ScheduleMenu />
                <CourseMenu />
            </div>
        </main>
    )
}