const { isArray, isNumber, isString } = require("./index");

describe("check array", () => {
  it("array type is true", () => {
    const value = [1, 2, 3];

    expect(isArray(value)).toBe(true);
  });

  it("object type is false", () => {
    const value = {};

    expect(isArray(value)).toBe(false);
  });
});

describe("check number", () => {
  it("1 is number", () => {
    const value = 1;

    expect(isNumber(value)).toBe(true);
  });

  it("'1' is not a number", () => {
    const value = "1";

    expect(isNumber(value)).not.toBe(true);
  });
});

describe("check string", () => {
  it("'abc' is string", () => {
    const value = "abc";

    expect(isString(value)).toBe(true);
  });

  it("1 is not a string", () => {
    const value = 1;

    expect(isString(value)).not.toBe(true);
  });
});
