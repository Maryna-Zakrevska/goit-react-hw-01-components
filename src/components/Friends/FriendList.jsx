import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import FriendListStyled from "./FriendList.styled";

export default function FriendList({ friends }) {
  return <FriendListStyled>{friends.map(FriendListItem)}</FriendListStyled>;
}

FriendList.propTypes = { friends: PropTypes.arrayOf(PropTypes.object) };
