const { isArray } = require("./index");

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
