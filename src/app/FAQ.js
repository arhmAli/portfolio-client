"use client"
import React, { useState } from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'What is your experience in web development?',
    answer: 'I have experience in developing web applications using various technologies including React, Next.js, and Tailwind CSS.'
  },
  {
    question: 'What projects have you worked on?',
    answer: 'I have worked on a variety of projects including a smart cane for the visually impaired, a line-following robot, and an IoT-based poultry farm system.'
  },
  {
    question: 'What skills do you possess?',
    answer: 'My skills include programming in Python, C++, and JavaScript, as well as experience with ROS, MATLAB, and embedded systems development.'
  },
  {
    question: 'How can I contact you?',
    answer: 'You can contact me via email at example@example.com or phone at +1234567890.'
  }
];

const FAQ = () => {
  const [expanded, setExpanded] = useState(Array(faqs.length).fill(false));

  const handleToggle = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <Box className="mb-6">
      <Typography variant="h4" component="h3" gutterBottom>
        Frequently Asked Questions
      </Typography>
      {faqs.map((faq, index) => (
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
            {faq.question}
          </Typography>
          <Button
            variant="outlined"
            onClick={() => handleToggle(index)}
            endIcon={expanded[index] ? <span>close</span> : <span>expand</span>}
          >
          </Button>
          {expanded[index] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
            >
              <Typography mt={2}>{faq.answer}</Typography>
            </motion.div>
          )}
        </Paper>
      ))}
    </Box>
  );
};

export default FAQ;
