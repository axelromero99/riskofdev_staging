import React from 'react'
import { Flex, Heading, Box } from '@chakra-ui/react';

const FirstView = () => {
  return (
    <Box w="100%" h="100%">
    <Flex align="center" h="100%" justify="center" w="100%">
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          zIndex: -1,
          position: "absolute",
          objectFit: "cover",
          height: "100%",
          filter: "blur(5px) brightness(0.5)",
        }}
      >
        <source
          src="/assets/firstview.webm"
          type="video/webm"
        />
      </video>
      <Flex
        align="center"
        color="font"
        direction="column"
        height="100%"
        justify="center"
        textAlign="center"
        textTransform="uppercase"
        width="100%"
      >
        <Heading as="h1" fontSize={{base: "25px", sm: "35px"}} fontWeight="300">
          {`{riskOfDev}`}
        </Heading>
        <Heading as="h2" fontSize={{base: "30px", sm: "40px"}} fontWeight="300">
          we are not another javascript joke
        </Heading>
      </Flex>
    </Flex>
    </Box>
  )
}

export default FirstView