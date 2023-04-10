import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const getUserDetails = async (id) => {
  let res = await axios.get(`http://localhost:8080/posts/${id}`);
  return res.data;
};

const PostDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    getUserDetails(id).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <Box
      w={"30%"}
      m="auto"
      boxShadow="xl"
      p="6"
      rounded="md"
      bg="white"
      mt={"5%"}
    >
      <Text>
        <b>Post Content : </b> {data.content}
      </Text>
    </Box>
  );
};

export default PostDetails;
