import styled from "styled-components";

const ProfileAllStyled = styled.div`
  width: 320px;
  margin: 10px auto;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 2px 2px 2px 1px #cdd7e4;
`;

const ProfileDescription = styled.div`
  padding: 40px 16px;
  text-align: center;
`;

const ProfileAvatar = styled.img`
display: block;
width: 64%;
height: auto;
margin: 0 auto 32px;
border-radius: 50%;
`;

const ProfileName = styled.p`
  margin-bottom: 12px;
  font-size: 1.6rem;
  font-weight: 700;
  color: #122236;
`;

const ProfileTag = styled.p`
  margin-bottom: 12px;
  font-size: 1.1rem;
  color: #768696;
`;


const ProfileLocation = styled.p`
  font-size: 1.1rem;
  color: #768696;
`;

const ProfileStats = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  font-size: 1.1rem;
  list-style: none;
  border-top: 1px solid #e4e9f0;
`;

const ProfileStatsLabel = styled.span`
  font-size: 1.1rem;
  color: #768696;
`;

const ProfileStatsQuantity = styled.span`
  color: #25384d;
  font-weight: 700;
`;

const ProfileStatsItem = styled.li`
  display: flex;
  width: calc(100% / 3);
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 24px 20px;
  background-color: #f3f6f9;
  transition: var(--time) var(--cubic) transform;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  border-radius: 4px;
`;

export {ProfileAllStyled, ProfileDescription, ProfileAvatar, ProfileName, ProfileTag, ProfileLocation, ProfileStats, ProfileStatsLabel, ProfileStatsQuantity, ProfileStatsItem};