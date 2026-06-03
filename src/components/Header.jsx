import React from 'react';

const Header = ({ activeTab, setActiveTab, totalStudents, totalCourses }) => {
  return (
    <header className="dashboard-header">
      <div className="school-logo">Genetic Computer School</div>
      <h1 className="dashboard-title">Student Profile Dashboard</h1>
      
      <div className="nav-tabs">
        <button 
          id="btn-tab-students"
          className={`tab-btn ${activeTab === 'students' ? 'active' : ''}`}
          onClick={() => setActiveTab('students')}
        >
          Student Directory
        </button>
        <button 
          id="btn-tab-courses"
          className={`tab-btn ${activeTab === 'courses' ? 'active' : ''}`}
          onClick={() => setActiveTab('courses')}
        >
          Course Catalogue
        </button>
      </div>

      <div className="stats-banner">
        <div className="stat-item" id="stat-total-students">
          <span className="stat-label">Total Students:</span>
          <span className="stat-val">{totalStudents}</span>
        </div>
        <div className="stat-item" id="stat-total-courses">
          <span className="stat-label">Active Courses:</span>
          <span className="stat-val">{totalCourses}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
