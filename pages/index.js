import Head from "next/head";
import Image from "next/image";
import { Flex } from "@chakra-ui/react";
import Upload from "./upload";
import Display from "./display";
import ProgressIndicator from "./progress";

export default function Home() {
  return (
    <Flex w="100vw" wrap="wrap" justify="space-around">
      <Upload />
      
      <Display />
    </Flex>
  );
}
