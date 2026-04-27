# Student Scoreboard

A React-based web application for managing and visualizing student scores using a component-based architecture.

## Overview

This project is built as part of a Web Development assignment. It demonstrates core React concepts such as functional components, state management using hooks, props, conditional rendering, and dynamic UI updates.

## Features

- Display a list of students with their scores
- Add new students using a form
- Update student scores dynamically
- Automatic pass/fail status based on score
- Summary statistics:
  - Total students
  - Number of students passed
  - Average score
- Clean and responsive UI using pure CSS

## Technologies Used

- React (with Vite)
- JavaScript (ES6+)
- CSS (no frameworks)

## Project Structure
src/
├── App.jsx
├── App.css
├── main.jsx
├── components/
│ ├── Header.jsx
│ ├── StudentTable.jsx
│ ├── StudentRow.jsx
│ ├── AddStudentForm.jsx

## Installation and Setup

1. Clone the reposnitory:
   https://github.com/yashverma886622-dot/student-scoreboard.git

2. Navigate to the project director:
   cd student-scoreboard

3. Install dependencies:
   npm install

4. Run the development server:
   npm run dev

5. Open in browser:
   http://localhost:5173
   
## Build for Production
npm run build

## Live Demo

https://wondrous-smakager-882003.netlify.app/

## Functional Highlights

- State is managed in the parent component (App.jsx)
- Data is passed to child components via props
- Reusable components improve maintainability
- Conditional rendering is used for pass/fail status
- Form handling includes controlled components

## Future Improvements

- Input validation for score range (0–100)
- Edit student name functionality
- Delete student feature
- Persistent storage using localStorage or database
- Responsive design improvements

## License

This project is created for academic purposes.
