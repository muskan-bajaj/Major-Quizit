import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

const Login = React.lazy(() => import("./components/Login"));
const Register = React.lazy(() => import("./components/Register"));
const Profile = React.lazy(() => import("./components/Profile"));
const Assessment = React.lazy(() => import("./components/Assessment"));
const Result = React.lazy(() => import("./components/Result"));

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/signup"
            element={
              <Suspense>
                <Register />
              </Suspense>
            }
          />
          {isLoggedIn && (
            <Route
              path="/profile"
              element={
                <Suspense>
                  <Profile />
                </Suspense>
              }
            />
          )}
          {isLoggedIn && (
            <Route
              path="/assessment"
              element={
                <Suspense>
                  <Assessment />
                </Suspense>
              }
            />
          )}
          {isLoggedIn && (
            <Route
              path="/results"
              element={
                <Suspense>
                  <Result />
                </Suspense>
              }
            />
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
