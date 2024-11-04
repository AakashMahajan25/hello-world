import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

const Map = () => {
  return (
    <Flex
      justify="center"
      mb={10}
      gap="0px"
      p={{base:4, lg:0}}
    >
      <Box 
        w="1140px"
        h="514.58px"
        maxW="100%"
        borderRadius="12.67px 12.67px 12.67px 12.67px"
        overflow="hidden" 
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.6682124569197!2d77.1394244!3d28.789154699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d014980a269cf%3A0x513027852733d2c6!2sRudra%20Enterprises%20-%20Camio%20Paint%20Protection%20Film%20%26%20Heat%20Transfer%20Vinyl%20Supplier!5e0!3m2!1sen!2sin!4v1730486554390!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Box>
    </Flex>
  );
};

export default Map;
