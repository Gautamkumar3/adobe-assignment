import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Button, Td, Tr, useToast } from "@chakra-ui/react";

import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser, getUsersData } from "../store/User/User.action";
import UserUpadateModal from "./UserUpadateModal";

const UserTable = ({ id, name, email, sn }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  const handleDelete = (id) => {
    dispatch(deleteUser(id)).then((res) => {
      if (res.status === "success") {
        toast({
          title: `${res.message}`,
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        dispatch(getUsersData());
      } else {
        toast({
          title: `Something went wrong`,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }
    });
  };

  return (
    <Tr>
      <Td>{sn}</Td>
      <Td>{name}</Td>
      <Td>{email}</Td>
      <Td>
        <Button
          colorScheme="whatsapp"
          onClick={() => navigate(`/userdetails/${id}`)}
        >
          View
        </Button>
      </Td>
      <Td>
        <UserUpadateModal id={id} />
      </Td>
      <Td>
        <DeleteIcon
          h={6}
          w={6}
          _hover={{ cursor: "pointer" }}
          onClick={() => handleDelete(id)}
        />
      </Td>
    </Tr>
  );
};

export default UserTable;
