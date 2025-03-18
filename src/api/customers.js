export const getCustomers = async () => {
  try {
    const response = await fetch("/customers.json"); // Fetch from public folder
    if (!response.ok) {
      throw new Error("Failed to load customers");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching customers:", error);
    throw error;
  }
};
