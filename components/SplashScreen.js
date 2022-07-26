import { gsap, Power3 } from 'gsap'
import { MdOutlineChromeReaderMode } from 'react-icons/md'
import React, { useEffect, useRef } from 'react'
import appConfig from '../config/app-config.json'
import styles from '../styles/SplashScreen.module.scss'

let selector = (el, tag) => {return gsap.utils.selector(el)(tag)}

const SplashScreen = () => {
    //ANIMATION EFFECTS
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
            height: '100vh',
        }, {
            height: '10vh',
            duration: 0.8,
            delay: 0.5,
            ease: Power3.easeInOut
        })
        // fade into content
        tl.fromTo(selector(contentRef, "h1"), {
            fontSize: '4rem',
        }, {
            fontSize: '1.5rem',
            duration: 0.4,
        }, "<25%")
        tl.fromTo(selector(contentRef, 'p'), {
            opacity: 1,
            scale: 1
        }, {
            opacity: 0,
            scale: 0.5,
            duration: 0.4
        }, "<25%")
    
    }, [])


    return (
        <div className={styles.container} ref={(el) => {containerRef=el}}>
            <div className={styles.content} ref={(el) => {contentRef=el}}>
                {/* <MdOutlineChromeReaderMode /> */}
                <h1>{appConfig.title}</h1>
                {/* <p>by ESP</p> */}
            </div>
        </div>
    )
}

export default SplashScreen