import React from "react";
import { calculateRewards } from "../utils/helpers";
import { SummaryContainer } from "../styles/GlobalStyles";

const RewardsSummary = ({ transactions, loading }) => {
  // Aggregate rewards per month
  const rewardsPerMonth = transactions?.reduce((acc, txn) => {
    const month = new Date(txn.date).toLocaleString("default", {
      month: "long",
      year: "numeric",
    });
    const rewards = calculateRewards(txn.amount);

    if (!acc[month]) acc[month] = 0;
    acc[month] += rewards;

    return acc;
  }, {});

  // Calculate the total rewards
  const totalRewards = Object.values(rewardsPerMonth).reduce(
    (sum, points) => sum + points,
    0
  );

  return (
    <SummaryContainer>
      <h3>Rewards Summary</h3>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Reward Points</th>
          </tr>
        </thead>
        {rewardsPerMonth && !loading && (
          <tbody>
            {Object.entries(rewardsPerMonth).map(([month, points]) => (
              <tr key={month}>
                <td>{month}</td>
                <td>{points}</td>
              </tr>
            ))}
            {/* Total Rewards Row */}
            <tr>
              <td>
                <b>Total</b>
              </td>
              <td>
                <b>{totalRewards}</b>
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </SummaryContainer>
  );
};

export default RewardsSummary;
