import React from "react";
// import ReactDOM from "react-dom";
import { cleanup, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Button } from "./button";
import { render } from "../redux/utils/renderWithStore";

afterEach(cleanup);

it("should render without crashing", () => {
	let div = document.createElement("div");
	render(<Button label="button"></Button>);
});

it("should render button correctly", () => {
	const { getByTestId } = render(<Button label="click me"></Button>);
	expect(getByTestId("button")).toHaveTextContent("click me");
});

it("should render button correctly & have label click me", () => {
	const { getByTestId } = render(<Button label="add"></Button>);
	expect(getByTestId("button")).toHaveTextContent("add");
});

// it("matches snapshot", () => {
// 	const tree = renderer.create(<Button label={"add"}></Button>).toJSON();
// 	expect(tree).toMatchSnapshot();
// });

it("invokes function ", function () {
	const mockfn = jest.fn();
	const { getByTestId } = render(
		<Button label={"click me"} onClick={mockfn}></Button>
	);
	const button = getByTestId("button");
	fireEvent.click(button);

	expect(mockfn).toHaveBeenCalledTimes(1);
});
