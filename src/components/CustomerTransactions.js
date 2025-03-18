import React, { useState } from "react";
import { useParams } from "react-router-dom";
import RewardsSummary from "./RewardsSummary";
import TransactionsTable from "./TransactionsTable";
import { Container, GlobalStyles, Spacer } from "../styles/GlobalStyles";
import {
  CustomerCard,
  CustomerDetails,
  CustomerId,
  PaginationButton,
} from "../styles/CustomerStyles";
import { useNavigate } from "react-router-dom";

const CustomerTransactions = () => {
  const { customerId } = useParams();
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const navigate = useNavigate();

  const onNavigateHome = () => {
    navigate("/");
  };

  return (
    <>
      <GlobalStyles />
      <Container>
        <Spacer>
          <h3>Transactions</h3>
          <PaginationButton onClick={onNavigateHome}>
            View Customers
          </PaginationButton>
        </Spacer>

        {customerId && (
          <CustomerCard>
            <CustomerDetails>
              <CustomerId>Customer Id: {customerId}</CustomerId>
            </CustomerDetails>
          </CustomerCard>
        )}

        {customerId && (
          <TransactionsTable
            selectedCustomer={customerId}
            selectedMonth={selectedMonth}
            setSelectedMonth={setSelectedMonth}
          />
        )}
      </Container>
    </>
  );
};

export default CustomerTransactions;
