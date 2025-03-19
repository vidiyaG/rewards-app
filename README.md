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
- Unit Testing with Vitest: Covers transaction amounts, reward calculation, pagination, and filtering.
- GitHub & Documentation: Repository includes setup guide, API details, and test results.

### Technologies Used

- React.js – UI Development
- Styled-components – CSS Styling
- Jest & React Testing Library – Unit Testing
- ESLint & Prettier – Code Quality
- GitHub – Version Control
- JSON data

# Setup Instructions

### Prerequisites

- Node.js installed (version: v22.14.0)

### Installation

1️⃣ Clone the repository

````sh
git clone https://github.com/vidiyaG/rewards-app.git
cd rewards-app
```sh

2️⃣ Install dependencies

```sh
`npm install`
```sh

3️⃣ Start the React app:

```sh
`npm start`
```sh

Runs the app on http://localhost:3000/

### Screens

Customers page
![Customers](/public/images/customers.png)

Transactions Page
![Transations](/public/images/transations.png)
````
