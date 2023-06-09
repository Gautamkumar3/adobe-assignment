import {
  Box,
  Center,
  Spinner,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Heading,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import UserTable from "../Components/UserTable";
import { useDispatch, useSelector } from "react-redux";
import { getUsersData } from "../store/User/User.action";

const UserList = () => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((store) => store.users);

  useEffect(() => {
    dispatch(getUsersData());
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
