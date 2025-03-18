export const calculateRewards = (amount) => {
  let rewardPoints = 0;
  amount = parseInt(amount);

  if (amount > 100) {
    rewardPoints += Math.floor((amount - 100) * 2); // 2 points for each dollar above 100
  }

  if (amount > 50) {
    rewardPoints += Math.floor(Math.min(amount, 100) - 50); // 1 point for each dollar above 50 (but below 100)
  }

  return Math.max(0, rewardPoints); // Ensures points are always non-negative
};

export const getYears = () => {
  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 2; // Adjust the range as needed

  let yearsArray = [{ value: "", label: "--select--" }];

  for (let year = currentYear; year >= startYear; year--) {
    yearsArray.push({ value: year.toString(), label: year.toString() });
  }

  return yearsArray;
};

export const months = [
  { value: "", label: "--select--" },
  { value: "LAST_3_MONTHS", label: "Last 3 Months" },
  { value: "1", label: "January" },
  { value: "2", label: "February" },
  { value: "3", label: "March" },
  { value: "4", label: "April" },
  { value: "5", label: "May" },
  { value: "6", label: "June" },
  { value: "7", label: "July" },
  { value: "8", label: "August" },
  { value: "9", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];
