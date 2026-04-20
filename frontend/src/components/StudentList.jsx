import React from 'react';
import AttendanceToggle from './AttendanceToggle';

const StudentList = ({ students, onToggleAttendance, onDelete }) => {
  if (students.length === 0) {
    return <p className="no-data">No students found. Add one above!</p>;
  }

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Roll No</th>
            <th>Attendance</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.rollNo}</td>
              <td>
                <AttendanceToggle student={student} onToggle={onToggleAttendance} />
              </td>
              <td>
                <button 
                  className="btn-delete" 
                  onClick={() => onDelete(student._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
