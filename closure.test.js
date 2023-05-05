const { range } = require("./closure.js");
test('range(3,3) should return [3]',()=>{
    expect(range(3,3)).toStrictEqual([3]);
})

test('range(3,8) should return [3,4,5,6,7,8]',()=>{
    expect(range(3,8)).toStrictEqual([3,4,5,6,7,8]);
})


test('range(3,0) should return []',()=>{
    expect(range(3,0)).toStrictEqual([]);
})

test('start3(3) should return [3]',()=>{
    const start3 = range(3);
    expect(start3(3)).toStrictEqual([3]);
    expect(start3(8)).toStrictEqual([3,4,5,6,7,8]);
    expect(start3(0)).toStrictEqual([]);

})

test('start4() should return [4,5,6]',()=>{
    const start4 = range(4);
    expect(start4(6)).toStrictEqual([4,5,6]);

})