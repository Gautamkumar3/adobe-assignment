import {
  Box,
  Center,
  Spinner,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
} from "@chakra-ui/react";

import axios from "axios";
import React, { useEffect, useState } from "react";
import UserTable from "../Components/UserTable";

const getUsers = async () => {
  let res = await axios.get("http://localhost:8080/allusers");
  return res.data;
};

const UserList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    getUsers()
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((er) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box mt={"15%"}>
        <Center>
          <Spinner
            w={"100px"}
            h="100px"
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
          />
        </Center>
      </Box>
    );
  }
  return (
    <Box w="80%" m="auto">
      <Heading textAlign={"center"} my={5}>
        User List
      </Heading>
      <TableContainer>
        <Table variant="striped" colorScheme="">
          <Thead h="60px" bg="gray.200">
            <Tr>
              <Th>S.No</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>View</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((user, index) => (
              <UserTable
                key={user._id}
                id={user._id}
                name={user.name}
                email={user.email}
                sn={index + 1}
              />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserList;
