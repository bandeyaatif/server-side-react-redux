import axios from "axios";

export const FETCH_USERS = 'fetch_users';

// to fix asynx 
export const fetchUsers = () => async dispatch => {
	const res = await axios.get('https://react-ssr-api.herokuapp.com/users');
	
	dispatch({
		type: FETCH_USERS,
		payload:res
	});
}
