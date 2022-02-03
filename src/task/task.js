import { useEffect, useState } from "react";
import { addTask, loadData } from "../utils/axios";

function Task() {
	const [todo, setTodo] = useState([]);
	const [input, setInput] = useState("");
	const [err, setErr] = useState(false);

	useEffect(() => {
		loadData()
			.then(({ data }) => setTodo(data))
			.catch((error) => setErr(true));
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		const payload = {
			title: input,
		};
		addTask(payload)
			.then(({ data }) => {
				setTodo([...todo, data]);
			})
			.catch((error) => setErr(!err));
	};

	return (
		<>
			<div>
				<h2>Tasks</h2>
				{err && <h3 className="error">Oops error!</h3>}
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						autoFocus
						className="task"
						placeholder="Add something"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
				</form>
			</div>
			<ul className="task-list">
				{todo && todo.map((item) => <li key={item.title}>{item.title}</li>)}
			</ul>
		</>
	);
}

export default Task;
