import React, { useState } from "react";
import "./App.css";
import { Button } from "./component/button";
import { useSelector, useDispatch } from "react-redux";
import { addCount, reduceCount } from "./redux/action";
import Task from "./task/task";

function App() {
	return (
		<>
			<div className="App">
				<Task />
			</div>
		</>
	);
}

// function App() {
// 	const count = useSelector((state) => state.count);
// 	const dispatch = useDispatch();
// 	return (
// 		<div className="App">
// 			<h1>Count</h1>
// 			<div data-testid="counter">{count}</div>
// 			<Button label={"Add"} onClick={() => dispatch(addCount(1))}></Button>
// 			<Button
// 				label={"Reduce"}
// 				onClick={() => dispatch(reduceCount(1))}
// 			></Button>
// 		</div>
// 	);
// }

export default App;
