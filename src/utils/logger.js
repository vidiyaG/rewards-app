export const logs = []; // Store logs in memory

export const logTransaction = (message, data = null) => {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    message,
    data: data ? JSON.stringify(data) : "",
  };

  logs.push(logEntry);
};

export const downloadLogs = () => {
  if (logs.length === 0) {
    alert("No logs available to download.");
    return;
  }

  const csvContent = [
    ["Timestamp", "Message", "Data"], // CSV Headers
    ...logs.map((log) => [log.timestamp, log.message, `"${log.data}"`]), // Convert logs to rows
  ]
    .map((row) => row.join(",")) // Convert rows to CSV format
    .join("\n");

  const blob = new Blob([csvContent], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "transaction_logs.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
