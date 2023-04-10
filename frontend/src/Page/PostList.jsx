import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import PostTable from "../Components/PostTable";
import { getPostsData } from "../store/Post/Post.action";

const PostList = () => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((store) => store.posts);

  useEffect(() => {
    dispatch(getPostsData());
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
        Post List
      </Heading>
      <TableContainer>
        <Table variant="striped" colorScheme="">
          <Thead h="60px" bg="gray.200">
            <Tr>
              <Th>S.No</Th>
              <Th>Content</Th>
              <Th>View</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
              <Th>Like</Th>
              <Th>Unlike</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((post, index) => (
              <PostTable
                key={post._id}
                id={post._id}
                content={post.content}
                sn={index + 1}
              />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PostList;
