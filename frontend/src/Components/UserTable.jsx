import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Button, Td, Tr } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const UserTable = ({ id, name, email, sn }) => {
  const navigate = useNavigate();
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
        <EditIcon h={6} w={6} _hover={{ cursor: "pointer" }} />
      </Td>
      <Td>
        <DeleteIcon h={6} w={6} _hover={{ cursor: "pointer" }} />
      </Td>
    </Tr>
  );
};

export default UserTable;
