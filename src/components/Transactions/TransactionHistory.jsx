import PropTypes from "prop-types";
import TransactionHistoryItem from "./TransactionHistoryItem";

export default function TransactionHistory ({items}) {
  return (
<table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(TransactionHistoryItem)}
  </tbody>
</table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

