import React from 'react';
import { Box, Heading, Text, Image, Stack } from '@chakra-ui/react';

const About = () => {
return ( <Box className='about-page'>


  {/* First Section */}
  <Stack
    direction={{ base: 'column', md: 'row' }}
    align='center'
    justify='space-between'
    className='about-section'
  >
    <Box flex='1'>
      <Heading size='2xl' className='about-heading'>
        About Our Institution
      </Heading>

      <Text className='about-text'>
        We are committed to providing high-quality education that prepares
        students for the challenges of tomorrow. Our institution focuses on
        academic excellence, practical learning, and technological innovation.
      </Text>

      <Text className='about-text'>
        With experienced faculty, modern learning facilities, and
        industry-oriented programs, we help students develop the knowledge,
        skills, and confidence needed to become future leaders.
      </Text>

      <Text className='about-text'>
        Our mission is to inspire lifelong learning and empower every student
        to achieve their full potential through education, creativity, and
        innovation.
      </Text>
    </Box>

    <Box flex='1' display='flex' justifyContent='center'>
      <Image
        src='https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80'
        alt='Students learning together'
        className='about-image'
      />
    </Box>
  </Stack>

  {/* Second Section */}
  <Stack
    direction={{ base: 'column', md: 'row' }}
    align='center'
    justify='space-between'
    className='about-section'
  >
    <Box flex='1' display='flex' justifyContent='center'>
      <Image
        src='https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=900&q=80'
        alt='Campus learning'
        className='about-image'
      />
    </Box>

    <Box flex='1'>
      <Heading size='2xl' className='about-heading'>
        Our Vision
      </Heading>

      <Text className='about-text'>
        We strive to create an environment where innovation, research, and
        creativity thrive. Our goal is to prepare students to become
        responsible professionals and leaders who contribute positively to
        society.
      </Text>

      <Text className='about-text'>
        Through modern teaching methods and industry partnerships, we ensure
        that every student receives practical exposure and opportunities for
        personal and professional growth.
      </Text>
    </Box>
  </Stack>

</Box>


);
};

export default About;
