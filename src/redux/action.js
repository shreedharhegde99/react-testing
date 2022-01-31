const ADD = "add";
const REDUCE = "reduce";

const addCount = (payload) => ({
	type: ADD,
	payload,
});

const reduceCount = (payload) => ({
	type: REDUCE,
	payload,
});

export { ADD, REDUCE, addCount, reduceCount };
