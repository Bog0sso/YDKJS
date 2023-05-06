const DAY_START = "07:30";
const DAY_END   = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
    //1. calculate day start in minutes
    const DAY_START_HOUR = DAY_START.split(':')[0];
    console.log(`DAY_START_HOUR: ${DAY_START_HOUR}`)
    const DAY_START_MINUTE = DAY_START.split(':')[1];
    const DAY_START_IN_MINUTES = parseInt(DAY_START_HOUR) * 60 + parseInt(DAY_START_MINUTE);
    console.log(`DAY_START_IN_MINUTES: ${DAY_START_IN_MINUTES}`)
    
    //2. calculate event start in minutes
    const startTimeHour = startTime.split(':')[0];
    const startTimeMinute = startTime.split(':')[1];
    const startTimeInMinutes = parseInt(startTimeHour) * 60 + parseInt(startTimeMinute);
    console.log(`startTimeInMinutes: ${startTimeInMinutes}`)

    //3. calculate event end in minutes
    const endTimeMinutes = (parseInt(startTimeInMinutes) + parseInt(durationMinutes))
    console.log(`endTimeMinutes: ${endTimeMinutes}`)
    
    // 4. calculate day end in minutes 
    const DAY_END_HOUR = DAY_END.split(':')[0];
    const DAY_END_MINUTE = DAY_END.split(':')[1];
    const DAY_END_IN_MINUTES = parseInt(DAY_END_HOUR) * 60 + parseInt(DAY_END_MINUTE);
    console.log(`DAY_END_IN_MINUTES: ${DAY_END_IN_MINUTES}`)



    return (DAY_START_IN_MINUTES <= startTimeInMinutes && endTimeMinutes <= DAY_END_IN_MINUTES);

}

module.exports= {scheduleMeeting}
