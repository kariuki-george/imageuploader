import Head from "next/head";
import Axios from "axios";
import { Flex, Text, Center, Box } from "@chakra-ui/react";
import Upload from "./upload";
import Display from "./display";
import ProgressIndicator from "./progress";
import { useEffect, useState } from "react";

export default function Home() {
  const [file, setFile] = useState();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [url, setUrl] = useState("");

  const upload = async (uploadFile) => {
    setSending(false);
    setSent(false);
    const url = `	https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;
    const formdata = new FormData();
    formdata.append("file", uploadFile);
    formdata.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
    );

    setSending(true);

    const res = await Axios.post(url, formdata);
    setSending(false);
    setSent(true);
    return res.data.secure_url;
  };
  useEffect(async () => {
    if (file !== undefined) {
      const res = await upload(file);
      setUrl(res.toString());
    }
  }, [file]);

  return (
    <>
      <Head>
        <title>Upload image</title>
        <meta name="description" content="Upload an image to cloudinary" />
        <link rel="icon" href="/devchallenges.png" />
      </Head>
      <Box h="100vh" position="fixed" overflowY="scroll" w="100vw">
        <Flex wrap="wrap" justify="space-around">
          <Upload setFile={setFile} />
          {sending && !sent && <ProgressIndicator />}
          {!sending && sent && <Display url={url} />}
        </Flex>
        <Center w="100%" position="fixed" h="40px" bottom="0px" bg="white">
          <Text color="gray">
            created by{" "}
            <a
              href="https://devchallenges.io/portfolio/smiley-geek"
              target="_blank"
            >
              Kariuki George
            </a>{" "}
            - devChallenges.io
          </Text>
        </Center>
      </Box>
    </>
  );
}
