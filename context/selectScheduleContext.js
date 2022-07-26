import { createContext, useContext } from "react";

// create schedule content using React Context API
const SelectScheduleContext = createContext()

// context Provider wrapper for App
const SelectScheduleContextWrapper = ({ children }) => {
    const [selectedScheduleIndex, setSelectedScheduleIndex] = useState(0)
    return(
        <SelectScheduleContext.Provider value={''}>
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