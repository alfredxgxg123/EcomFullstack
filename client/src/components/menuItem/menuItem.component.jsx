import React from 'react';
import styled from 'styled-components';


const BackgroundImage = styled.div`
  width:100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`;

const Content = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
  h1 {
      font-weight: bold;
      margin-bottom: 6px;
      font-size: 22px;
      color: #4a4a4a;
  }
  span {
      font-weight: lighter;
      font-size: 16px;
  }
`;
const MenuItemStyle = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;
    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Content} {
      opacity: 0.9;
    }
  }
  &.large {
    height: 380px;
  }
  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }
`;

const MenuItem = ({
  title, imageUrl, size, linkUrl,
}) => (
  <MenuItemStyle className={`${size} menu-item`}>
    <BackgroundImage
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <Content>
      <h1>{title.toUpperCase()}</h1>
      <span>SHOP NOW</span>
    </Content>
  </MenuItemStyle>
);

export default MenuItem;
