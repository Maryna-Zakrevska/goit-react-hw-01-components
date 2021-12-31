import PropTypes from "prop-types";
import StatsItem from "./StatsItem";
import { StatisticsStyled, StatisticsTitle, StatisticsList } from "./Statistics.styled";

export default function Statistics({ title, stats }) {
  return (
    <StatisticsStyled>
      <StatisticsTitle>{title}</StatisticsTitle>
      <StatisticsList>{stats.map(StatsItem)}</StatisticsList>
    </StatisticsStyled>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
