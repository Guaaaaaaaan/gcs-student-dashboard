import React, { useState } from 'react';

const StudentCard = ({ name, course, year, image, email, status }) => {
  const [likes, setLikes] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);

  // Generate a beautiful, fallback avatar URL using Dicebear if no specific image is provided
  const avatarUrl = image || `https://api.dicebear.com/7.x/micah/svg?seed=${encodeURIComponent(name)}`;

  return (
    <div className="custom-card student-card" id={`student-card-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      {/* Top action/status line */}
      <div className="card-header-actions">
        <span className={`status-badge ${status.toLowerCase()}`}>
          {status}
        </span>
        {isFavourite && (
          <span className="fav-badge" id={`fav-badge-${name.toLowerCase().replace(/\s+/g, '-')}`}>
            ⭐ Favourite Student
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
            <span className="detail-label">Course:</span>
            <span className="detail-value">{course}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Year:</span>
            <span className="detail-value">{year}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Email:</span>
            <span className="detail-value detail-email">{email}</span>
          </div>
        </div>
      )}

      {/* Bottom control panel */}
      <div className="card-controls">
        <div className="like-section">
          <button 
            id={`btn-like-${name.toLowerCase().replace(/\s+/g, '-')}`}
            className={`icon-btn ${likes > 0 ? 'liked' : ''}`}
            onClick={() => setLikes(likes + 1)}
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
