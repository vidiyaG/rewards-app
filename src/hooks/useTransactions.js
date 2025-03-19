import { useEffect, useState, useMemo, useCallback } from "react";
import PropTypes from "prop-types";

import { logTransaction, downloadLogs } from "../utils/logger";

const useTransactions = (customerId, selectedMonth, selectedYear, refetch) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const today = new Date();
  const currentMonth = today.getMonth() + 1; // JavaScript months are 0-based
  const currentYear = today.getFullYear();

  const fetchTransactions = useCallback(async () => {
    logTransaction("Fetching transactions...", {
      customerId,
      selectedMonth,
      selectedYear,
    });
    setLoading(true);
    setError(null);
    setTransactions([]);

    // Simulating API call delay
    setTimeout(() => {
      fetch(`/data/transactions.json`)
        .then((response) => {
          if (!response.ok) throw new Error("Failed to fetch transactions");
          return response.json();
        })
        .then((data) => {
          const customerTransactions = data.filter(
            (txn) => txn.customerId === customerId
          );
          logTransaction(
            "Transactions fetched successfully",
            customerTransactions
          );
          setTransactions(customerTransactions);
        })
        .catch((err) => {
          setError(err.message);
          logTransaction("Transaction fetch failed", { error: err.message });
          console.error("Error loading transactions:", err);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 1000);
  }, [customerId]);
  useEffect(() => {
    fetchTransactions();
  }, [customerId, selectedMonth, selectedYear]);

  // Compute filtered transactions based on selected month, year, or last 3 months
  const filteredTransactions = useMemo(() => {
    if (selectedYear == currentYear && selectedMonth > currentMonth) {
      return [];
    }

    return transactions.filter((txn) => {
      const txnDate = new Date(txn.date);

      // Calculate the date 3 months ago

      const threeMonthsAgo = new Date(
        today.getFullYear(),
        today.getMonth() - 2,
        1
      );

      if (txnDate > today) {
        return false;
      }

      if (selectedMonth === "LAST_3_MONTHS") {
        return txnDate >= threeMonthsAgo && txnDate <= today;
      }

      return (
        (!selectedMonth ||
          txnDate.getMonth() + 1 === parseInt(selectedMonth)) &&
        (!selectedYear || txnDate.getFullYear() === parseInt(selectedYear))
      );
    });
  }, [transactions, selectedMonth, selectedYear]);

  return {
    transactions: filteredTransactions,
    loading,
    error,
    refetch: fetchTransactions,
    downloadLogs,
  };
};

useTransactions.propTypes = {
  customerId: PropTypes.string.isRequired,
  selectedMonth: PropTypes.string,
  selectedYear: PropTypes.string,
};

export default useTransactions;
