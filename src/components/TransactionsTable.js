import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import useTransactions from "../hooks/useTransactions";
import { calculateRewards, getYears, months } from "../utils/helpers";
import {
  Card,
  Center,
  GlobalStyles,
  Loader,
  Spacer,
} from "../styles/GlobalStyles";
import RewardsSummary from "./RewardsSummary";
import { PaginationButton } from "../styles/CustomerStyles";
import { downloadLogs } from "../utils/logger";
import "../../src/App.css";

const years = getYears();

const TransactionsTable = () => {
  const { customerId } = useParams();

  // State for selected filters
  const [selectedMonth, setSelectedMonth] = useState("LAST_3_MONTHS");
  const [selectedYear, setSelectedYear] = useState("");

  // Fetch transactions with selected filters
  const { transactions, loading, error, refetch } = useTransactions(
    customerId,
    selectedMonth,
    selectedYear,
    downloadLogs
  );

  // Months & Years for dropdown selection

  const today = new Date();
  const currentMonth = today.getMonth() + 1; // JavaScript months are 0-based
  const currentYear = today.getFullYear();

  const handleMonthChange = (selectedValue) => {
    setSelectedMonth(selectedValue);
    // If "Last 3 Months" is selected, disable & reset the year4
    if (selectedValue === "LAST_3_MONTHS") {
      setSelectedYear(""); // Reset year
    }
  };

  const handleYearChange = (selectedValue) => {
    setSelectedYear(selectedValue);

    if (selectedValue == currentYear && selectedMonth > currentMonth) {
      setSelectedMonth(""); // Reset to recent 3 months or current month
    }
  };

  return (
    <Spacer>
      <GlobalStyles />
      <div style={{ width: "66%" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Month:
            <select
              value={selectedMonth}
              onChange={(e) => handleMonthChange(e.target.value)}
            >
              {months.map((month) => (
                <option
                  key={month.value}
                  value={month.value}
                  disabled={
                    selectedYear == currentYear && month.value > currentMonth
                  }
                >
                  {month.label}
                </option>
              ))}
            </select>
          </label>

          <label style={{ marginLeft: "10px" }}>
            Year:
            <select
              value={selectedYear}
              onChange={(e) => handleYearChange(e.target.value)}
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
                {!loading && !error && (
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

        {error && (
          <Center>
            <Card>
              <Card>
                <span className="error">Error : {error}</span>
              </Card>

              <PaginationButton onClick={refetch}>Retry</PaginationButton>
            </Card>
          </Center>
        )}
      </div>
      <RewardsSummary transactions={transactions} loading={loading || error} />
    </Spacer>
  );
};

// **Prop Validations**
TransactionsTable.propTypes = {
  transactions: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default TransactionsTable;
