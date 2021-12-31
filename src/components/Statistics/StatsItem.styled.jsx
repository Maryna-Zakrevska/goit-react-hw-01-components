import styled from "styled-components";

const StatsItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  width: calc(100% / 5);
  padding: 10px;

  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);

  transition: var(--time) var(--cubic) transform;
  background-color: #f3f6f9;
`;

const StatsItemLabel = styled.span`
  font-size: 0.9rem;
`;
const StatsItemPercentage = styled.span`
  font-size: 1.4rem;
`;

export {StatsItemStyled, StatsItemLabel, StatsItemPercentage};
