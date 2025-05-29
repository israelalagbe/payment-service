## Payment Service Test

This project is a payment service application built with Node.js, Express, and TypeScript. It provides REST APIs for payment processing with Swagger documentation.

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

### API Endpoints

*   `POST /api/payments`: Create a new payment
*   `GET /api/payments/:id`: Get payment details by ID
*   `PUT /api/payments/:id/status`: Update payment status

All endpoints return JSON responses and require appropriate request bodies as documented in the Swagger UI.

### Project Structure

```
├── README.md
├── src/
│   ├── app.ts                # Main application file
│   ├── controllers/
│   │   └── payment.controller.ts
│   ├── services/
│   │   └── payment.service.ts
│   ├── exceptions/
│   │   ├── bad-request.exception.ts
│   │   └── not-found.exception.ts
│   ├── utils/
│   │   ├── logger.ts
│   │   └── swagger.ts
│   └── types.ts
├── test/
│   └── payment.test.ts
├── package.json
├── tsconfig.json
└── .gitignore
```

### API Documentation

API documentation is available via Swagger UI. After starting the application, you can access the documentation at `http://localhost:4000/api-docs`. This documentation provides details on all available endpoints, request/response formats, and authentication methods.
