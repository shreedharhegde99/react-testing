import React from "react";

import { cleanup, fireEvent, screen, render } from "@testing-library/react";
import * as actions from "./action";
import reducer from "./reducer";
import App from "../App";
import { Provider } from "react-redux";
import store from "./store";
beforeEach(() =>
	render(
		<Provider store={store}>
			<App />
		</Provider>
	)
);
afterEach(cleanup);

describe("actions add and reduce ", function () {
	it("should create an action to  increment counter by 1", () => {
		const payload = 1;
		const expectedAction = { type: actions.ADD, payload };

		expect(actions.addCount(payload)).toEqual(expectedAction);
	});

	it("should create an action to  decrement counter by 1", () => {
		const payload = 1;
		const expectedAction = { type: actions.REDUCE, payload };

		expect(actions.reduceCount(payload)).toEqual(expectedAction);
	});

	it("should create an action to  increment counter by 5", () => {
		const payload = 5;
		const expectedAction = { type: actions.ADD, payload };

		expect(actions.addCount(payload)).toEqual(expectedAction);
	});
});

describe("counter reducer", () => {
	it("should return initial state", () => {
		expect(reducer(undefined, {})).toEqual({ count: 0 });
	});

	it("should return 8 when count is 5 and addCounter value is 3", () => {
		expect(reducer({ count: 5 }, actions.addCount(3))).toEqual({
			count: 8,
		});
	});
});

describe("event firing with buttons", () => {
	it("should increase the count when clicking add button ", () => {
		const { getAllByTestId, getByTestId } = screen;
		const [add, reduce] = getAllByTestId("button");
		const counter = getByTestId("counter");
		fireEvent.click(add);
		fireEvent.click(add);
		fireEvent.click(add);
		expect(counter).toHaveTextContent(3);
	});
});
