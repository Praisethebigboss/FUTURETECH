import React, { useState, useContext, useEffect, createContext } from "react";
import { Auth, provider } from "./Firebase";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loads, setLoads] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [attempts, setAttempts] = useState(1);
  const [disable, setDisable] = useState(false);
  const [loading, SetLoading] = useState(true);
  const [author, setAuthor] = useState(null);
  // to get ther user from firebase
  // to get the user from firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
      setAuthor(currentUser);
      SetLoading(false);
    });

    // cleanup subscription on unmount
    return () => unsubscribe();
  }, [Auth]);
  //  to log out the data
  const handleLogout = () => {
    signOut(Auth);
    navigate("/login");
  };
  // to read the input data
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  //  for the signin google
  const handleGoogle = async () => {
    setLoads(true);
    try {
      await signInWithPopup(Auth, provider);
      setLoads(false);
      toast.success("login successful", {
        style: {
          backgroundColor: "#141414",
          color: "green",
          textTransform: "capitalize",
        },
        duration: 4000,
      });
      navigate("/");
    } catch (error) {
      setLoads(false);
      if (error.code === "auth/network-request-failed") {
        toast.error("no internet,check your connection", {
          style: {
            backgroundColor: "#1A1A1A",
            color: "#ff4d4f",
          },
        });
      }
         if (error.code === "auth/internal-error") {
        toast.error("error occured", {
          style: {
            backgroundColor: "#1A1A1A",
            color: "#ff4d4f",
          },
        });
      }
       else {
        console.error(error);
      }
    }
  };
  //    for the login page
  const handleLogin = async () => {
    let isTrue = false;
    if (user.email.trim() === "") {
      isTrue = true;
      toast.error("Email field is empty", {
        style: {
          backgroundColor: "#1A1A1A",
          color: "#ff4d4f",
        },
        duration: 5000,
      });
    }
    if (user.password.trim() === "") {
      isTrue = true;
      toast.error("Password field is empty", {
        style: {
          backgroundColor: "#1A1A1A",
          color: "#ff4d4f",
        },
      });
    }

    // to sign in email and password
    if (!isTrue) {
      setLoads(true);
      let isValid = true;
      try {
        await signInWithEmailAndPassword(Auth, user.email, user.password);
        setLoads(false);
        toast.success("Login successful", {
          style: {
            backgroundColor: "#1A1A1A",
            color: "green",
          },
          duration: 3000,
        });
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } catch (error) {
        setLoads(false);
        if (error.code === "auth/user-not-found") {
          toast.error("Account doesnt exist", {
            style: {
              backgroundColor: "#1A1A1A",
              color: "#ff4d4f",
            },
          });
        } else if (error.code === "auth/invalid-email") {
          toast.error("Invalid email,try again", {
            style: {
              backgroundColor: "#1A1A1A",
              color: "#ff4d4f",
            },
          });
        } else if (error.code === "auth/wrong-password") {
          toast.error("Wrong password,try again", {
            style: {
              backgroundColor: "#1A1A1A",
              color: "#ff4d4f",
            },
          });
        } else if (error.code === "auth/invalid-credential") {
          isValid = false;
          toast.error("Invalid credentials", {
            style: {
              backgroundColor: "#1A1A1A",
              color: "#ff4d4f",
            },
          });
        } else if (error.code === "auth/network-request-failed") {
          toast.error("no internet,check your connection", {
            style: {
              backgroundColor: "#1A1A1A",
              color: "#ff4d4f",
            },
          });
        } else {
           console.error(error.code);
        }
      }
      // to lock the button
      if (!isValid) {
        let maxAttempts = 3;
        setAttempts((attempts) => attempts + 1);
        toast.error(`you have ${attempts} out of ${maxAttempts} attempts`, {
          style: {
            backgroundColor: "#1A1A1A",
            color: "#ff4d4f",
          },
        });
        if (attempts >= maxAttempts) {
          setDisable(true);
          toast.error("Maximum limit reached ! try after 10 seconds", {
            style: {
              backgroundColor: "#1A1A1A",
              color: "#ff4d4f",
            },
          });
          setTimeout(() => {
            setDisable(false);
            setAttempts(1);
          }, 10000);
        }
      }
    }
    setTimeout(() => {
      setUser({
        ...user,
        email: "",
        password: "",
      });
    }, 3000);
  };

  //   for the sign up page
  const handleSignup = async () => {
    let isValid = true;
    const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (user.email.trim() === "") {
      isValid = false;
      toast.error("Email is required", {
        style: {
          backgroundColor: "#1A1A1A",
          color: "#ff4d4f",
        },
        duration: 5000,
      });
    } else if (!email_regex.test(user.email.trim())) {
      isValid = false;
      toast.error("Invalid email type ", {
        style: {
          backgroundColor: "#1A1A1A",
          color: "#ff4d4f",
        },
        duration: 5000,
      });
    }
    if (user.password.trim() === "") {
      isValid = false;
      toast.error("Password is required ", {
        style: {
          backgroundColor: "#1A1A1A",
          color: "#ff4d4f",
        },
      });
    } else if (user.password.length < 8) {
      isValid = false;
      toast.error("Password should be 8 or more chararcters ", {
        style: {
          backgroundColor: "#1A1A1A",
          color: "#ff4d4f",
        },
      });
    }
    //   to validate the sign in
    if (isValid) {
      setLoads(true);
      try {
        await createUserWithEmailAndPassword(Auth, user.email, user.password);
        toast.success("Signup successful ", {
          style: {
            backgroundColor: "#1A1A1A",
            color: "green",
          },
          duration: 2000,
        });

        setTimeout(() => {
          setLoads(false);
          navigate("/login");
        }, 2000);
      } catch (error) {
        setLoads(false);
        if (error.code === "auth/email-already-in-use") {
          toast.error("Email already in use ", {
            style: {
              backgroundColor: "#1A1A1A",
              color: "#ff4d4f",
            },
            duration: 3000,
          });
        } else if (error.code === "auth/weak-password") {
          toast.error("Password is weak ", {
            style: {
              backgroundColor: "#1A1A1A",
              color: "#ff4d4f",
            },
            duration: 3000,
          });
        } else if (error.code === "auth/network-request-failed") {
          toast.error("no internet, check your connection ", {
            style: {
              backgroundColor: "#1A1A1A",
              color: "#ff4d4f",
            },
            duration: 3000,
          });
        } else {
          console.error(error.code);
        }
      }
    }
    setTimeout(() => {
      setUser({
        ...user,
        email: "",
        password: "",
      });
    }, 2000);
  };
  return (
    <AuthContext.Provider
      value={{
        handleGoogle,
        handleLogout,
        loads,
        handleChange,
        user,
        handleLogin,
        disable,
        handleSignup,
        loading,
        author,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
