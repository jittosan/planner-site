import { createContext, useContext } from "react";

// create schedule content using React Context API
const StartUpAnimationContext = createContext()

// context Provider wrapper for App
const StartUpAnimationContextWrapper = ({ children, content }) => {
    return(
        <StartUpAnimationContext.Provider value={content}>
            { children }
        </StartUpAnimationContext.Provider>
    )
}

// context Subscriber
const useStartUpAnimationContext = () => {
    return useContext(StartUpAnimationContext)
}

// export context methods
export {
    StartUpAnimationContextWrapper,
    useStartUpAnimationContext
}