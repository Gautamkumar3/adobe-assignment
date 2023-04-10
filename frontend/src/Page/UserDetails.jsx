import { Avatar, Box, Center, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const getUserDetails = async (id) => {
  let res = await axios.get(`http://localhost:8080/users/${id}`);
  return res.data;
};

const UserDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    getUserDetails(id).then((res) => {
      setData(res.data);
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
      <Center my={2}>
        <Avatar bg="gray.500" h={"100px"} w="100px" />
      </Center>

      <Text>
        <b>Name : </b> {data.name}
      </Text>
      <Text>
        <b>Email : </b> {data.email}
      </Text>
      <Text>
        <b>Bio : </b> {data.bio}
      </Text>
      <Link to="/useranalytics">
        <Text
          my={2}
          color={"blue.600"}
          fontSize={"18px"}
          textDecor={"underline"}
          fontWeight={"bold"}
        >
          Go to user analytics page
        </Text>
      </Link>
    </Box>
  );
};

export default UserDetails;
