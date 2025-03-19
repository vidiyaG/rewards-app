import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Card, Container, Spacer, Title } from "./styles/GlobalStyles";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";

const Customers = lazy(() => import("./components/Customers"));
const CustomerTransactions = lazy(() =>
  import("./components/CustomerTransactions")
);

const App = () => {
  return (
    <ErrorBoundary>
      <Card>
        <Container>
          <Title>Rewards App</Title>
        </Container>
        <Router>
          <Routes>
            <Route path="/" element={<Customers />} />
            <Route
              path="/customers/:customerId/transactions"
              element={<CustomerTransactions />}
            />
          </Routes>
        </Router>
      </Card>
    </ErrorBoundary>
  );
};

export default App;
