import { withProfile } from "../../hocs/wtihProfile";

export const ProfileRender = ({
	isShow,
	toggleShowProfile
}) => {
	return (
		<div>
			<h1>Profile</h1>

			<input type="checkbox" checked={isShow} onChange={toggleShowProfile} />
		</div>
	)
}

export const Profile = withProfile(ProfileRenderender)