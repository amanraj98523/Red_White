import React from 'react';

const AttendanceSummary = ({ students }) => {
  const total = students.length;
  const present = students.filter(s => s.isPresent).length;
  const absent = total - present;

  return (
    <div className="summary-container">
      <div className="summary-box">
        <h4>Total Students</h4>
        <p>{total}</p>
      </div>
      <div className="summary-box present">
        <h4>Present</h4>
        <p>{present}</p>
      </div>
      <div className="summary-box absent">
        <h4>Absent</h4>
        <p>{absent}</p>
      </div>
    </div>
  );
};

export default AttendanceSummary;
