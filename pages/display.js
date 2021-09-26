import React, { useRef, useState } from "react";
import {
  VStack,
  Center,
  Icon,
  Text,
  Image,
  InputGroup,
  Input,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

function Display({ url }) {
  const [copied, setCopied] = useState("Copy link");
  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied("copied");
  };

  return (
    <Center
      m="2em"
      width=" 400.36px"
      height=" 454.96px"
      shadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
      background=" #FFFFFF"
      box-shadow=" 0px 4px 12px rgba(0, 0, 0, 0.1)"
      borderRadius={12}
    >
      <VStack>
        <Icon
          as={CheckCircleIcon}
          h={35}
          w={35}
          color="#219653"
          bg="white"
          borderRadius="100%"
        />
        <Text
          width=" 198px"
          height=" 27px"
          fontFamily=" Poppins"
          fontStyle=" normal"
          fontWeight=" 500"
          fontSize=" 18px"
          line-height=" 27px"
          /* identical to box height */

          text-align=" center"
          letter-spacing=" -0.035em"
          /* Gray 2 */

          color="#4F4F4F"
        >
          Uploaded Successfully!
        </Text>
        <Image
          src={url}
          width=" 338px"
          height=" 224.4px"
          bg="gray.100"
          border=" 1px solid #E0E0E0"
          box-sizing=" border-box"
          borderRadius="12px"
          objectFit="contain"
        />
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            value={url}
            border=" 1px solid #E0E0E0"
            box-sizing=" border-box"
            border-radius=" 8px"
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              bg="blue"
              color="white"
              onClick={handleCopyLink}
            >
              {copied}
            </Button>
          </InputRightElement>
        </InputGroup>
        )
      </VStack>
    </Center>
  );
}

export default Display;
