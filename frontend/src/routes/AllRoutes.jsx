import React from "react";
import { Route, Routes } from "react-router-dom";
import UserForm from "../Page/UserForm";
import UserList from "../Page/UserList";
import UserDetails from "../Page/UserDetails";
import UserAnalytics from "../Page/UserAnalytics";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UserForm />} />
      <Route path="/userlist" element={<UserList />} />
      <Route path="/userdetails/:id" element={<UserDetails />} />
      <Route path="/useranalytics" element={<UserAnalytics />} />
    </Routes>
  );
};

export default AllRoutes;
