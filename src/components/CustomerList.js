import React, { useState } from "react";
import {
  CustomerListContainer,
  Table,
  PaginationContainer,
  Button,
  TableRow,
  PaginationButton,
  PaginationCard,
} from "../styles/CustomerStyles";
import { Card, Center, Loader, Spacer } from "../styles/GlobalStyles";
import useCustomers from "../hooks/useCustomers";
import "../../src/App.css";

const pageSizeOptions = [10, 20, 50];

const CustomerList = ({ onCustomerSelect }) => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const { customers, loading, error, totalPages, refetch } = useCustomers(
    page,
    pageSize
  );

  const onPageSizeChange = (e) => {
    setPage(1);
    setPageSize(Number(e.target.value));
  };

  return (
    <>
      {
        <CustomerListContainer>
          <Spacer>
            <h3>Customers</h3>
            <PaginationContainer>
              <PaginationCard>
                <span>Page Size:</span>
                <select value={pageSize} onChange={(e) => onPageSizeChange(e)}>
                  {pageSizeOptions.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </PaginationCard>
              <PaginationButton
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
              >
                &lt;
              </PaginationButton>
              <span>
                Page {page} of {totalPages}
              </span>
              <PaginationButton
                onClick={() => setPage(page + 1)}
                disabled={page >= customers.length}
              >
                &gt;
              </PaginationButton>
            </PaginationContainer>
          </Spacer>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Gender</th>
              </tr>
            </thead>

            {!loading && (
              <tbody>
                {customers.map((customer) => (
                  <TableRow
                    key={customer._id}
                    onClick={() => onCustomerSelect(customer._id)}
                  >
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.address}</td>
                    <td>{customer.gender}</td>
                  </TableRow>
                ))}
              </tbody>
            )}
          </Table>
          {loading && (
            <Center>
              <Loader />{" "}
            </Center>
          )}

          {error && (
            <Center>
              <Card>
                <Card>
                  <span className="error">Error: {error}</span>
                </Card>
                <PaginationButton onClick={refetch}>Retry</PaginationButton>
              </Card>
            </Center>
          )}
        </CustomerListContainer>
      }
    </>
  );
};

export default CustomerList;
