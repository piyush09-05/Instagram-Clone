import React from 'react'
import ProfileUserDetails from '../../Components/ProfileComponents/ProfileUserDetails'
import "./Profile.css";
import UserPost from '../../Components/ProfileComponents/UserPost';

const Profile = () => {
  return (
    <div id="maindiv">
      <div>
        <ProfileUserDetails></ProfileUserDetails>
        <UserPost></UserPost>
      </div>
    </div>
  )
}

export default Profile
