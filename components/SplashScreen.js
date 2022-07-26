import { gsap, Power3 } from 'gsap'
import { MdOutlineChromeReaderMode } from 'react-icons/md'
import React, { useEffect, useRef } from 'react'
import appConfig from '../config/app-config.json'
import styles from '../styles/SplashScreen.module.scss'
import Head from 'next/head'

const SplashScreen = () => {
    //splash animation on load
    let contentRef = useRef()
    let containerRef = useRef()
    useEffect(() => {
        let tl = gsap.timeline()
        // fade in splash screen
        tl.fromTo(contentRef, {
            opacity: 0
        }, {
            opacity: 1,
            duration: 0.6,
        })
        // splash wave out
        tl.fromTo(containerRef, {
            height: '100%',
        }, {
            height: '0%',
            duration: 0.8,
            delay: 0.5,
            ease: Power3.easeInOut
        })
        // fade into content
        tl.fromTo(contentRef, {
            opacity: 1,
        }, {
            opacity: 0,
            duration: 0.4,
        }, "<25%")
        
    }, [])


    return (
        <>
        <Head>
            <title>{appConfig.title}</title>
        </Head>
        <div className={styles.container} ref={(el) => {containerRef=el}}>
            <div className={styles.content} ref={(el) => {contentRef=el}}>
                <MdOutlineChromeReaderMode />
                <h1>{appConfig.title}</h1>
                <p>created by ESP</p>
            </div>
        </div>
        </>
    )
}

export default SplashScreen