import "./App.css";

import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Card, Container, Spacer, Title } from "./styles/GlobalStyles";
import ErrorBoundary from "./components/ErrorBoundary";

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
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Customers />} />
              <Route
                path="/customers/:customerId/transactions"
                element={<CustomerTransactions />}
              />
            </Routes>
          </Suspense>
        </Router>
      </Card>
    </ErrorBoundary>
  );
};

export default App;
