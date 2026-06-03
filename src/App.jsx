import React, { useState } from 'react';
import Header from './components/Header';
import StudentCard from './components/StudentCard';
import CourseCard from './components/CourseCard';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('students');

  // Challenge 5: Managing the list of student cards using React State
  const [students, setStudents] = useState([
    {
      name: 'John Smith',
      course: 'Diploma in IT',
      year: 'Year 1',
      email: 'johnsmith@gmail.com',
      status: 'Active',
      image: '' // Left blank to test auto-avatar generation in StudentCard
    },
    {
      name: 'Alice Tan',
      course: 'Cybersecurity',
      year: 'Year 2',
      email: 'alicetan@gmail.com',
      status: 'Active',
      image: ''
    },
    {
      name: 'Michael Lee',
      course: 'Business Management',
      year: 'Year 3',
      email: 'michaellee@gmail.com',
      status: 'Inactive',
      image: ''
    }
  ]);

  // Extension mock data for courses catalog managed in State
  const [courses, setCourses] = useState([
    {
      courseName: 'Web Application Development',
      code: 'WD-101',
      description: 'Learn modern web standards including HTML5, CSS3, ES6 JavaScript, and core React components.',
      department: 'IT & Software',
      duration: '6 Months',
      initialRating: 4.8,
      syllabus: [
        'HTML5 & Semantic Structure',
        'CSS Layouts: Flexbox, Grid, & Transitions',
        'JS Essentials & DOM Manipulation',
        'React Fundamentals, Props & State'
      ]
    },
    {
      courseName: 'Information Security & Ethical Hacking',
      code: 'EH-202',
      description: 'Explore key cybersecurity principles, network defenses, threat detection, and mitigation techniques.',
      department: 'Cybersecurity',
      duration: '9 Months',
      initialRating: 4.9,
      syllabus: [
        'Network Infrastructure & Protocols',
        'Firewalls & Intrusion Detection Systems',
        'System Vulnerabilities & Penetration Testing',
        'Secure coding practices and audits'
      ]
    },
    {
      courseName: 'Business Operations & Management',
      code: 'BM-303',
      description: 'Master operational leadership, financial planning, project planning, and growth marketing strategies.',
      department: 'Business Admin',
      duration: '4 Months',
      initialRating: 4.5,
      syllabus: [
        'Organizational Leadership Models',
        'Financial Literacy & Cash Flows',
        'Strategic Product & Operations Planning',
        'Brand Marketing & Digital Outreach'
      ]
    }
  ]);

  return (
    <div className="app-container">
      {/* Background Decorative Blobs */}
      <div className="glow-blob blob-1"></div>
      <div className="glow-blob blob-2"></div>

      {/* School Header with tab state, total students and total courses */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        totalStudents={students.length} 
        totalCourses={courses.length} 
      />

      {/* Main dashboard content area */}
      <main className="main-content">
        {activeTab === 'students' ? (
          <section id="section-students" aria-label="Student Profiles">
            <div className="cards-grid">
              {students.map((student, index) => (
                <StudentCard 
                  key={index}
                  name={student.name}
                  course={student.course}
                  year={student.year}
                  image={student.image}
                  email={student.email}
                  status={student.status}
                />
              ))}
            </div>
          </section>
        ) : (
          <section id="section-courses" aria-label="Course Catalogue">
            <div className="cards-grid">
              {courses.map((course, index) => (
                <CourseCard 
                  key={index}
                  courseName={course.courseName}
                  code={course.code}
                  description={course.description}
                  department={course.department}
                  duration={course.duration}
                  initialRating={course.initialRating}
                  syllabus={course.syllabus}
                />
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Institutional School Footer */}
      <Footer />
    </div>
  );
}

export default App;
