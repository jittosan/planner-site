import { createContext, useContext, useState } from "react";

// create schedule content using React Context API
const SelectScheduleContext = createContext()

// context Provider wrapper for App
const SelectScheduleContextWrapper = ({ children }) => {
    const [selectedScheduleIndex, setSelectedScheduleIndex] = useState(-1)
    return(
        <SelectScheduleContext.Provider value={[selectedScheduleIndex, setSelectedScheduleIndex]}>
            { children }
        </SelectScheduleContext.Provider>
    )
}

// context Subscriber
const useSelectScheduleContext = () => {
    return useContext(SelectScheduleContext)
}

// export context methods
export {
    SelectScheduleContextWrapper,
    useSelectScheduleContext
}