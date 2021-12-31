import PropTypes from "prop-types";
import {ProfileAllStyled, ProfileDescription, ProfileAvatar, ProfileName, ProfileTag, ProfileLocation, ProfileStats, ProfileStatsLabel, ProfileStatsQuantity, ProfileStatsItem} from "./Profile.styled";

export default function Profile({user:{avatar, username, tag, location, stats:{followers, views, likes}}}) {
    return (
      <ProfileAllStyled>
        <ProfileDescription>
          <ProfileAvatar img src={avatar} alt="User avatar"/>
          <ProfileName>{username}</ProfileName>
          <ProfileTag>{tag}</ProfileTag>
          <ProfileLocation>{location}</ProfileLocation>
        </ProfileDescription>
  
        <ProfileStats>
          <ProfileStatsItem>
            <ProfileStatsLabel>Followers</ProfileStatsLabel>
            <ProfileStatsQuantity>{followers}</ProfileStatsQuantity>
          </ProfileStatsItem>
          <ProfileStatsItem>
            <ProfileStatsLabel>Views</ProfileStatsLabel>
            <ProfileStatsQuantity>{views}</ProfileStatsQuantity>
          </ProfileStatsItem>
          <ProfileStatsItem>
            <ProfileStatsLabel>Likes</ProfileStatsLabel>
            <ProfileStatsQuantity>{likes}</ProfileStatsQuantity>
          </ProfileStatsItem>
        </ProfileStats>
      </ProfileAllStyled>
    );
  }

  Profile.propTypes = {
    user: PropTypes.exact({
      username: PropTypes.string,
      tag: PropTypes.string,
      location: PropTypes.string,
      avatar: PropTypes.string,
     stats: PropTypes.objectOf(PropTypes.number),
    }),
  };