import Head from 'next/head'
import React from 'react'
import appConfig from '../config/app-config.json'
import { ScheduleContextWrapper } from '../context/scheduleContext'
import { CourseContextWrapper } from '../context/courseContext'
import { SelectScheduleContextWrapper } from '../context/selectScheduleContext'
import SplashScreen from '../components/SplashScreen'
import styles from '../styles/home.module.scss'
import ScheduleMenu from '../components/ScheduleMenu'
import gsap from 'gsap'
import { StartUpAnimationContextWrapper } from '../context/startUpAnimationContext'

const home = () => {
    // initalise loading timeline
    let tl = gsap.timeline()
    return (
        <>
        <Head>
            <title>{appConfig.title}</title>
        </Head>
        <StartUpAnimationContextWrapper content={tl}>
        <div className={styles.container}>
            <SplashScreen />
            <CourseContextWrapper>
            <ScheduleContextWrapper>
            <SelectScheduleContextWrapper>
            <main className={styles.content}>
                <ScheduleMenu />
                <h1>CONTENT </h1>
            </main>
            </SelectScheduleContextWrapper>
            </ScheduleContextWrapper>
            </CourseContextWrapper>
        </div>
        </StartUpAnimationContextWrapper>
        </>
    )
}

export default home