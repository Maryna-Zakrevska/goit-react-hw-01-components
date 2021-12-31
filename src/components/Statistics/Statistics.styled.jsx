import styled from "styled-components";

const StatisticsStyled = styled.section`
  width: 320px;
  margin: 10px auto;
  background-color: #fff;
  box-shadow: 1px 1px 4px 1px rgba(33, 33, 33, 0.21);
  border-radius: 4px;
`;

const StatisticsTitle = styled.h2`
  text-align: center;
  padding: 20px;
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 500;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  background: linear-gradient(180deg, rgb(152, 207, 195) 50%, rgb(86, 181, 184));
  color: #fff;
`;

const StatisticsList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export { StatisticsStyled, StatisticsTitle, StatisticsList };
