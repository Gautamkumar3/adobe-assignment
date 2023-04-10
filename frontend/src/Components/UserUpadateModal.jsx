import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { getUsersData, updateUser } from "../store/User/User.action";

const UserUpadateModal = ({ id }) => {
  const [data, setData] = useState({ name: "", bio: "" });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(id, data)).then((res) => {
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
    <>

      <EditIcon onClick={onOpen} _hover={{ cursor: "pointer" }} h={6} w={6} />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update User form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <Input
                type={"text"}
                name="name"
                placeholder="name"
                onChange={handleChange}
              />
              <br />
              <br />
              <Textarea
                type={"text"}
                placeholder="write your bio here"
                name="bio"
                onChange={handleChange}
              />
              <br />
              <br />
              <Button
                type="submit"
                colorScheme={"whatsapp"}
                w="full"
                onClick={onClose}
              >
                Update User
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserUpadateModal;
