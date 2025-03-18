import { useEffect, useState, useMemo } from "react";

const useTransactions = (customerId, selectedMonth, selectedYear) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
          setTransactions(customerTransactions);
        })
        .catch((err) => {
          setError(err.message);
          console.error("Error loading transactions:", err);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 1000);
  }, [customerId, selectedMonth, selectedYear]);

  // Compute filtered transactions based on selected month, year, or last 3 months
  const filteredTransactions = useMemo(() => {
    return transactions.filter((txn) => {
      const txnDate = new Date(txn.date);

      // Calculate the date 3 months ago
      const today = new Date();
      const threeMonthsAgo = new Date(
        today.getFullYear(),
        today.getMonth() - 2,
        1
      );

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

  return { transactions: filteredTransactions, loading, error };
};

export default useTransactions;
