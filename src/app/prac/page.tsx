'use client'
import { Box, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const MyComponent = () => {
  const [isAdded, setIsAdded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddClick = () => {
    setIsAdded(!isAdded);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box
      width="200px"
      height="200px"
      bg={isAdded ? 'green.500' : isHovered ? 'blue.300' : 'blue.500'}
      color="white"
      p={4}
      border={isAdded ? '2px solid green' : isHovered ? '2px solid blue' : '2px solid blue'}
      _hover={{
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        cursor: 'pointer',
      }}
      onClick={isAdded ? handleAddClick : undefined}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Box Content

      <Button
        mt={4}
        colorScheme={isAdded ? 'red' : 'teal'}
        bg={isAdded ? 'red.500' : isHovered ? 'blue.400' : 'teal.500'}
        _hover={{ bg: isAdded ? 'red.600' : isHovered ? 'blue.500' : 'teal.600' }}
      >
        {isAdded ? (
          <>
            Remove <FaTimes style={{ marginLeft: '0.5rem' }} />
          </>
        ) : isHovered ? (
          <>
            Add <FaCheck style={{ marginLeft: '0.5rem' }} />
          </>
        ) : (
          'Add'
        )}
      </Button>
    </Box>
  );
};

export default MyComponent;
