import React, { useCallback } from "react";
import {
  Box,
  VStack,
  Center,
  Heading,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

function Upload({ setFile }) {
  const hiddenFileInput = React.useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    setFile(fileUploaded);
  };

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    noClick: true,
    noKeyboard: true,
    maxFiles: 1,
  });

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
          border={`1px ${isDragActive ? "solid" : "dashed"} #97BEF4`}
          box-sizing=" border-box"
          border-radius="12px"
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <Center w="100%" h="100%">
            <Image
              src="/image.svg"
              border-radius="3px"
              background=" #CCCCCC"
              width="120px"
              height="100px"
            />
          </Center>
        </Box>

        <Text
          fontFamily=" Poppins"
          fontStyle=" normal"
          fontWeight=" 500"
          fontSize=" 12px"
          lineHeight=" 18px"
          /* identical to box height */

          text-align=" center"
          letterSpacing=" -0.035em"
        >
          or
        </Text>
        <Button
          colorScheme="blue"
          color="white"
          border-radius=" 8px"
          onClick={handleClick}
        >
          Choose a file
        </Button>
        <Input
          type="file"
          ref={hiddenFileInput}
          onChange={handleChange}
          display="none"
        />
      </VStack>
    </Center>
  );
}

export default Upload;
