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
        <b>Bio : </b> {data.bio}, Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Sapiente ipsam, aut, quo porro nostrum asperiores
        incidunt, eaque autem obcaecati voluptatem a officia at. Cumque impedit
        distinctio, porro, sit aliquam nemo repudiandae ut pariatur perferendis
        cupiditate ipsa accusamus error! Aspernatur asperiores nulla culpa
        suscipit accusantium quis doloremque incidunt reiciendis eaque repellat.
      </Text>
      <Link to="/userlist">
        <Text
          my={2}
          color={"blue.600"}
          fontSize={"18px"}
          textDecor={"underline"}
          fontWeight={"bold"}
        >
          Go back to userlist page
        </Text>
      </Link>
    </Box>
  );
};

export default UserDetails;
