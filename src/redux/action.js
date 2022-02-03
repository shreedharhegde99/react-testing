import axios from "axios";

const ADD = "add";
const REDUCE = "reduce";

const GET_TODO = "GET_TODO";
const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";
const GET_TODO_FAILURE = "GET_TODO_FAILURE";

const addCount = (payload) => ({
	type: ADD,
	payload,
});

const reduceCount = (payload) => ({
	type: REDUCE,
	payload,
});

const getTodoRequest = () => ({
	type: GET_TODO,
});

const getTodoSuccess = (payload) => ({
	type: GET_TODO_SUCCESS,
	payload,
});

const getTodoFailure = (payload) => ({
	type: GET_TODO_FAILURE,
});

const getTodo = () => (dispatch) => {
	dispatch(getTodoRequest());
	return axios
		.get("/todos")
		.then((res) => dispatch(getTodoSuccess(res.data.items)))
		.catch((err) => dispatch(getTodoFailure(err)));
};

export {
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
};
