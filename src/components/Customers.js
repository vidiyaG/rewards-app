import React from "react";
import CustomerList from "./CustomerList.js";

import { GlobalStyles, Container } from "../styles/GlobalStyles.js";
import { useNavigate } from "react-router-dom";

const Customers = () => {
  // const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const navigate = useNavigate();

  const handleCustomerSelect = (customerId) => {
    // setSelectedCustomerId(customerId);
    navigate(`/customers/${customerId}/transactions`);
  };

  return (
    <>
      <GlobalStyles />
      <Container>
        <CustomerList onCustomerSelect={handleCustomerSelect} />
      </Container>
    </>
  );
};

export default Customers;
