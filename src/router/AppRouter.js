import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/HomePage/home";
import Login from "../components/Login/Login";
import Protected from "./ProtectedRoute";
import User from "../components/User/User";
import Index from "../components/HomePage";
const AppRouter = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Index />} />
          <Route path="login" element={<Login />} />
          <Route
            path="user"
            element={
              <Protected isSignedIn={true}>
                <User />
              </Protected>
            }
          />
        </Route>

        <Route path="*">404 not found</Route>
      </Routes>
    </>
  );
};
export { AppRouter };
