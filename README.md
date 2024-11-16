# Contact Management App

## Description

This project is a **Contact Management Application** built using **React** for the frontend and **Node.js/Express** for the backend. It allows users to create, update, view, and delete contact information, including their details. The app connects to a **PostgreSQL** database to persist the contact data.

### Major Features
- **Create, Read, Update, and Delete (CRUD)** contact information.
- **Form validation** and error handling.
- **Database schema** for storing contact details with fields like name, email, phone number, company, and job title.
  
---

## Tech Stack

- **Frontend**:
  - React.js
  - Material UI
  - Axios (for API calls)
  
- **Backend**:
  - Node.js (Express)
  - PostgreSQL (Database)
  
---

## Setup Instructions

### 1. Clone the Repository

Clone the repository to your local machine:

```
git clone https://github.com/Sachin5679/crm.git
```

### 2. Setup Backend

#### a) Install Dependencies

Navigate to the backend folder and install the dependencies:

```
cd server
npm install
```

#### b) Setup PostgreSQL Database

1. **Create a new PostgreSQL database**:

```
CREATE DATABASE contactsdb;
```

2. **Create the necessary tables** by running the following SQL schema:

```sql
CREATE TABLE Contact (
  id SERIAL PRIMARY KEY,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phoneNumber VARCHAR(20) NOT NULL,
  company VARCHAR(255) NOT NULL,
  jobTitle VARCHAR(255) NOT NULL
);
```

3. **Set up environment variables**:

Create a `.env` file in the backend folder with the following values:

```.env
PORT=****
DB_USER=****
DB_HOST=****
DB_NAME=contactsdb
DB_PASSWORD=****
DB_PORT=****
```

#### c) Run the Backend Server

Start the backend server:

```
npm run dev
```

The backend server should now be running on `http://localhost:5000`.

---

### 3. Setup Frontend

#### a) Install Dependencies

Navigate to the frontend folder and install the dependencies:

```
cd client
npm install
```

This will set the backend API URL for your frontend.

#### b) Run the Frontend Server

Start the frontend server:

```
npm run dev
```

The frontend should now be running on `http://localhost:5173`.

---

## Project Workflow

1. **Frontend**: The user interacts with the React-based UI. The form allows adding or editing contact details. When a user submits the form, it sends a POST or PUT request to the backend API to save or update the contact information.
   
2. **Backend**: The backend uses Express to handle API requests. It accepts the contact data sent from the frontend, validates it, and stores it in the PostgreSQL database.

3. **Database**: PostgreSQL stores all contact information in the `Contact` table. Each contact contains fields like first name, last name, email, phone number, company, and job title.

---

## Database Schema

### Contact Table

| Column       | Data Type  | Description                          |
|--------------|------------|--------------------------------------|
| id           | SERIAL     | Auto-incrementing primary key        |
| firstName    | VARCHAR    | Contact's first name                 |
| lastName     | VARCHAR    | Contact's last name                  |
| email        | VARCHAR    | Contact's email (unique)             |
| phoneNumber  | VARCHAR    | Contact's phone number               |
| company      | VARCHAR    | Contact's company                    |
| jobTItle     | VARCHAR    | Contact's job title                  |

---

## Technical Decisions

- **Use of a SQL database**: An SQL database was chosen for this application because the data is structured and follows a fixed schema. The contact information consists of a predefined set of fields (such as name, email, phone number, company, and job title), which are unlikely to change over time. This makes a relational database like PostgreSQL an ideal choice for efficiently storing and managing the data in a structured format..

---
