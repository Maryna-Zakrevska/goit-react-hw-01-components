import styled from "styled-components";

const TransactionHistoryStyled = styled.table`
  width: 320px;
  margin: 10px auto;
  box-shadow: 1px 1px 3px 1px rgba(33, 33, 33, 0.21);
  text-align: center;
  border-radius: 4px;
`;

const TransactionTableHead = styled.thead`
  padding: 20px;
  background: linear-gradient(180deg, rgb(152, 207, 195) 50%, rgb(86, 181, 184));
  color: #fff;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  font-size: 20px;
  border-radius: 4px;
  
`;

const TransactionTableHeadRow = styled.td`
  padding: 15px;
  border-radius: 4px 4px 0 0;
`;

export { TransactionHistoryStyled, TransactionTableHead, TransactionTableHeadRow };
