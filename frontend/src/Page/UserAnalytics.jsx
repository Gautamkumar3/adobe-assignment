import { Box, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const getUserAnalytics = async () => {
  let res = await axios.get("http://localhost:8080/analytics/users");
  return res.data;
};

const UserAnalytics = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    getUserAnalytics().then((res) => {
      setCount(res.data);
    });
  }, []);

  return (
    <Box>
          <Heading>
             
        <b>Total Users : </b> {count}
      </Heading>
    </Box>
  );
};

export default UserAnalytics;
