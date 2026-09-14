import React from 'react';
import { Box, Heading, Image, Text, Button } from '@chakra-ui/react';

const Home = () => {
return ( <Box className='home-page'> <Box className='home-container'> <Box className='home-content'> <Heading size='2xl' className='home-heading'>
Education for Future Leaders </Heading>


      <Text className='home-text'>
        Empowering students with modern technology skills, innovation,
        and real-world learning experiences to build a brighter future.
      </Text>

      <Button colorScheme='blue' size='lg'>
        Explore Courses
      </Button>
    </Box>

    <Box className='home-image-box'>
      <Image
        src='https://plus.unsplash.com/premium_vector-1682309270309-bc01eee5d33a?q=80&w=1170&auto=format&fit=crop'
        alt='Laptop learning'
        className='home-image'
      />
    </Box>
  </Box>
</Box>


);
};

export default Home;
