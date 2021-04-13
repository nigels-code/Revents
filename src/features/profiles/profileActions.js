import {
	LISTEN_TO_CURRENT_USER_PROFILE,
	CLEAR_CURRENT_USER_PROFILE_STATE,
	LISTEN_TO_FOLLOWERS,
	LISTEN_TO_FOLLOWING,
	LISTEN_TO_SELECTED_USER_PROFILE,
	LISTEN_TO_USER_EVENTS,
	SET_FOLLOW_USER,
	SET_UNFOLLOW_USER
} from './profileConstants';

export function listenToCurrentUserProfile(profile) {
	return {
		type: LISTEN_TO_CURRENT_USER_PROFILE,
		payload: profile
	};
}

export function clearCurrentUserProfileState() {
	return {
		type: CLEAR_CURRENT_USER_PROFILE_STATE
	};
}

export function listenToSelectedUserProfile(profile) {
	return {
		type: LISTEN_TO_SELECTED_USER_PROFILE,
		payload: profile
	};
}

export function listenToUserEvents(events) {
	return {
		type: LISTEN_TO_USER_EVENTS,
		payload: events
	};
}

export function listenToFollowers(followers) {
	return {
		type: LISTEN_TO_FOLLOWERS,
		payload: followers
	};
}

export function listenToFollowing(following) {
	return {
		type: LISTEN_TO_FOLLOWING,
		payload: following
	};
}

export function setFollowUser() {
	return {
		type: SET_FOLLOW_USER
	};
}

export function setUnfollowUser() {
	return {
		type: SET_UNFOLLOW_USER
	};
}
