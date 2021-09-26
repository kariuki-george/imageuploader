import React from "react";
import { Flex, Progress, Text } from "@chakra-ui/react";

function ProgressIndicator({ value }) {
  return (
    value !== 100 && (
      <Flex
        direction="column"
        width=" 400.36px"
        height=" 143.57px"
        p="2em"
        mt="2em"
        background=" #FFFFFF"
        box-shadow=" 0px 4px 12px rgba(0, 0, 0, 0.1)"
        borderRadius=" 12px"
        shadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
      >
        <Text mb={5}>Uploading</Text>
        <Progress
          isIndeterminate
          size="md"
          colorScheme="blue"
          borderRadius=" 12px"
        />
      </Flex>
    )
  );
}

export default ProgressIndicator;
