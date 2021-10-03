const robot = require('./robot').robot;

describe('Robot module', () => {
    // ARRANGE: setup variables or dependencies.
    // The list of commands that will be sent to the Robot script
    const instructions = [
        "PLACE 1,2,NORTH", 
        "REPORT"
    ];
    
    // ACT: execute the function to be tested using the control values created above.
    // Calling each of those commands will produce an Array of results
    const result = instructions.map(i => robot.do(i));
    
    // ASSERT: verify that the requirements of your test were met.
    // BUILD YOUR TESTS HERE
    
    // 1. Test that result is an array.
    test ("the result should be an array", ()=>{
        expect(result).toEqual(expect.arrayContaining(result))
        console.log(result)
    })


    // 2. Test that result[1] is of type object.

    test ("the second element of result should be of type object", ()=>{ 
        expect(result[1]).toHaveProperty('action')
    })

    describe('Validate report values', () => {
        // Create this variable after checking that type is object.
        const report = result[1]; 

        // 3. Test that report contains the properties: action, x, y, and facing.
        test ("report should contain the properties: action, x, y, and facing", ()=>{
            expect(result[1]).toHaveProperty('action' , 'x' , 'y' , 'facing')
        })

        // 4. Test that report.x is a number between 0 and 5.
        test("Report.x should be between 0 and 5", ()=>{
            expect(report.x).toBeGreaterThanOrEqual(0)
            expect(report.x).toBeLessThanOrEqual(5)
        })

        // 5. Test that report.y is a number between 0 and 5.


        // 6. Test that report.facing is one of: NORTH, SOUTH, EAST, or WEST.

    })
})