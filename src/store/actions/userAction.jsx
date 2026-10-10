import { loadusers } from "../reducers/UserReducer";

// Load current user from dummy object (Backend-less)
export const asyncCurrentUser = () => (dispatch) => {
  try {
    const dummyUser = {
      id: 1,
      name: "Prince",
      email: "prince@gmail.com",
      role: "customer",
    };

    // Load dummy user directly
    dispatch(loadusers(dummyUser));
    return true;
  } catch (err) {
    console.log("Error loading user:", err);
  }
};

// Register a new user (local storage only)
export const asyncRegisterUser = (data) => (dispatch) => {
  try {
    const newUser = {
      id: Date.now(),
      ...data,
    };

    localStorage.setItem("users", JSON.stringify(newUser));
    dispatch(asyncCurrentUser());
  } catch (err) {
    console.log("Registration error:", err);
  }
};

// Sign in existing user (local storage only)
export const asyncSigninUser = (credentials) => (dispatch) => {
  try {
    // Mock authentication - accept any credentials
    const userData = {
      id: Date.now(),
      name: "User",
      email: credentials.email,
      role: "customer",
    };

    localStorage.setItem("users", JSON.stringify(userData));
    dispatch(asyncCurrentUser());
    return true;
  } catch (err) {
    console.log("Login error:", err);
    return false;
  }
};
