import Head from 'next/head'
import React from 'react'
import appConfig from '../config/app-config.json'
import SplashScreen from '../components/SplashScreen'

const home = () => {
    return (
        <>
        <Head>
            <title>{appConfig.title}</title>
        </Head>
        <main>
            <SplashScreen />
            <h1>CONTENT</h1>
        </main>
        </>
    )
}

export default home