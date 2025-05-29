## Payment Service Test

This project is a simple payment service test application built with Node.js, Express, and TypeScript. It includes a single endpoint for processing payments and uses `node:test` for testing.

### Prerequisites

*   Node.js (version 18 or higher)
*   npm or yarn

### Installation

1.  Clone the repository: `git clone <repository-url>`
2.  Navigate to the project directory: `cd PaymentServiceTest`
3.  Install dependencies: `npm install` or `yarn install`

### Usage

1.  Start the application: `npm start` or `yarn start`

### API Endpoints

*   `POST /process-payment`: Processes a payment.  Accepts a JSON payload with payment details (e.g., amount, currency, payment method).  Returns a success or error message.

### Testing

*   Run tests: `npm test` or `yarn test`

### Project Structure

```
├── README.md          # This file
├── src/
│   ├── app.ts         # Main application file (Express server)
│   ├── payment.service.ts # Payment processing logic
│   └── types.ts       # Type definitions
├── test/
│   └── payment.test.ts  # Test file for payment processing
├── package.json       # Project dependencies and scripts
├── tsconfig.json      # TypeScript configuration
└── .gitignore         # Specifies intentionally untracked files that Git should ignore
```
