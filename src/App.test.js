import React from "react";

import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

beforeEach(() =>
	render(
		<Provider store={store}>
			<App />
		</Provider>
	)
);

afterEach(cleanup);

test("renders count ", () => {
	const { getByText } = screen;
	const linkElement = getByText(/Count/i);
	expect(linkElement).toBeInTheDocument();
});

it("initially have a value zero", () => {
	const { getByTestId } = screen;
	const counter = getByTestId("counter");
	expect(counter).toHaveTextContent(0);
});

it("should have add and reduce", () => {
	const { getAllByTestId } = screen;

	const [add, reduce] = getAllByTestId("button");
	expect(add).toHaveTextContent("Add");
	expect(reduce).toHaveTextContent("Reduce");
});

it("onclick add count should increment by one and reduce should decrement by one ", () => {
	const { getAllByTestId, getByTestId } = screen;
	const [add, reduce] = getAllByTestId("button");
	const count = getByTestId("counter");
	fireEvent.click(add);
	fireEvent.click(add);
	fireEvent.click(add);
	fireEvent.click(add);
	expect(count).toHaveTextContent(4);

	fireEvent.click(reduce);
	fireEvent.click(reduce);
	expect(count).toHaveTextContent(2);
	fireEvent.click(reduce);
	fireEvent.click(add);
	fireEvent.click(add);
	expect(count).toHaveTextContent(3);
});
