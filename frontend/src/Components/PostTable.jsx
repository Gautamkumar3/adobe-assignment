import { DeleteIcon } from "@chakra-ui/icons";
import React from "react";
import { Button, Td, Text, Tr, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import PostUpdateModal from "./PostUpdateModal";
import { useDispatch } from "react-redux";
import { deletePost, getPostsData } from "../store/Post/Post.action";

const PostTable = ({ id, sn, content }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  const handleDelete = (id) => {
    dispatch(deletePost(id)).then((res) => {
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
    });
  };

  return (
    <Tr>
      <Td>{sn}</Td>
      <Td maxWidth={"150px"}>
        <Text noOfLines={2}>{content}</Text>
      </Td>

      <Td>
        <Button
          colorScheme="whatsapp"
          onClick={() => navigate(`/postdetails/${id}`)}
        >
          View
        </Button>
      </Td>
      <Td>
        <PostUpdateModal id={id} />
      </Td>
      <Td>
        <DeleteIcon
          h={6}
          w={6}
          _hover={{ cursor: "pointer" }}
          onClick={() => handleDelete(id)}
        />
      </Td>
      <Td>Like</Td>
      <Td>Unlike</Td>
    </Tr>
  );
};

export default PostTable;
