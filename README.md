## Payment Service Simlation

This project is a payment service simulation application built with Node.js, Express, and TypeScript. It provides REST APIs for payment processing with Swagger documentation.

### Prerequisites

*   Node.js (version 18 or higher)
*   npm or yarn

### Installation

1.  Clone the repository: `git clone <repository-url>`
2.  Navigate to the project directory: `cd PaymentServiceTest`
3.  Install dependencies: `npm install` or `yarn install`

### Usage

1.  Start the application: `npm start` or `yarn start`
2.  Access the API documentation: `http://localhost:4000/api-docs`
3.  Access the endpoints via a REST client or browser, with the base URL `http://localhost:4000/api`

### API Endpoints

*   `POST /payments`: Create a new payment
*   `GET /payments/:id`: Get payment details by ID
*   `PUT /payments/:id/status`: Update payment status

All endpoints return JSON responses and require appropriate request bodies as documented in the Swagger UI.

### API Documentation

API documentation is available via Swagger UI. After starting the application, you can access the documentation at `http://localhost:4000/api-docs`. This documentation provides details on all available endpoints, request/response formats, and authentication methods.
