// Dashboard.js
import React from 'react';
import styled from 'styled-components';
import { FaFlagCheckered, FaLaptopCode, FaBook, FaTrophy, FaLifeRing } from 'react-icons/fa';
import { Box, Card, CardContent, Typography, Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { FaCalendarAlt, FaStar, FaForumbee } from 'react-icons/fa';
import { useUser } from '@clerk/clerk-react';
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
    icon: <FaLaptopCode style={{ color: 'blue' }} />,
    title: 'Hackathons',
    description: 'Participate in ongoing and upcoming hackathons.',
  },
  {
    icon: <FaBook style={{ color: 'blue' }} />,
    title: 'Courses',
    description: 'Enroll in various courses to enhance your skills.',
  },
  {
    icon: <FaFlagCheckered  style={{ color: 'blue' }}/>,
    title: 'Catch the Flag',
    description: 'Compete in CTF challenges and improve your ranking.',
  },
  {
    icon: <FaTrophy style={{ color: 'blue' }} />,
    title: 'Winners',
    description: 'See the list of past competition winners.',
  },
  
];

const Dashboard = () => {
  const {user} = useUser()
  return (
    <div>
      <h1 className='text-2xl font-sans font-semibold ml-5 mt-3'>Welcome, {user.firstName} {user.lastName}</h1>
      <h1>{}</h1>
    <DashboardContainer>
      {cardsData.map((card, index) => (
        <Card1
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </DashboardContainer>
    <Box p={3}>
      <Grid container spacing={3}>
        {/* Upcoming Events */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Upcoming Events
              </Typography>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: blue }}>
                      <FaCalendarAlt color="white" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Hackathon 2024" secondary="July 10, 2024" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: blue }}>
                      <FaCalendarAlt color="white" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="CTF Challenge" secondary="August 15, 2024" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: blue }}>
                      <FaCalendarAlt color="white" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="React Workshop" secondary="September 1, 2024" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Leaderboard */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Leaderboard
              </Typography>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: blue }}>
                      <FaStar color="white" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Alice Smith" secondary="1500 points" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: blue }}>
                      <FaStar color="white" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Bob Johnson" secondary="1400 points" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: blue }}>
                      <FaStar color="white" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Charlie Brown" secondary="1300 points" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Community Section */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Community
              </Typography>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: blue }}>
                      <FaForumbee color="white" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Discussion on React" secondary="5 new posts" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: blue }}>
                      <FaForumbee color="white" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="JavaScript Q&A" secondary="3 new replies" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: blue }}>
                      <FaForumbee color="white" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Python Study Group" secondary="2 new threads" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Resources */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Resources
              </Typography>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: blue }}>
                      <FaBook color="white" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="React Documentation" secondary="reactjs.org" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: blue }}>
                      <FaBook color="white" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="JavaScript Info" secondary="javascript.info" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: blue }}>
                      <FaBook color="white" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Python Docs" secondary="python.org" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
};

export default Dashboard;
