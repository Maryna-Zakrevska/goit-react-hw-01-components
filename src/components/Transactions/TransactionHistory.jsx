import PropTypes from "prop-types";
import TransactionHistoryItem from "./TransactionHistoryItem";
import { TransactionHistoryStyled, TransactionTableHead, TransactionTableHeadRow } from "./TransactionHistory.styled";

export default function TransactionHistory({ items }) {
  return (
    <TransactionHistoryStyled>
      <TransactionTableHead>
        <tr>
          <TransactionTableHeadRow >Type</TransactionTableHeadRow>
          <TransactionTableHeadRow h>Amount</TransactionTableHeadRow>
          <TransactionTableHeadRow >Currency</TransactionTableHeadRow>
        </tr>
      </TransactionTableHead>

      <tbody>{items.map(TransactionHistoryItem)}</tbody>
    </TransactionHistoryStyled>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
