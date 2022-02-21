import { weightValueFast, weightValueFull } from "."

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

test("test1 simple full", () => {
    expect(weightValueFull(item1, 10)).toBe(17);
});

test("test2 failFast full", () => {
    expect(weightValueFull(item2, 15)).toBe(12);
});

test("test1 simple fast", () => {
    expect(weightValueFast(item1, 10)).toBe(17);
});
// 簡易版では価格重量比の高い順に取るため10を返してしまう
test("test2 failFast fast", () => {
    expect(weightValueFast(item2, 15)).not.toBe(12);
});

