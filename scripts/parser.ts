/*
 *      PARSE SAVED FILES TO READ INTO SYSTEM
 *
 *
 *
 *
 */

import nanoSchedule from '../data/sch-nano'
import basicSchedule from '../data/sch-basic'
import philoSchedule from '../data/sch-philo'

const loadScheduleDataTEMP = () : Object[] => {
    const files = [nanoSchedule, basicSchedule, philoSchedule]
    let scheduleData : Object[] = []
    
    files.map((currFile) => {scheduleData.push(currFile)})
    return scheduleData
}

export {loadScheduleDataTEMP}