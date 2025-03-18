import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useTransactions from "../hooks/useTransactions";
import { calculateRewards, getYears, months } from "../utils/helpers";
import { Center, Loader, Spacer } from "../styles/GlobalStyles";
import RewardsSummary from "./RewardsSummary";
import {
  CustomerCard,
  CustomerDetails,
  CustomerId,
  CustomerName,
} from "../styles/CustomerStyles";

const years = getYears();
const TransactionsTable = () => {
  const { customerId } = useParams();

  // State for selected filters
  const [selectedMonth, setSelectedMonth] = useState("LAST_3_MONTHS");
  const [selectedYear, setSelectedYear] = useState("");

  // Fetch transactions with selected filters
  const { transactions, loading, error } = useTransactions(
    customerId,
    selectedMonth,
    selectedYear
  );

  // Months & Years for dropdown selection

  const handleMonthChange = (selectedValue) => {
    setSelectedMonth(selectedValue);

    // If "Last 3 Months" is selected, disable & reset the year4
    console.log(selectedValue);
    if (selectedValue === "LAST_3_MONTHS") {
      setSelectedYear(""); // Reset year
    }
  };

  if (error) return <p>{error}</p>;

  return (
    <Spacer>
      <div style={{ width: "66%" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Month:
            <select
              value={selectedMonth}
              onChange={(e) => handleMonthChange(e.target.value)}
            >
              {months.map((month) => (
                <option key={month.value} value={month.value}>
                  {month.label}
                </option>
              ))}
            </select>
          </label>

          <label style={{ marginLeft: "10px" }}>
            Year:
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              disabled={selectedMonth === "LAST_3_MONTHS"}
            >
              {years.map((year) => (
                <option key={year.value} value={year.value}>
                  {year.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <table border="1" width="100%">
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Reward Points</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length > 0 ? (
              transactions.map((txn) => (
                <tr key={txn.transactionId}>
                  <td>{txn.transactionId}</td>
                  <td>{txn.date}</td>
                  <td>${txn.amount}</td>
                  <td>{calculateRewards(txn.amount)}</td>
                </tr>
              ))
            ) : (
              <tr>
                {!loading && (
                  <td colSpan="4">
                    No transactions found for selected filters.
                  </td>
                )}
              </tr>
            )}
          </tbody>
        </table>
        {loading && (
          <Center>
            <Loader />{" "}
          </Center>
        )}
      </div>
      <RewardsSummary transactions={transactions} loading={loading} />
    </Spacer>
  );
};

export default TransactionsTable;
