import { createContext, useContext } from "react";

// create schedule content using React Context API
const ScheduleContext = createContext()

// context Provider wrapper for App
const ScheduleContextWrapper = ({ children, content }) => {
    return(
        <ScheduleContext.Provider value={content}>
            { children }
        </ScheduleContext.Provider>
    )
}

// context Subscriber
const useScheduleContext = () => {
    return useContext(ScheduleContext)
}

// export context methods
export {
    ScheduleContextWrapper,
    useScheduleContext
}