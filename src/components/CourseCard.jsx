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
            ❤️ Favourite
          </span>
        )}
      </div>

      <div className="course-info">
        <span className="course-code">{code}</span>
        <h2 className="course-title">{courseName}</h2>
        <p className="course-desc">{description}</p>
        
        <div className="course-dept-dur">
          <span>Dept: {department}</span>
          <span>Duration: {duration}</span>
        </div>

        {/* 5-Star Interactive Rating System */}
        <div className="rating-system">
          {[1, 2, 3, 4, 5].map((star) => (
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
          <span className="rating-value" id={`rating-val-${code.toLowerCase()}`}>{rating.toFixed(1)} / 5.0</span>
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
