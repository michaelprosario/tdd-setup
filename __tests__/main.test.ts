import { Add } from "../src/main";


// https://github.com/ardalis/kata-catalog/blob/master/katas/String%20Calculator.md

describe('Add function', () => {

  it('Add should properly add numbers', () => {
    // arrange
    let input = "3,5";

    // act
    const response = Add(input);

    // assert
    expect(response).toEqual(8);
  });  

  it('Given an empty string should return zero', () => {
    // arrange
    let input = "";

    // act
    const response = Add(input);

    // assert
    expect(response).toEqual(0);
  });  

});

