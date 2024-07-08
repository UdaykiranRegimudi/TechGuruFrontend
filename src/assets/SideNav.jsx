// src/SideNav.js
import React from 'react';
import styled from 'styled-components';
import { UserButton, useUser } from '@clerk/clerk-react';
import { FaTachometerAlt, FaLaptopCode, FaBook, FaFlagCheckered,FaRobot, FaTrophy, FaLifeRing, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = styled.div`
  height: 92vh;
  width: 250px;
  position: fixed;
  top: 3;
  left: 0;
  background-color: white;
  padding-top: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SidebarLinks = styled.div`
  flex-grow: 1;
`;

const SidebarLink = styled(Link)`
  padding: 10px 15px;
  text-decoration: none;
  font-size: 16px;
  color: ${props => props.active ? 'blue' : 'black'};
  display: flex;
  align-items: center;
  transition: 0.3s;

  &:hover {
    background-color: #f1f1f1;
  }

  & svg {
    margin-right: 10px;
    color: ${props => props.active ? 'blue' : 'black'};
  }
`;

const SupportProfile = styled.div`
  padding-bottom: 20px;
`;

const Sidenavbar = () => {
  const { user } = useUser();
  const username = user.username || user.firstName || user.lastName || user.emailAddress;

  return (
    <Sidebar>
      <div>
        <SidebarLinks>
          <SidebarLink to="/" className='m-2'>
            <FaTachometerAlt /> Dashboard
          </SidebarLink>
          <SidebarLink to="/hackathons" className='m-2'>
            <FaLaptopCode /> Hackathons
          </SidebarLink>
          <SidebarLink to="/courses" className='m-2'>
            <FaBook /> Courses
          </SidebarLink>
          <SidebarLink to="/ctf" className='m-2'>
            <FaFlagCheckered /> Catch the Flag
          </SidebarLink>
          <SidebarLink to="chatbot" className='m-2'>
            <FaRobot/> Chatbot
          </SidebarLink>
          <SidebarLink to="/winners" className='m-2'>
            <FaTrophy /> Winners
          </SidebarLink>
          
        </SidebarLinks>
      </div>
      <SupportProfile>
        <SidebarLink to="/support" className='m-2'>
          <FaLifeRing /> Support
        </SidebarLink>
        <SidebarLink to="/profile" className='mt-2 ml-1 mr-2 mb-2'>
          <UserButton /> <span className='ml-2'>{username}</span>
        </SidebarLink>
      </SupportProfile>
    </Sidebar>
  );
};

export default Sidenavbar;
