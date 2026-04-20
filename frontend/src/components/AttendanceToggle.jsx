import React from 'react';

const AttendanceToggle = ({ student, onToggle }) => {
  return (
    <button 
      className={`btn-toggle ${student.isPresent ? 'present' : 'absent'}`}
      onClick={() => onToggle(student._id, !student.isPresent)}
    >
      {student.isPresent ? 'Present' : 'Absent'}
    </button>
  );
};

export default AttendanceToggle;
