import PropTypes from "prop-types";
import { FriendListItemStyled, AvatarImg, IsOnlineIndicator, FriendName } from "./FriendListItem.styled";

export default function FriendListItem({ id, avatar, name, isOnline }) {
  return (
    <FriendListItemStyled key={id}>
      <IsOnlineIndicator isOnline={isOnline}/>
      <AvatarImg src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendListItemStyled>
  );
}

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
