import PropTypes from "prop-types";
import {TransactionTableRow, TransactionType, TransactionAmount, TransactionCurrency} from "./TransactionHistoryItem.styled";
export default function TransactionHistoryItem({id, type, amount, currency }) {
    return (
      <TransactionTableRow key={id}>
      <TransactionType>{type}</TransactionType>
      <TransactionAmount>{amount}</TransactionAmount>
      <TransactionCurrency>{currency}</TransactionCurrency>
    </TransactionTableRow>
    );
  }
  
  TransactionHistoryItem.propTypes = {
    id: PropTypes.string, 
    type: PropTypes.string, 
    amount: PropTypes.string, 
    currency: PropTypes.string,
  };