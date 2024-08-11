# Drone Fleet Management Interface

## Overview

The Drone Fleet Management Interface is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to manage and monitor a fleet of drones, including viewing detailed stats for each drone, managing maintenance logs, and performing user authentication (signup and login).

## Features

- **User Authentication:**

  - Signup and login functionality with secure password hashing.
  - JWT-based authentication for secure API access.

- **Drone Fleet Overview:**

  - Displays a list of all drones with basic information (e.g., drone ID, status).
  - Ability to click on a drone to view detailed stats.

- **Drone Details View:**

  - Shows detailed information for each drone, including flight hours, battery status, maintenance logs, and current mission.
  - Displays maintenance activities including the date, description, and technician details.

- **Responsive Design:**
  - The application is designed to be responsive and user-friendly, with a clean interface using Bootstrap CSS.

## Getting Started

- **Prerequisites:**

  - Node.js: Ensure you have Node.js installed. You can download it from here.
  - MongoDB: Set up a MongoDB database. You can use a local instance or a cloud service like MongoDB Atlas.

- **API Endpoints:**

  - POST /api/auth/signup: Sign up a new user..
  - POST /api/auth/login: Log in an existing user.
  - GET /api/drones: Fetch the list of all drones.
  - GET /api/drones/:id: Fetch detailed information for a specific drone..

- **Technologies Used:**
  - **FrontEnd:**
    - React
    - Axios for HTTP requests
    - React Router for routing
    - Bootstrap or Tailwind CSS for styling
  - **Backend:**
    - Node.js and Express.js for the server
    - MongoDB with Mongoose for the database
    - bcrypt for password hashing
    - Bootstrap CSS for styling
    - express-validator for request validation
