import { SimpleAdder } from "../src/main";

describe('Simple adder', () => {

  // Assert greeter result
  it('Simple adder should properly add numbers', () => {
    // arrange
    let simpleAdder = new SimpleAdder();
    const number1 =  3;
    const number2 = 2;

    // act
    const response = simpleAdder.AddStuff(number1, number2);

    // assert
    expect(response).toEqual(5);
  });  
  
});
