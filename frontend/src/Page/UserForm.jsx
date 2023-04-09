import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../store/User/User.action";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const api = "http://localhost:8080/users";
  const [data, setData] = useState({ name: "", email: "", bio: "" });
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.bio.length > 200) {
      return toast({
        title: `Your bio should be less than equal to 200 words only.`,
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
    dispatch(createUser(data))
      .then((res) => {
        if (res.status === "success") {
          toast({
            title: `${res.message}`,
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
          navigate("/userlist");
        } else {
          toast({
            title: "Something went wrong",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
        }
      })
      .catch((er) => {
        toast({
          title: `${er.message}`,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      });
  };

  return (
    <Box
      w={["90%", "50%", "30%"]}
      m={"auto"}
      boxShadow="md"
      p="6"
      rounded="md"
      bg="white"
      mt={"5%"}
    >
      <Heading textAlign={"center"} color={"tomato"} mb={5}>
        User Form
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            type={"text"}
            name="name"
            placeholder="name"
            onChange={handleChange}
          />
          <FormLabel mt={2}>Email</FormLabel>
          <Input
            type={"email"}
            placeholder="email"
            name="email"
            onChange={handleChange}
          />
          <FormLabel mt={2}>Bio</FormLabel>
          <Textarea
            type={"text"}
            placeholder="write your bio here.."
            name="bio"
            onChange={handleChange}
          />

          <Button mt={3} type="submit" colorScheme={"whatsapp"} w="full">
            Create User
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default UserForm;
