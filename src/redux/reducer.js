import { ADD, REDUCE } from "./action";

const initstate = {
	count: 0,
};

const reducer = (state = initstate, { type, payload }) => {
	switch (type) {
		case ADD:
			return {
				...state,
				count: state.count + payload,
			};

		case REDUCE:
			return {
				...state,
				count: state.count - payload,
			};

		default:
			return state;
	}
};

export default reducer;
