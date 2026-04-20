import React, { useState } from 'react';

const AddStudentForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !rollNo) {
      setError('Name and Roll No are required');
      return;
    }
    
    try {
      await onAdd({ name, rollNo });
      setName('');
      setRollNo('');
      setError('');
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to add student');
    }
  };

  return (
    <div className="card">
      <h3>Add New Student</h3>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} className="add-form">
        <div className="form-group">
          <label>Student Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="e.g., Rahul"
          />
        </div>
        <div className="form-group">
          <label>Roll No</label>
          <input 
            type="text" 
            value={rollNo} 
            onChange={(e) => setRollNo(e.target.value)} 
            placeholder="e.g., 101"
          />
        </div>
        <button type="submit" className="btn-primary">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudentForm;
