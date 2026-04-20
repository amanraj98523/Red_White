import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddStudentForm from './components/AddStudentForm';
import StudentList from './components/StudentList';
import AttendanceSummary from './components/AttendanceSummary';
import './index.css';

const API_URL = 'http://localhost:5000/api/students';

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchStudents = async () => {
    try {
      const response = await axios.get(API_URL);
      setStudents(response.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch students. Is backend running?');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleAddStudent = async (studentData) => {
    const response = await axios.post(API_URL, studentData);
    setStudents([...students, response.data]);
  };

  const handleToggleAttendance = async (id, isPresent) => {
    try {
      const response = await axios.put(`${API_URL}/${id}/attendance`, { isPresent });
      setStudents(students.map(s => s._id === id ? response.data : s));
    } catch (err) {
      console.error('Failed to toggle attendance:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setStudents(students.filter(s => s._id !== id));
    } catch (err) {
      console.error('Failed to delete student:', err);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Student Management Application</h1>
      </header>
      
      <main className="main-content">
        <h2>Students List</h2>
        
        {error && <p className="error">{error}</p>}
        
        <AttendanceSummary students={students} />
        
        <div className="content-grid">
          <div className="left-panel">
            <AddStudentForm onAdd={handleAddStudent} />
          </div>
          <div className="right-panel">
            {loading ? (
              <p>Loading students...</p>
            ) : (
              <StudentList 
                students={students} 
                onToggleAttendance={handleToggleAttendance} 
                onDelete={handleDelete}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
