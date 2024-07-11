"use client"
import React from 'react';
import { useState } from 'react';
import { Box, Typography, Button, List, ListItem, Paper, Link } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { motion } from 'framer-motion';
import './main.css';
import FAQ from './FAQ';

const projects = [
    {
      title: 'Smart Cane for the Visually Impaired',
      description: 'A smart cane equipped with sensors to assist visually impaired individuals in navigation.'
    },
    {
      title: 'Line-following Robot',
      description: 'A robot that follows a line using infrared sensors, useful for automated transport systems.'
    },
    {
      title: 'IoT-based Poultry Farm System',
      description: 'An IoT system to monitor and manage environmental conditions in a poultry farm.'
    },
    {
      title: 'Alarm Clock using PIC16F877A Microcontroller',
      description: 'A programmable alarm clock built with a PIC16F877A microcontroller.'
    }
  ];

const Profile = () => {
  const [expanded, setExpanded] = useState(Array(projects.length).fill(false));

  const handleToggle = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };
  return (
    <Box
      className="profile-div"
      maxWidth="lg"
      mx="auto"
      p={3}
      sx={{
        background: 'linear-gradient(to right, #ffffff, #e0e0e0)',
        borderRadius: 2,
        boxShadow: 3,
        color: 'black',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" component="h3" gutterBottom>
          Some of my skills:
        </Typography>
        <List>
          {['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4', 'Skill 5', 'Skill 6'].map((skill, index) => (
            <ListItem key={index} sx={{ display: 'list-item', listStyleType: 'disc', ml: 2 }}>
              {skill}
            </ListItem>
          ))}
        </List>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-6"
      >
        <Typography variant="h4" component="h3" gutterBottom>
          Projects That I Have Done
        </Typography>
        {projects.map((project, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              p: 2,
              mb: 3,
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(5px)',
              borderRadius: 2
            }}
            component={motion.div}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Typography variant="h5" component="h4" gutterBottom>
              {project.title}
            </Typography>
            <Button
              variant="outlined"
              onClick={() => handleToggle(index)}
              endIcon={expanded[index] ?<p>Expand Less</p> :<p>Expand</p>}
            >
              {/* {expanded[index] ? 'Show Less' : 'Show More'} */}
            </Button>
            {expanded[index] && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <Typography mt={2}>{project.description}</Typography>
              </motion.div>
            )}
          </Paper>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" component="h3" gutterBottom className='mx-auto'>
          Download My Resume:
        </Typography>
        <Link href="/resume.pdf" download underline="none">
          <Button className="mx-auto" variant="contained" color="primary" sx={{ mt: 2 }}>
            Download
          </Button>
        </Link>
      </motion.div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6"
      >
        <FAQ/>
        <Typography  variant="h4" component="h3" gutterBottom>
          My Contact Information:
        </Typography>
        <Typography>Email: <Link href="mailto:example@example.com" color="inherit">example@example.com</Link></Typography>
        <Typography>Phone: <Link href="tel:+1234567890" color="inherit">+1234567890</Link></Typography>
        <Typography><Link href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" color="inherit">LinkedIn</Link></Typography>
      </motion.footer>
    </Box>
  );
};

export default Profile;
