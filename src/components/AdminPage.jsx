import React from 'react';
import styled from 'styled-components';
import { FaFlagCheckered, FaLaptopCode, FaBook, FaTrophy, FaLifeRing } from 'react-icons/fa';
import {Link} from 'react-router-dom'

import Card1 from '../assets/Card';
const blue = "blue";
const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(245px, 1fr));
  gap: 20px;
  padding: 20px;
`;


const cardsData = [
  {
    icon: <FaLaptopCode style={{ color: 'red' }} />,
    title: 'Hackathons',
    description: 'Participate in ongoing and upcoming hackathons.',
    to:'/addHackathon'
  },
  {
    icon: <FaBook style={{ color: 'red' }} />,
    title: 'Courses',
    description: 'Enroll in various courses to enhance your skills.',
    to:'/addCourse'
  },
  {
    icon: <FaFlagCheckered  style={{ color: 'red' }}/>,
    title: 'Catch the Flag',
    description: 'Compete in CTF challenges and improve your ranking.',
    to:'/winners'
  },
  {
    icon: <FaTrophy style={{ color: 'red' }} />,
    title: 'Winners',
    description: 'See the list of past competition winners and support them.',
    to:'/winners'
  },
  
];


const AdminPage = () =>{
  return(
    // <div className="grid place-content-center" style={{minHeight:"80vh"}}>
    //         <h1 className="text-3xl text-slate-500 font-bold">Under Development 👷🚧</h1>
    //   </div>
    <div className='pt-4'>
      <h1 className='text-center text-2xl font-sans font-semibold mb-5'>Add Your Dynamic Courses</h1>
      <h1 className='font-medium text-center mb-10'>Your dedication today shapes the innovators of tomorrow. By organizing these events and courses, you empower students to unlock their potential and transform their dreams into reality.</h1>
      <DashboardContainer>
        {cardsData.map((card, index) => (
        <Link to={card.to}>
          <Card1
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        </Link>
        ))}
      </DashboardContainer>
    </div>
  )
}

export default AdminPage