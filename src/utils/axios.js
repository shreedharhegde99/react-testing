import axios from "axios";
const addTask = (data) => {
	return axios.post("http://localhost:3000/api/task", data);
};

export const loadData = () => {
	return axios.get("http://localhost:3000/api/task");
};
export { addTask };
