import React from "react";

import { cleanup, fireEvent, screen, render } from "@testing-library/react";
import * as actions from "./action";
import reducer from "./reducer";
import App from "../App";
import { Provider } from "react-redux";
import store from "./store";
import createMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
	ADD,
	REDUCE,
	GET_TODO,
	GET_TODO_SUCCESS,
	GET_TODO_FAILURE,
	addCount,
	reduceCount,
	getTodo,
	getTodoRequest,
	getTodoSuccess,
	getTodoFailure,
} from "./action";

const axiosMocker = new MockAdapter(axios);

// beforeEach(() =>
// 	render(
// 		<Provider store={store}>
// 			<App />
// 		</Provider>
// 	)
// );
// afterEach(cleanup);

// describe("actions add and reduce ", function () {
// 	it("should create an action to  increment counter by 1", () => {
// 		const payload = 1;
// 		const expectedAction = { type: actions.ADD, payload };

// 		expect(actions.addCount(payload)).toEqual(expectedAction);
// 	});

// 	it("should create an action to  decrement counter by 1", () => {
// 		const payload = 1;
// 		const expectedAction = { type: actions.REDUCE, payload };

// 		expect(actions.reduceCount(payload)).toEqual(expectedAction);
// 	});

// 	it("should create an action to  increment counter by 5", () => {
// 		const payload = 5;
// 		const expectedAction = { type: actions.ADD, payload };

// 		expect(actions.addCount(payload)).toEqual(expectedAction);
// 	});
// });

// describe("counter reducer", () => {
// 	it("should return initial state", () => {
// 		expect(reducer(undefined, {})).toEqual({ count: 0 });
// 	});

// 	it("should return 8 when count is 5 and addCounter value is 3", () => {
// 		expect(reducer({ count: 5 }, actions.addCount(3))).toEqual({
// 			count: 8,
// 		});
// 	});
// });

// describe("event firing with buttons", () => {
// 	it("should increase the count when clicking add button ", () => {
// 		const { getAllByTestId, getByTestId } = screen;
// 		const [add, reduce] = getAllByTestId("button");
// 		const counter = getByTestId("counter");
// 		fireEvent.click(add);
// 		fireEvent.click(add);
// 		fireEvent.click(add);
// 		expect(counter).toHaveTextContent(3);
// 	});
// });

describe("add counter", () => {
	it("has addCount action ", () => {
		let payload = 1;
		const expected = {
			type: actions.ADD,
			payload,
		};

		expect(actions.addCount(payload)).toEqual(expected);
	});
});

describe("counter reducer tests", () => {
	it("should have initial state value of 0", () => {
		const state = reducer(undefined, {});
		const expected = {
			count: 0,
		};
		expect(state).toEqual(expected);
	});

	it("reducer should handle add actions ", () => {
		const initState = {
			count: 1,
		};
		const state = reducer(initState, actions.addCount(1));
		const expected = {
			count: 2,
		};

		expect(state).toEqual(expected);
	});
	it("reducer should handle reduce actions ", () => {
		const initState = {
			count: 1,
		};
		const state = reducer(initState, actions.reduceCount(1));
		const expected = {
			count: 0,
		};

		expect(state).toEqual(expected);
	});
});

const mockStore = createMockStore([thunk]);

describe("store test", () => {
	// it("store invokes addCount", () => {
	// 	const store = mockStore({ count: 0 });
	// 	store.dispatch(actions.addCount(1));
	// 	const expected = [{ type: actions.ADD, payload: 1 }];
	// 	expect(store.getActions()).toEqual(expected);
	// });

	it("testing get todo from api request ", () => {
		const response = [{ id: 1, item: "BUY MILK" }];

		axiosMocker.onGet("/todos").reply(200, {
			items: response,
		});

		const expectedActions = [
			{ type: GET_TODO },
			{ type: GET_TODO_SUCCESS, payload: response },
		];

		const store = mockStore({ todo: [] });

		return store.dispatch(getTodo()).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
});
