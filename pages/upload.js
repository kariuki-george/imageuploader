import React from "react";
import {
  Box,
  VStack,
  Center,
  Heading,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";

function Upload() {
  return (
    <Center
      m="2em"
      w={402}
      shadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
      h={469}
      bg="white"
      borderRadius={12}
      p={36}
    >
      <VStack>
        <Heading
          color="#4F4F4F"
          line-height={27}
          letterSpacing="-3.5%"
          fontWeight="500"
          fontSize={18}
        >
          Upload your image
        </Heading>
        <Text
          color="#828282"
          line-height={15}
          letterSpacing="-3.5%"
          fontWeight="500"
          fontSize={10}
        >
          File should be JPEG,PNG, ...
        </Text>
        <Box
          w={338}
          h={218.9}
          background="#F6F8FB"
          border="1px dashed #97BEF4"
          box-sizing=" border-box"
          border-radius="12px"
        >
          <Center w="100%" h="100%">
            <Image
              src="../public/image.svg"
              border-radius="3px"
              background=" #CCCCCC"
              Width="
                          114.13px"
              Height="
                          88.24px"
            />
          </Center>
        </Box>

        <Text
          font-family=" Poppins"
          font-style=" normal"
          font-weight=" 500"
          font-size=" 12px"
          line-height=" 18px"
          /* identical to box height */

          text-align=" center"
          letter-spacing=" -0.035em"
        >
          or
        </Text>
        <Button colorScheme="blue" color="white" border-radius=" 8px">
          Choose a file
        </Button>
      </VStack>
    </Center>
  );
}

export default Upload;
