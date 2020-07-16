import { intervalToObject } from './interval';


describe("Interval", () => {

  it("should return an object for 0 second", () => {
    const o = intervalToObject(0);
    expect(o).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    });
  });


  it("should return an object for 3 seconds", () => {
    const o = intervalToObject(3*1000);
    expect(o).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 3
    });
  });


  it("should return an object for 15 seconds", () => {
    const o = intervalToObject(15*1025);
    expect(o).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 15
    });
  });


  it("should return an object for 1mn", () => {
    const o = intervalToObject(60*1000);
    expect(o).toEqual({
      days: 0,
      hours: 0,
      minutes: 1,
      seconds: 0
    });
  });


  it("should return an object for 3mn15s", () => {
    const o = intervalToObject(3*60*1000 + 15*1025);
    expect(o).toEqual({
      days: 0,
      hours: 0,
      minutes: 3,
      seconds: 15
    });
  });


  it("should return an object for 3h3mn15s", () => {
    const o = intervalToObject(3*60*60*1000 + 3*60*1000 + 15*1025);
    expect(o).toEqual({
      days: 0,
      hours: 3,
      minutes: 3,
      seconds: 15
    });
  });


  it("should return an object for 3h3mn15s", () => {
    const o = intervalToObject(3*60*60*1000 + 3*60*1000 + 15*1025);
    expect(o).toEqual({
      days: 0,
      hours: 3,
      minutes: 3,
      seconds: 15
    });
  });


  it("should handle negative number", () => {
    const o = intervalToObject(3*60*60*1000 + 3*60*1000 + 15*1025);
    expect(o).toEqual({
      days: 0,
      hours: 3,
      minutes: 3,
      seconds: 15
    });
  });

});