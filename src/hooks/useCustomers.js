import { useEffect, useMemo, useState } from "react";

const useCustomers = (page = 1, pageSize = 10) => {
  const [allCustomers, setAllCustomers] = useState([]); // Store full data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    setTimeout(() => {
      fetch("/data/customers.json")
        .then((response) => {
          if (!response.ok) throw new Error("Failed to fetch customers");
          return response.json();
        })
        .then((data) => {
          setAllCustomers(data);
        })
        .catch((err) => {
          setError(err.message);
          console.error("Error loading customers:", err);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 2000); // Simulate API delay
  }, [page]);

  const paginatedCustomers = useMemo(() => {
    const startIndex = (page - 1) * pageSize;
    return allCustomers.slice(startIndex, startIndex + pageSize);
  }, [page, pageSize, allCustomers]);

  const totalPages = useMemo(
    () => Math.ceil(allCustomers.length / pageSize),
    [allCustomers.length, pageSize]
  );

  return { customers: paginatedCustomers, loading, error, totalPages };
};

export default useCustomers;
