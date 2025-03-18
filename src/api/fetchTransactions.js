export const fetchTransactions = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.1; // Simulate 90% success rate
      if (!success) return reject("Failed to fetch data");

      resolve([
        {
          customerId: "1",
          transactionId: "t101",
          amount: 120.5,
          date: "2024-01-15T10:00:00Z",
        },
        {
          customerId: "1",
          transactionId: "t102",
          amount: 75.0,
          date: "2024-02-10T12:30:00Z",
        },
        {
          customerId: "2",
          transactionId: "t201",
          amount: 45.75,
          date: "2024-02-25T09:45:00Z",
        },
        {
          customerId: "3",
          transactionId: "t301",
          amount: 200.99,
          date: "2024-03-03T08:20:00Z",
        },
        // More transactions...
      ]);
    }, 1000);
  });
};
