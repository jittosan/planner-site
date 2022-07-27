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
import CourseMenu from '../components/CourseMenu'

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
            <CourseContextWrapper content={courseData}>
            <ScheduleContextWrapper content={scheduleData}>
            <SelectScheduleContextWrapper>
            <main className={styles.content}>
                <ScheduleMenu />
                <CourseMenu />
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

let scheduleData = [
    {
        name: 'Basic Plan'
    },
    {
        name: 'Double Major - Physics'
    },
    {
        name: 'Double Major - IDP'
    }
]

let courseData = [
    {
        name: 'Engineering Science Programme (ESP)',
        type: 'Major'
    },
    {
        name: 'Physics',
        type: '2nd Major'
    },
    {
        name: 'Innovation & Design Programme (IDP)',
        type: '2nd Major'
    }
]