import React from 'react';
import { Spinner } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';

const LoadingSpinner = () => (
    <Flex align="center" justify="center" height="100vh">

<Box textAlign="center">
          <Text fontSize='3xl'>Fetching data</Text>
    <Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
    />
</Box>
</Flex>
) 

export default LoadingSpinner;
