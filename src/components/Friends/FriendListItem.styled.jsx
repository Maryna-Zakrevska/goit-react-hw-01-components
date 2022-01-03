import styled from "styled-components";

const FriendListItemStyled = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  padding: 8px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 1px 1px 2px 1px #a5a5a5;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1) transform;
  :focus-within,
  :hover {
    transform: scale(1.03);
  }
`;

const AvatarImg = styled.img`
  display: block;
  width: 48px;
  height: auto;
`;

const IsOnlineIndicator = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => `${!isOnline ? "red" : "green"}}`};
`;

const FriendName = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
`;

export { FriendListItemStyled, AvatarImg, IsOnlineIndicator, FriendName };
