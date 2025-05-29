## Payment Service

This project is a payment service simulation application built with Node.js, Express, and TypeScript. It provides REST APIs for payment processing with Swagger documentation.

### Prerequisites

*   Node.js (version 18 or higher)
*   npm or yarn

### Installation

1.  Clone the repository: `git clone https://github.com/israelalagbe/payment-service`
2.  Navigate to the project directory: `cd payment-service`
3.  Install dependencies: `npm install` or `yarn install`

### Usage

1.  Start the application: `npm start` or `yarn start`
2.  Access the API documentation: `http://localhost:4000/api-docs`
3.  Access the endpoints via a REST client or browser, with the base URL `http://localhost:4000/api`

### Running Tests

1.  Run the tests using: `npm test` or `yarn test`

### API Endpoints

*   `POST /payments`: Create a new payment
    ```json
    {
        "amount": 100.00,
        "currency": "USD",
        "paymentMethod": "CARD",
        "description": "Test payment"
    }
    ```
*   `GET /payments/:id`: Get payment details by ID
*   `PATCH /payments/:id/status`: Update payment status
    ```json
    {
        "status": "COMPLETED"
    }
    ```

All endpoints return JSON responses and require appropriate request bodies as documented in the Swagger UI.

### API Documentation

API documentation is available via Swagger UI. After starting the application, you can access the documentation at `http://localhost:4000/api-docs`. This documentation provides details on all available endpoints, request/response formats, and authentication methods.

### SQL Design

Although this project uses in-memory data storage, the following SQL schema could be used for a persistent implementation:

```sql
CREATE TABLE payments (
    id UUID PRIMARY KEY,
    reference VARCHAR(255) NOT NULL UNIQUE,
    amount DECIMAL(15, 2) NOT NULL,
    currency VARCHAR(3) NOT NULL,
    paymentMethod VARCHAR(50) NOT NULL,
    status VARCHAR(50) NOT NULL,
    description TEXT,
    metadata JSON,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

*   `id`: Unique identifier for the payment (UUID).
*   `reference`: Unique reference for the payment.
*   `amount`: Payment amount.
*   `currency`: Currency code (e.g., USD).
*   `paymentMethod`: Payment method used (e.g., CARD).
*   `status`: Payment status (e.g., PENDING, COMPLETED).
*   `description`: Description of the payment.
*   `metadata`: Additional metadata stored as JSON.
*   `createdAt`: Timestamp of when the payment was created.
*   `updatedAt`: Timestamp of when the payment was last updated.

### Assumptions and Omissions

*   **In-Memory Data Storage:** This simulation uses in-memory storage for payments. Data is not persisted across application restarts.
*   **No Database Integration:** There is no actual database integration. Asynchronous operations are simulated using `Promise.resolve()`.
*   **Security:** Security aspects such as authentication abd authorization are not implemented in this simulation.

