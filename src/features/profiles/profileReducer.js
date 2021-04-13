import {
	CLEAR_FOLLOWING,
	LISTEN_TO_CURRENT_USER_PROFILE,
	CLEAR_CURRENT_USER_PROFILE_STATE,
	LISTEN_TO_FOLLOWERS,
	LISTEN_TO_FOLLOWING,
	LISTEN_TO_SELECTED_USER_PROFILE,
	LISTEN_TO_USER_EVENTS,
	SET_FOLLOW_USER,
	SET_UNFOLLOW_USER
} from './profileConstants';

const initialState = {
	currentUserProfile: null,
	selectedUserProfile: null,
	profileEvents: [],
	followers: [],
	following: [],
	followingUser: false
};

export default function profileReducer(state = initialState, { type, payload }) {
	switch (type) {
		case LISTEN_TO_CURRENT_USER_PROFILE:
			return {
				...state,
				currentUserProfile: payload
			};
		case CLEAR_CURRENT_USER_PROFILE_STATE:
			return {
				...initialState
			};
		case LISTEN_TO_SELECTED_USER_PROFILE:
			return {
				...state,
				selectedUserProfile: payload
			};
		case LISTEN_TO_USER_EVENTS:
			return {
				...state,
				profileEvents: payload
			};
		case LISTEN_TO_FOLLOWERS:
			return {
				...state,
				followers: payload
			};
		case LISTEN_TO_FOLLOWING:
			return {
				...state,
				following: payload
			};
		case SET_FOLLOW_USER:
			return {
				...state,
				followingUser: true
			};
		case SET_UNFOLLOW_USER:
			return {
				...state,
				followingUser: false
			};
		case CLEAR_FOLLOWING:
			return {
				...state,
				followers: [],
				following: []
			};
		default:
			return state;
	}
}
