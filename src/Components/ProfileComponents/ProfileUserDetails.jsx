import React from 'react'
import {FiSettings} from 'react-icons/fi'
import './ProfileUserDetails.css'

const ProfileUserDetails = () => {
  return (
    <div id="divwrapper">
      <div id="imgwrapper">
        <img id="img" src="https://images.unsplash.com/photo-1631646200949-e62c697abb4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="profilePic" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
        <p style={{ margin: 0, marginRight: '2vw'}}>username</p>
        <button style={{ marginRight: '2vw'}}>Edit Profile</button>
        <FiSettings />
      </div>
      <div className="stats-wrapper">
      <div style={{marginRight: '2vw'}}>
          <span>10 </span>
          <span>posts</span>
        </div>
        <div>
          <span>10 </span>
          <span>followers</span>
        </div>
        <div style={{marginLeft: '2vw'}}>
          <span>10 </span>
          <span>following</span>
        </div>
      </div>

      <div style={{marginLeft: '12vw', paddingTop: '2vw'}}>
        <p style={{ fontWeight: '600' }}>Name</p>
        <p style={{ fontWeight: '400' }}>🍗Foodie | Entertainer 🎥 | Fitness Lover</p>
      </div>

    </div>
  );
}

export default ProfileUserDetails;
