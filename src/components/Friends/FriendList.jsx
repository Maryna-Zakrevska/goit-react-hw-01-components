import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";

export default function FriendList({ friends }) {
  return <ul className="friend-list">{friends.map(FriendListItem)}</ul>;
}

FriendList.propTypes = { friends: PropTypes.arrayOf(PropTypes.object) };
