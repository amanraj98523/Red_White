# Student Attendance System 🎓

A full-stack web application designed for teachers and administrators to easily manage student records and track daily attendance. 

##live-link:-https://red-white-rho.vercel.app/

## 🌟 Features

- **Add Students**: Easily add new students to the system by providing their Name and Roll Number.
- **Attendance Tracking**: One-click toggle to mark a student as Present or Absent.
- **Real-Time Summary**: Instantly view the total number of students, present count, and absent count.
- **Delete Records**: Remove student records when necessary.
- **Duplicate Prevention**: Backend validation prevents adding multiple students with the same Roll Number.

## 🛠️ Technology Stack

**Frontend:**
- React JS (Vite)
- Axios for API requests
- CSS3 (Custom responsive styling, no external libraries)

**Backend:**
- Node.js
- Express.js
- MongoDB & Mongoose (Database)
- CORS for cross-origin requests

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your local machine:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) (Running locally on default port `27017`)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/amanraj98523/Red_White.git
   cd Red_White
   ```

2. **Start the Backend:**
   ```bash
   cd backend
   npm install
   node server.js
   ```
   *The server will start running on `http://localhost:5000`*

3. **Start the Frontend:**
   Open a new terminal window/tab:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   *The React application will be available at `http://localhost:5173`*

## 📁 Project Structure

```
├── backend/
│   ├── server.js        # Express server, MongoDB connection & API routes
│   └── package.json     # Backend dependencies
└── frontend/
    ├── src/
    │   ├── components/  # React components (AddStudentForm, StudentList, etc.)
    │   ├── App.jsx      # Main application container
    │   └── index.css    # Global styles
    └── package.json     # Frontend dependencies
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/students` | Add a new student |
| `GET` | `/api/students` | Retrieve all students |
| `PUT` | `/api/students/:id/attendance` | Toggle present/absent status |
| `DELETE`| `/api/students/:id` | Delete a student |


