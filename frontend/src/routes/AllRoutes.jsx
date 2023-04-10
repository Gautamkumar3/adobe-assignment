import React from "react";
import { Route, Routes } from "react-router-dom";
import UserForm from "../Page/UserForm";
import UserList from "../Page/UserList";
import UserDetails from "../Page/UserDetails";
import UserAnalytics from "../Page/UserAnalytics";
import PostForm from "../Page/PostForm";
import PostList from "../Page/PostList";
import PostDetails from "../Page/PostDetails";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UserForm />} />
      <Route path="/userlist" element={<UserList />} />
      <Route path="/userdetails/:id" element={<UserDetails />} />
      <Route path="/useranalytics" element={<UserAnalytics />} />
      <Route path="/post/:id" element={<PostForm />} />
      <Route path="/postlist" element={<PostList />} />
      <Route path="/postdetails/:id" element={<PostDetails />} />
    </Routes>
  );
};

export default AllRoutes;
