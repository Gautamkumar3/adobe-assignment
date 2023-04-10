import { EditIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  Textarea,
  Button,
  useToast,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { getPostsData, updatePost } from "../store/Post/Post.action";

const PostUpdateModal = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [content, setContent] = useState("");
    const dispatch = useDispatch();
    const toast=useToast()

  const handleSubmit = (e) => {
    e.preventDefault();
      dispatch(updatePost(id, { content })).then((res) => {
        if (res.status === "success") {
          toast({
            title: `${res.message}`,
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
          dispatch(getPostsData());
        } else {
          toast({
            title: `Something went wrong`,
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
        }
      console.log(res);
    });
  };

  return (
    <>
      <EditIcon onClick={onOpen} _hover={{ cursor: "pointer" }} h={6} w={6} />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Post Content Form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl isRequired>
                <FormLabel>Content</FormLabel>
                <Textarea
                  h={"150px"}
                  type={"text"}
                  placeholder="write your post content here.."
                  onChange={(e) => setContent(e.target.value)}
                />

                <Button
                  type="submit"
                  colorScheme={"whatsapp"}
                  w="full"
                  onClick={onClose}
                  my={3}
                >
                  Update Post Content
                </Button>
              </FormControl>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PostUpdateModal;
