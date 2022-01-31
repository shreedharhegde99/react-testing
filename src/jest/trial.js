function test(desc, fn) {
	console.log(desc);
	fn();
}

function expect(received) {
	function toBe(expected) {
		if (expected === received) {
			console.log("test passed ");
		} else {
			console.log("test failed");
			console.log("expected:", expected);
			console.log("received:", received);
		}
	}
	return { toBe };
}

test("add 1 and 2,sum should be 3", () => {
	expect(1 + 2).toBe(3);
});

test("multiply", () => {
	expect(5 * 2).toBe(1);
});
