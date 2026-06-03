import React, { useState } from 'react';

const StudentCard = ({ name, course, year, image, email, status }) => {
  const [likes, setLikes] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const [isPopping, setIsPopping] = useState(false);

  // Generate a beautiful, fallback avatar URL using Dicebear if no specific image is provided
  const avatarUrl = image || `https://api.dicebear.com/7.x/micah/svg?seed=${encodeURIComponent(name)}`;

  const handleLike = () => {
    setLikes(likes + 1);
    setIsPopping(true);
    setTimeout(() => setIsPopping(false), 450); // Duration matches CSS keyframes
  };

  return (
    <div className="custom-card student-card" id={`student-card-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      {/* Top action/status line */}
      <div className="card-header-actions">
        <span className={`status-badge ${status.toLowerCase()}`}>
          {status}
        </span>
        {isFavourite && (
          <span className="fav-badge" id={`fav-badge-${name.toLowerCase().replace(/\s+/g, '-')}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '4px' }}>
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            Favourite
          </span>
        )}
      </div>

      {/* Student identity panel */}
      <div className="card-identity">
        <div className="avatar-container">
          <img src={avatarUrl} alt={name} className="avatar-image" />
        </div>
        <h2 className="student-name">{name}</h2>
        <p className="student-subtitle">{course} • {year}</p>
      </div>

      {/* Show/Hide details section */}
      <button 
        id={`btn-details-${name.toLowerCase().replace(/\s+/g, '-')}`}
        className="details-toggle-btn"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? 'Hide Details ▲' : 'Show Details ▼'}
      </button>

      {showDetails && (
        <div className="details-content" id={`details-content-${name.toLowerCase().replace(/\s+/g, '-')}`}>
          <div className="detail-row">
            <span className="detail-label">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', verticalAlign: 'middle', opacity: 0.7 }}>
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.91a2 2 0 0 0 1.66 0z"/>
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
              </svg>
              Course:
            </span>
            <span className="detail-value">{course}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', verticalAlign: 'middle', opacity: 0.7 }}>
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
              </svg>
              Year:
            </span>
            <span className="detail-value">{year}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', verticalAlign: 'middle', opacity: 0.7 }}>
                <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              Email:
            </span>
            <span className="detail-value detail-email">{email}</span>
          </div>
        </div>
      )}

      {/* Bottom control panel */}
      <div className="card-controls">
        <div className="like-section">
          <button 
            id={`btn-like-${name.toLowerCase().replace(/\s+/g, '-')}`}
            className={`icon-btn ${likes > 0 ? 'liked' : ''} ${isPopping ? 'like-pop' : ''}`}
            onClick={handleLike}
            title="Like this student"
          >
            👍
          </button>
          <span className="likes-counter" id={`counter-likes-${name.toLowerCase().replace(/\s+/g, '-')}`}>
            Likes: {likes}
          </span>
        </div>

        <button 
          id={`btn-fav-${name.toLowerCase().replace(/\s+/g, '-')}`}
          className={`icon-btn ${isFavourite ? 'favorited' : ''}`}
          onClick={() => setIsFavourite(!isFavourite)}
          title="Toggle Favourite"
        >
          ★
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
