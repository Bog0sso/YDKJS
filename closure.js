/**
 * 
 * @param {*} start 
 * @param {*} end 
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
console.log(range(3,3));
console.log(range(3,8));
console.log(range(3,0));
const start3 = range(3);
const start4 = range(4);
console.log(start3(3));
console.log(start3(8));
console.log(start3(0));
console.log(start4(6));
