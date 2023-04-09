import { Box, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const getUserDetails = async (id) => {
  let res = await axios.get(`http://localhost:8080/users/${id}`);
  return res.data;
};

const UserDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    getUserDetails(id).then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <Box>
      <Heading>Details</Heading>
    </Box>
  );
};

export default UserDetails;
