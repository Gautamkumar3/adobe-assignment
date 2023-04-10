import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../store/Post/Post.action";
import { useNavigate, useParams } from "react-router-dom";

const PostForm = () => {
  const [content, setContent] = useState("");
  const toast = useToast();
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (content.length > 300) {
      return toast({
        title: `Your post content should be less than equal to 300 words only.`,
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
    dispatch(createPost({ content, user_id: id })).then((res) => {
      console.log(res);
      if (res.status === "success") {
        toast({
          title: `${res.message}`,
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        navigate("/postlist");
      } else {
        toast({
          title: "Something went wrong",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }
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
        Post Form
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Content</FormLabel>
          <Textarea
            h={"150px"}
            type={"text"}
            placeholder="write your post content here.."
            onChange={(e) => setContent(e.target.value)}
          />

          <Button mt={3} type="submit" colorScheme={"whatsapp"} w="full">
            Create Post
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default PostForm;
