import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import Aos from "aos";
import { useNavigate } from "react-router-dom";
import LoaderComp from "../components/ui/LoaderComp";
import { Auth } from "../config/Firebase";
import {sendPasswordResetEmail} from "firebase/auth";
import "aos/dist/aos.css";
import Form from "../components/form/Form";
const ForgottenPassWord = () => {
  const navigate=useNavigate()
  useEffect(() => {
    Aos.init();
  }, []);
  const [user, setUser] = useState({
    email: "",
  });
  //  loading state
  const [loading, setLoading] = useState(false);
  //  for handling on chnage
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  async function FetchData() {
    let isValid = true;
    const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (user.email.trim() === "") {
      isValid = false;
      toast.error("email is required", {
        style: {
          textTransform: "capitalize",
          backgroundColor: "#1a1a1a",
          color: "red",
        },
        duration: 3000,
      });
    } else if (!email_regex.test(user.email.trim())) {
      isValid = false;
      toast.error("invalid email", {
        style: {
          textTransform: "capitalize",
          backgroundColor: "#1a1a1a",
          color: "red",
        },
        duration: 3000,
      });
    }
    if (isValid) {
      setLoading(true);
      try {
        await sendPasswordResetEmail(Auth, user.email);
        setLoading(false);
        toast.success("password reset link has been sent to your email", {
          style: {
            textTransform: "capitalize",
            backgroundColor: "#1a1a1a",
            color: "green",
          },
          duration: 3000,
        });
         setTimeout(()=>{
           navigate('/login')
      },3000)
      } catch (error) {
        setLoading(false);
        if (error.code === "auth/network-request-failed") {
          toast.error("no internet,check your connection", {
            style: {
              textTransform: "capitalize",
              backgroundColor: "#1a1a1a",
              color: "#ff4d4f",
            },
            duration: 3000,
          });
        } else {
          console.log(error);
        }
      }
    }
    setTimeout(() => {
      setUser({ ...user, email: "" });
    }, 2000);
  }


  return (
    <div className=" text-white capitalize font-inter h-[100vh]">
      {loading ? <LoaderComp /> : ""}
      <section
        className="flex mx-auto w-fit  translate-y-50"
        data-aos="zoom-in"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
      >
        <Form
          ShowText="forgotten"
          User={user}
          SignupLink={true}
          showPassword={false}
          handleChange={handleChange}
          btnSubmit={FetchData}
          display={false}
          blogEditor={false}
          Text="reset password"
        />
      </section>
    </div>
  );
};

export default ForgottenPassWord;
