# Transactions App

This is a Transactions Management application built with Node.js, Express, SQLite, and React. The application allows users to manage transactions by adding, viewing, and tracking balances.


## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Deployment](#deployment)
- [Testing](#testing)
- [Resources](#resources)

## Demo

<div style="text-align: center;">
  <video style="max-width:80%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12);outline:none;" loop="true" autoplay="autoplay" controls="controls" muted>
    <source src="https://res.cloudinary.com/dsbxrn2tj/video/upload/v1722158062/transactions-app_eqvwvc.mp4" type="video/mp4">
  </video>
</div>
<br/>

## Features

- Add new transactions (credit or debit)
- View a list of all transactions
- Display transaction details including date, description, credit, debit, and balance
- Automatic calculation of running balance

## Prerequisites

Make sure you have the following installed:

- Node.js (v14 or later)
- npm (v6 or later)

## Installation

1. Clone the repository:

   ```
   https://github.com/sulemanshaik109/transactions-app.git

   cd transactions-app
   ```

2. Install backend dependencies:

    ```
    cd server

    npm install
    ```

3. Install frontend dependencies:

    ```
    cd client

    npm install
    ```

## Usage

### Running the Backend Server

- Navigate to the backend directory:

    ```
    cd server
    ```

- Start the backend server:

    ```
    node index.js
    ```

    The backend server will start on http://localhost:3001.

### Running the Frontend Application

- Navigate to the frontend directory:

    ```
    cd client
    ```

- Start the frontend development server:

    ```
    npm start
    ```

    The frontend application will start on http://localhost:3000.

## API Endpoints

- To retrieve all transactions <br/>

    GET http://localhost:3001/transactions

- To add a new transaction

    POST http://localhost:3001/add-transactions

## Technologies Used

- Backend: Node.js, Express, SQLite
- Frontend: React, Axios, React Router
- Styling: CSS

## Deployment

### Backend Deployment on Render

1. Create a Render Account:
    - Sign up for a free account at Render.

2. Create a New Web Service:
    - In the Render dashboard, click on "New" and then "Web Service".
    - Connect your GitHub repository and select the transactions-app repository.

3. Configure Build and Start Commands:
    - Root Directory:

        ```
        server
        ```

    - Build Command:

        ```
        npm install
        ```

    - Start Command:

        ```
        node index.js
        ```

4. Set Environment Variables:

    - In the Render service settings, add any necessary environment variables.

5. Deploy:

    - Trigger a new deploy by pushing changes to your GitHub repository or clicking the "Deploy" button in Render.

6. Access the Application:

    - Once the deployment is successful, you can access the backend at the URL provided by Render.

### Frontend Deployment on Netlify

1. Create a Netlify Account:

    - Sign up for a free account at Netlify.

2. Create a New Site:

    - In the Netlify dashboard, click on "Add new site" and connect your GitHub repository.
3. Configure Build and Publish Settings:

    - Build Command:

        ```
        npm install
        ```
    - Publish Directory:
        
        ```
        client
        ```

4. Deploy:

    - Trigger a new deploy by pushing changes to your GitHub repository or clicking the "Deploy site" button in Netlify.
5. Access the Application:

    - Once the deployment is successful, you can access the frontend at the URL provided by Netlify.

## Testing

### Using Postman

1. Add New Request:

    - Create a new request in Postman or Insomnia.
    - Set the request method to GET, POST, PUT, or DELETE depending on the endpoint you want to test.

2. Set URL:

    - Use the URL provided by Render for the backend. For example:

        ```
        https://suleman-transactions-app.onrender.com/api/transactions
        ```

3. Send Request:

    - Send the request and check the response.

## Resources

<details>
<summary>Colors</summary>
<br/>

<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #0291ff; width: 150px; padding: 10px; color: white">Hex: #0291ff</div>
<div style="background-color: #dedede; width: 150px; padding: 10px; color: white">Hex: #dedede</div>
<div style="background-color: #e7e7e7; width: 150px; padding: 10px; color: black">Hex: #e7e7e7</div>
<div style="background-color: #b9b9b9; width: 150px; padding: 10px; color: black">Hex: #b9b9b9</div>
<div style="background-color: #ff0000; width: 150px; padding: 10px; color: black">Hex: #ff0000</div>
<div style="background-color: #008000; width: 150px; padding: 10px; color: black">Hex: #008000</div>

</details>
<br/>

# Show Your Support

Give a ⭐️ if you like this project!
