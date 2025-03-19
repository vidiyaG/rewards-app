# Rewards App

### Project Overview

This project is a React-based Customer Rewards Management System that simulates an API call using JSON data. It allows users to manage transactions, calculate customer reward points, and filter transaction history with pagination. The UI is built using React and styled-components, following best practices such as code splitting, prop validation, and transaction logging.

### Features

- Simulated API Calls: Mock JSON data with asynchronous fetching, loading state, and error handling.
- Customer Rewards Calculation: Based on transactions:
  `$1 over $50 → 1 point, $1 over $100 → 2 points.`
- Dynamic Filtering & Pagination:
- Default last 3 months of transactions, user can select a different month/year.
- Pagination for handling large data.
- React Best Practices: Component-based structure, prop validation, styled components, and code splitting.
- Unit Testing with Vitest: reward calculation, pagination, and filtering.
- GitHub & Documentation: Repository includes setup guide, API details, and test results.

### Technologies Used

- React.js – UI Development
- Styled-components – CSS Styling
- Jest & React Testing Library – Unit Testing
- ESLint & Prettier – Code Quality
- GitHub – Version Control
- JSON data

### UI screens

- View All Customers: The home page displays all customers and their transactions.
- Filter by Customer: Select a customer to view their rewards summary.
- Monthly Transaction Details: By default last 3 months of transactions in UI filter
- View transactions for a specific month and year (Disabled future dates dynamically).
- Change Time Filters: Adjust filters to see transactions from different months & years.
- Pagination: Navigate through large transaction records.
- Navigate between Customers and Transactions screens
- Reward summery for the selected month and/or year.
- Total reward points for the filtered transactions.
- Simulated Network API call for requesting customers and transactions data

### API Details (Simulated JSON Data)

```sh
{
  "customerId": "CUST123",
  "transactionId": "TXN456",
  "amount": 120.50,
  "date": "2024-07-11T20:43:19Z"
}

```

### Reward Points Calculation

![reward](/public/images/reward.png)

# Setup Instructions

### Prerequisites

- Node.js installed (version: v22.14.0)

### Installation

```sh
1️⃣ Clone the repository


git clone https://github.com/vidiyaG/rewards-app.git
cd rewards-app


2️⃣ Install dependencies

`npm install`


3️⃣ Start the React app:

`npm start`


Runs the app on http://localhost:3000/

Run tests using:

`npm test`

```

### Screens

Customers page
![Customers](/public/images/customers.png)

Transactions Page
![Transations](/public/images/transations.png)

### Testing

Reward Points Calculation
![reward-points](/public/images/reward-points-test.png)

### Loading Hangling

![loading](/public/images/loading.png)

### Error Handling

![error](/public/images/error.png)

### Default last 3 months of transactions and Rewards summery

![transactions](/public/images/transactions.png)

### Disabled future dates

![future-dates-filter](/public/images/future-dates-filter.png)
