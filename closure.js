/**
 * 
 * @param {Number} start 
 * @param {Number} end 
 *the end parameter is inclusive
 *If the second
 *argument is omitted, then another function should be returned that expects
 *that argument.
 */
function range(start, end) {
    // let's code the ideal flow first
    
    if (null == end) {
        return (end) => {
            let array = [];
            for (let index = start; index <= end; index++) {
                array.push(index)
            }
        return array;
        }
    }
    
    let array = [];
    for (let index = start; index <= end; index++) {
        array.push(index)
    }
    return array;
    

}


module.exports= {range}