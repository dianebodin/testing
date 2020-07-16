import { add } from './calculator';


describe("Calculator", () => {

  it("should return 0 when empty string passed in parameters", () => {
    const parameters = "";
    const result = add(parameters);
    expect(result).toEqual(0);
  });


  it("should return 4 when '4' passed in parameters", () => {
    const parameters = "4";
    const result = add(parameters);
    expect(result).toEqual(4);
  });


  it("should return 3 when '1+2' passed in parameters", () => {
    const parameters = "1+2";
    const result = add(parameters);
    expect(result).toEqual(3);
  });


  it("should return 10 when '1+2+3+4' passed in parameters", () => {
    const parameters = "1+2+3+4";
    const result = add(parameters);
    expect(result).toEqual(10);
  });


  it("should return 10 when '1,2+3+4' passed in parameters", () => {
    const parameters = "1\n2+3+4";
    const result = add(parameters);
    expect(result).toEqual(10);
  });

});