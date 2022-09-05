import * as React from "react";
import {Box} from "@chakra-ui/react";
import Image from "next/image";

/**
 * Combines Chakra with Nextjs Image
 * @returns A React component that renders an image.
 */
const ChakraNextImage = ({src, ...props}) => {
  return (
    <Box height="100%" position="relative" width="100%" {...props}>
      <Image alt="" layout="fill" objectFit="cover" quality="100" src={src} />
    </Box>
  );
};

export default ChakraNextImage;
