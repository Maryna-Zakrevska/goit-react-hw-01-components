import styled from "styled-components";

const TransactionTableRow = styled.tr`
  background-color: #f3f6f9;
  border: solid 1px black;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.1) inset;
`;

const TransactionType = styled.td`
  padding: 10px;
  text-align: left;
  text-transform: capitalize;
`;
const TransactionAmount = styled.td`
  padding: 10px;
  text-align: right;
  padding-right: 24px;
`;
const TransactionCurrency = styled.td`
  padding: 10px;
`;

export {TransactionTableRow, TransactionType, TransactionAmount, TransactionCurrency};