var { sum, diff } = require("../jest/index.js");
// console.log(sum(3, 3));

describe("test case for sum function ", function () {
	test("sum function is defined", () => {
		expect(sum).toBeDefined();
	});
});

describe("toBe method tests", function () {
	test("tobe", () => {
		// === or equal to
		expect(10).toBe(10);
	});

	test("boolean", () => {
		// Boolean
		expect(true).toBe(true);
	});

	test("object not", () => {
		// object
		expect({}).not.toBe({});
	});

	test("object", () => {
		// object
		const a = {};
		expect(a).toBe(a);
	});
	test("array [] !== []", () => {
		expect([]).not.toBe([]);
	});
});

describe("toEqual", function () {
	test("array [] !== []", () => {
		expect([]).toEqual([]);
	});

	test("array [1,2] is equal to [1,2]", () => {
		expect([1, 2]).toEqual([1, 2]);
	});

	test("array [1,2] is equal to [1,2]", () => {
		var a = [1, 2];
		var b = [1, 2];
		expect(a).toEqual(b);
	});

	test("array [1,2,3] is containing [1,2]", () => {
		var a = [1, 2, 3];
		var b = [1, 2];
		expect(a).toEqual(expect.arrayContaining(b));
	});

	test(" b isEqual contains containg a ", () => {
		var a = [1, 2, 3];
		var b = [1, 2, 3, 4];
		expect(b).toEqual(expect.arrayContaining(a));
	});

	test("not isEqual contains  ", () => {
		var a = [1, 2, 3];
		var b = [1, 2, 3, 4];
		expect(a).not.toEqual(expect.arrayContaining(b));
	});
});

// objects

describe("object checking", () => {
	test(" object check 1", () => {
		expect({ a: 1 }).toEqual({ a: 1 });
	});

	test(" object check 1", () => {
		expect({ b: 1 }).not.toEqual({ a: 1 });
	});

	test("username object check", () => {
		// if
		let obj = { user: "shreedhar", email: "snh@gmail.com" };
		let output = {
			user: expect.any(String),
			email: expect.stringContaining("@gmail.com"),
		};
		expect(obj).toEqual(output);
	});
});

describe("array contains", function () {
	test(" username contains masai ", () => {
		let username = ["shree", "masai", "world"];
		expect(username).toContain("masai");
	});
});

describe("relational checks  ", function () {
	test("100+200<=300", () => {
		expect(100 + 200).toBeLessThanOrEqual(300);
	});
	test("100+100 less than 200", () => {
		expect(100 + 100).toBeLessThan(201);
	});
	test("tobeGreater than ", () => {
		expect(100 + 100).toBeGreaterThan(100);
	});
});

describe("function defined ", function () {
	test("is defined", () => {
		expect(diff).toBeDefined();
	});

	test("returning a value a-b", () => {
		expect(diff(4, 3)).toBe(1);
	});

	test("returning a value a-b", () => {
		expect(diff(4, 3)).toBe(1);
	});
});
