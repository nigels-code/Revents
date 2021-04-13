import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Dropdown, Image, Menu } from 'semantic-ui-react';
import { signOutFirebase } from '../../app/firestore/firebaseService';
import { clearCurrentUserProfileState } from '../profiles/profileActions';

export default function SignedInMenu() {
	const { currentUserProfile } = useSelector((state) => state.profile);
	const history = useHistory();
	const dispatch = useDispatch();

	async function handleSignOut() {
		try {
			history.push('/');
			await signOutFirebase();
			dispatch(clearCurrentUserProfileState());
		} catch (error) {
			toast.error(error.message);
		}
	}

	return (
		<Menu.Item position='right'>
			<Image
				avatar
				spaced='right'
				src={currentUserProfile?.photoURL || '/assets/user.png'}
			/>
			<Dropdown pointing='top left' text={currentUserProfile?.displayName}>
				<Dropdown.Menu>
					<Dropdown.Item as={Link} to='/createEvent' text='Create Event' icon='plus' />
					<Dropdown.Item
						as={Link}
						to={`/profile/${currentUserProfile?.id}`}
						text='My Profile'
						icon='user'
					/>
					<Dropdown.Item as={Link} to='/account' text='My Account' icon='settings' />
					<Dropdown.Item onClick={handleSignOut} text='Sign Out' icon='power' />
				</Dropdown.Menu>
			</Dropdown>
		</Menu.Item>
	);
}
