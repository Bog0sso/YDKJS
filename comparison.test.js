const { scheduleMeeting } = require("./comparison.js");
test(' DAY_START = 07:30, DAY_END=17:45 ----scheduleMeeting("7:00",15) should return false',()=>{
    const DAY_START = "07:30";
    const DAY_END   = "17:45";
    // expect(scheduleMeeting("7:00",15)).toBe(true);
    expect(scheduleMeeting("7:00",15)).toBe(false)

})


test(' DAY_START = 07:30, DAY_END=17:45 ----scheduleMeeting("7:15",30) should return false',()=>{
    const DAY_START = "07:30";
    const DAY_END   = "17:45";
    expect(scheduleMeeting("07:15",30)).toBe(false)

})

test(' DAY_START = 07:30, DAY_END=17:45 ----scheduleMeeting("7:15",30) should return true',()=>{
    const DAY_START = "07:30";
    const DAY_END   = "17:45";
    expect(scheduleMeeting("7:30",30)).toBe(true)

})

test(' DAY_START = 07:30, DAY_END=17:45 ----scheduleMeeting("11:30",60) should return true',()=>{
    const DAY_START = "07:30";
    const DAY_END   = "17:45";
    expect(scheduleMeeting("11:30",60)).toBe(true)
})

test(' DAY_START = 07:30, DAY_END=17:45 ----scheduleMeeting("17:00",45) should return true',()=>{
    const DAY_START = "07:30";
    const DAY_END   = "17:45";
    expect(scheduleMeeting("17:00",45)).toBe(true)
    
})


test(' DAY_START = 07:30, DAY_END=17:45 ----scheduleMeeting("17:30",30) should return false',()=>{
    const DAY_START = "07:30";
    const DAY_END   = "17:45";
    expect(scheduleMeeting("17:30",30)).toBe(false)
    
})



test(' DAY_START = 07:30, DAY_END=17:45 ----scheduleMeeting("18:00",15) should return false',()=>{
    const DAY_START = "07:30";
    const DAY_END   = "17:45";
    expect(scheduleMeeting("18:00",15)).toBe(false)
    
})