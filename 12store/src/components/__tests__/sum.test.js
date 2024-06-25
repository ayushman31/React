import { sum } from "../sum"

test ("Sum function calculates the sum of two numbers", ()=>{             //the test function takes two aarguments: a string(gives the description of the test) and a callback function(implementation of the test case).

    const result = sum(3,5);

    //Assertion
    expect(result).toBe(8);
});