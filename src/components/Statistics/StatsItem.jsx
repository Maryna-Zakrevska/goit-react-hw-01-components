import PropTypes from "prop-types";
import {StatsItemStyled, StatsItemLabel, StatsItemPercentage} from "./StatsItem.styled";

export default function StatsItem({ id, label, percentage }) {
  return (
    <StatsItemStyled key={id}>
      <StatsItemLabel>{label}</StatsItemLabel>
      <StatsItemPercentage>{percentage}%</StatsItemPercentage>
    </StatsItemStyled>
  );
}
StatsItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
