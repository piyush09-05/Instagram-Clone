import React from 'react';
import { FaHeart, FaComment } from 'react-icons/fa';
import './UserPostCard.css'

const UserPostCard = () => {
  return (
    <div style={{padding: '2px'}}>
      <div className='post' style={{ width: '25vw', height: '50vh' }}>
        <img
          src="https://cdn.pixabay.com/photo/2023/03/04/15/53/duck-7829778_1280.jpg"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div className='overlay'>
          <div className='overlay-text'>
            <div>
              <FaHeart />
              <span>10</span>
            </div>
            <div>
              <FaComment />
              <span>10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPostCard;
