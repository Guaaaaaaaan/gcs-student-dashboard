import React, { useState } from 'react';

const CourseCard = ({ courseName, code, description, department, duration, initialRating, syllabus }) => {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [rating, setRating] = useState(initialRating || 5);

  return (
    <div className="custom-card course-card" id={`course-card-${code.toLowerCase()}`}>
      <div className="card-header-actions">
        <span className="status-badge active" style={{ color: 'var(--secondary-color)', borderColor: 'rgba(20, 184, 166, 0.2)', backgroundColor: 'rgba(20, 184, 166, 0.12)' }}>
          {department}
        </span>
        {isFavourite && (
          <span className="fav-badge" id={`fav-badge-course-${code.toLowerCase()}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '4px' }}>
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            </svg>
            Favourite
          </span>
        )}
      </div>

      <div className="course-info">
        <span className="course-code">{code}</span>
        <h2 className="course-title">{courseName}</h2>
        <p className="course-desc">{description}</p>
        
        <div className="course-dept-dur">
          <span style={{ display: 'inline-flex', alignItems: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
            </svg>
            Dept: {department}
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            {duration}
          </span>
        </div>

        {/* 5-Star Interactive Rating System (Reversed array in code to allow progressive CSS hover siblings matching) */}
        <div className="rating-system">
          <span className="rating-value" id={`rating-val-${code.toLowerCase()}`}>{rating.toFixed(1)} / 5.0</span>
          {[5, 4, 3, 2, 1].map((star) => (
            <button
              key={star}
              id={`btn-star-${code.toLowerCase()}-${star}`}
              className={`star-btn ${star <= rating ? 'active' : ''}`}
              onClick={() => setRating(star)}
              type="button"
              title={`Rate ${star} Stars`}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      <button
        id={`btn-details-course-${code.toLowerCase()}`}
        className="details-toggle-btn"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? 'Hide Course Details ▲' : 'Show Course Details ▼'}
      </button>

      {showDetails && (
        <div className="details-content" id={`details-content-course-${code.toLowerCase()}`}>
          <h4 style={{ color: 'var(--secondary-color)', marginBottom: '0.4rem', fontSize: '0.85rem' }}>Syllabus Highlights:</h4>
          <ul style={{ listStyleType: 'circle', paddingLeft: '1.2rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            {syllabus && syllabus.map((item, index) => (
              <li key={index} style={{ marginBottom: '0.2rem' }}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="card-controls">
        <button
          id={`btn-enroll-${code.toLowerCase()}`}
          className={`enroll-btn ${isEnrolled ? 'enrolled' : 'not-enrolled'}`}
          onClick={() => setIsEnrolled(!isEnrolled)}
        >
          {isEnrolled ? 'Enrolled ✔️' : 'Enroll Now'}
        </button>

        <button
          id={`btn-fav-course-${code.toLowerCase()}`}
          className={`icon-btn ${isFavourite ? 'liked' : ''}`} // Using red glow for favorite course
          onClick={() => setIsFavourite(!isFavourite)}
          title="Mark as Favourite Course"
        >
          ❤️
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
