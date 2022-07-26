import Head from 'next/head'
import React from 'react'
import appConfig from '../config/app-config.json'
import SplashScreen from '../components/SplashScreen'
import styles from '../styles/home.module.scss'

const home = () => {
    return (
        <>
        <Head>
            <title>{appConfig.title}</title>
        </Head>
        <div className={styles.container}>
            <SplashScreen />
            <main className={styles.content}>
                <h1>CONTENT </h1>
                <h1>CONTENT </h1>
            </main>
        </div>
        </>
    )
}

export default home