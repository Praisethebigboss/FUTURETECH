import React from "react";
import NavBar from "../components/layouts/NavBar";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import Form from "../components/form/Form";
import { db } from "../config/Firebase";
import { toast } from "sonner";
import { useAuth } from "../config/AuthContext";
import LoaderComp from "../components/ui/LoaderComp";
import { setDoc, doc } from "firebase/firestore";
import { useInView } from "../config/ObserverContext";
import ContactDiv from "../components/ui/ContactDiv";
import ContactGrid from "../components/ui/ContactGrid";
import ContactBtn from "../components/ui/ContactBtn";
import FooterPart from "../components/ui/FooterPart";
import Footer from "../components/layouts/Footer";

const ContactPage = () => {
  const { author } = useAuth();
  const navigate = useNavigate();
  const { ref, visible } = useInView();
  useEffect(() => {
    Aos.init();
  }, []);
  const [contact, setContact] = useState({
    email: "",
    message: "",
    fullname: "",
  });
  // loading state
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  // for checking fullname length

  useEffect(() => {
    if (contact.fullname.trim().length >= 30) {
      const maxLength = contact.fullname.trim().slice(0, 30);
      setContact({ ...contact, fullname: maxLength });
      toast.error("name is too long", {
        style: {
          backgroundColor: "#141414",
          color: "red",
          textTransform: "capitalize",
        },
        duration: 3000,
      });
    }
  }, [contact.fullname]);
  // submit the contact information
  const handleSubmit = async () => {
    let isValid = true;
    const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (contact.message.trim() === "") {
      isValid = false;
      toast.error("message field is required", {
        style: {
          backgroundColor: "#141414",
          color: "red",
          textTransform: "capitalize",
        },
        duration: 3000,
      });
    }
    if (contact.fullname.trim() === "") {
      isValid = false;
      toast.error("name field is required", {
        style: {
          backgroundColor: "#141414",
          color: "red",
          textTransform: "capitalize",
        },
        duration: 3000,
      });
    }
    if (contact.email.trim() === "") {
      isValid = false;
      toast.error("email field is required", {
        style: {
          backgroundColor: "#141414",
          color: "red",
          textTransform: "capitalize",
        },
        duration: 3000,
      });
    } else if (!email_regex.test(contact.email.trim())) {
      isValid = false;
      toast.error("invalid email", {
        style: {
          backgroundColor: "#141414",
          color: "red",
          textTransform: "capitalize",
        },
        duration: 4000,
      });
    }

    // submit to firebase
    if (isValid) {
      setLoading(true);
      if (!author) {
        setLoading(false);
        toast.error("sign in first", {
          style: {
            backgroundColor: "#141414",
            color: "red",
            textTransform: "capitalize",
          },
          duration: 4000,
        });
        return; // stop here if no authenticated user
      }
      try {
        const contactId = "message" + Date.now();
        const data = {
          fullname: contact.fullname,
          message: contact.message,
          email: contact.email,
        };
        const documentRef = doc(
          db,
          "author",
          author.uid,
          "contacts",
          contactId
        );
        await setDoc(documentRef, data);
        setLoading(false);
        toast.success("message sent successfully", {
          style: {
            backgroundColor: "#141414",
            color: "green",
            textTransform: "capitalize",
          },
          duration: 4000,
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } catch (error) {
        
        if (error.code === "firestore/network-request-failed") {
          toast.error("no internet,check your connection", {
            style: {
              backgroundColor: "#1A1A1A",
              color: "#ff4d4f",
            },
          });
        } else {
          console.log(error);
        }
      }
      finally{
        setLoading(false)
      }
    }
    // to clear text from the input field
    setTimeout(() => {
      setContact({ ...contact, fullname: "", message: "", email: "" });
    }, 3000);
  };
  // for loading state
  if (loading) {
    return <LoaderComp />;
  }
  return (
    <>
      <NavBar />
      <section className="xs:mt-26 sm:mt-32 lg:mt-37">
        {/* contact header */}
        <div className="bg-[#141414] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <ContactDiv
            title="general inquiries"
            delay={"700"}
            firstBtnText="contact@ai-podcasts.com"
            secondBtnText="+1 (123) 456-7890"
          />
          <ContactDiv
            delay={"1400"}
            title="technical support"
            firstBtnText={"contact@ai-podcasts.com"}
            secondBtnText={"+1 (123) 456-7890"}
          />
          <ContactDiv
            title={"our office"}
            delay={"1800"}
            address={"Address: 123 AI Tech Avenue, Techville, 54321"}
            firstBtnText={"Get Directions"}
          />
          <ContactDiv icon={true} delay={"2200"} title={"connect with us"} />
        </div>
        {/* contact form */}
        <section className="flex flex-col md:flex-row justify-center items-center bg-[#141414] h-fit w-full gap-1">
          <div
            className="w-[100%] md:w-[50%] "
            ref={ref}
            data-aos={visible ? "fade-up" : "fade-down"}
            data-aos-easing="ease-in-out"
          >
            <ContactGrid />
          </div>
          <div
            className="w-[100%] lg:w-[50%] flex justify-center "
            ref={ref}
            data-aos={visible ? "fade-up" : "fade-down"}
            data-aos-easing="ease-in-out"
            data-aos-delay="800"
          >
            <Form
              User={contact}
              handleChange={handleChange}
              blogEditor={false}
              InputField={false}
              border_show={false}
              message={true}
              btnSubmit={handleSubmit}
              personalShow={true}
              display={true}
              showBlue={false}
              Text={"send"}
            />
          </div>
        </section>
        {/* for the asked questions */}
        <section className="flex flex-col md:flex-row items-center justify-center  bg-[#141414] h-fit w-full gap-1 ">
          <div
            className="w-[100%] md:w-[50%] "
            ref={ref}
            data-aos={visible ? "fade-up" : "fade-down"}
            data-aos-easing="ease-in-out"
          >
            <ContactGrid firstGrid={false} />
          </div>

          <div
            className="w-[100%] lg:w-[50%] flex flex-col gap-2.5 justify-center mb-2"
            ref={ref}
            data-aos={visible ? "fade-up" : "fade-down"}
            data-aos-easing="ease-in-out"
            data-aos-delay="800"
          >
            <ContactBtn
              title="what is AI?"
              text="AI stands for Artificial Intelligence, which refers to the simulation of
        human intelligence in machines. It enables them to perform tasks like
        problem-solving, learning, and decision-making."
              delay={"700"}
            />
            <ContactBtn
              title="how can i listen to your podcasts?"
              minus={false}
              delay={"1200"}
            />
            <ContactBtn
              title="are your podcasts free to listen to"
              minus={false}
              delay={"1500"}
            />
            <ContactBtn
              title="can i download episodes to listen offline ?"
              minus={false}
              delay={"1800"}
            />
            <ContactBtn
              title="how often do you release new episodes?"
              minus={false}
              delay={"2100"}
            />
          </div>
        </section>
        <FooterPart />
        <Footer />
      </section>
    </>
  );
};

export default ContactPage;
