"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const item1 = [
    { weight: 5, value: 9 },
    { weight: 8, value: 4 },
    { weight: 4, value: 8 },
    { weight: 7, value: 10 },
    { weight: 6, value: 1 },
];
const item2 = [
    { weight: 10, value: 10 },
    { weight: 8, value: 6 },
    { weight: 7, value: 6 },
];
test("test1 simple fast", () => {
    expect((0, _1.weightValueFast)(item1, 10)).toBe(17);
});
test("test1 simple full", () => {
    expect((0, _1.weightValueFull)(item1, 10)).toBe(17);
});
test("test2 failFast fast", () => {
    expect((0, _1.weightValueFast)(item2, 15)).not.toBe(12);
});
test("test2 failFast full", () => {
    expect((0, _1.weightValueFull)(item2, 15)).toBe(12);
});
