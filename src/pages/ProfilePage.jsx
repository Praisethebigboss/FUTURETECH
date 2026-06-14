import React from "react";
import NavBar from "../components/layouts/NavBar";
import { toast } from "sonner";
import { useEffect, useRef, useState } from "react";
import LikeBtn from "../components/ui/LikeBtn";
import ShareBtn from "../components/ui/ShareBtn";
import CommentBtn from "../components/ui/CommentBtn";
import AppButton from "../components/ui/AppButton";
import { useInView } from "../config/ObserverContext";
import { FaCamera } from "react-icons/fa";
import { LuNotebookText } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import FooterPart from "../components/ui/FooterPart";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/layouts/Footer";
import { db } from "../config/Firebase";
import {
  deleteDoc,
  doc,
  onSnapshot,
  collection,
  query,
  where,
} from "firebase/firestore";
import { useProfile } from "../config/ProfileContext";
import LoaderComp from "../components/ui/LoaderComp";
import Modal from "../components/ui/Modal";
const ProfilePage = () => {
  const [loading, setLoading] = useState(true);
  // to open the notification model
  const [open, setOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  // ref for the profile picture
  const ProfileRef = useRef(null);
  const { ref, visible } = useInView();
  // usecontext file
  const { handleImageChange, loads, User, blogpost, author } = useProfile();

  // to delete a blog post
  const deletePost = async (id) => {
    try {
      if (!author) {
        setOpen(false);
        return;
      }
      const deletedocs = doc(db, "blogs", id);
      await deleteDoc(deletedocs);
      toast.success("blogpost deleted", {
        style: {
          textTransform: "capitalize",
          backgroundColor: "#1e1e1e",
          color: "green",
        },
      });
      setOpen(false);
    } catch (error) {
      setOpen(false);
      console.log(error);
    }
  };
  // to get the news post
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      if (!author) return;
        const document = query(collection(db, "news"),where("authorId", "==", author.uid));
         const unsubscribe=onSnapshot(document,(snapshot)=>{
             const snapdocs=snapshot.docs.map((doc)=>({
              id:doc.id,
              ...doc.data()
             }))
             setNews(snapdocs)
         },(err)=>{
          console.log(err)
         })
          return ()=>unsubscribe()
    }
        fetchData()
  }, [author]);
  // to delete news post
  const deleteNewsPost = async (id) => {
    try {
      if (!author) {
        setOpen(false);
        return;
      }
      const deletedocs = doc(db, "news", id);
      await deleteDoc(deletedocs);
      toast.success("news post deleted", {
        style: {
          textTransform: "capitalize",
          backgroundColor: "#1e1e1e",
          color: "green",
        },
      });
      setOpen(false);
    } catch (error) {
      setOpen(false);
      console.log(error);
    }
  };
  //  for styling
  const styles = `transition-all ease-in-out duration-200 ${
    open ? "animate-movement" : "animate-reverse"
  }`;
  // to track the mapping of the news page
  return (
    <>
      {loads ? <LoaderComp /> : ""}
      <NavBar />
      <section
        className={` xs:mt-28 sm:mt-32 lg:mt-37 text-white capitalize font-inter relative `}
      >
        {/* for the notifaction modal to delete post */}
        <figure
          className={`w-full h-[100vh] fixed z-45 inset-0 bg-black/90 flex justify-center items-center backdrop-blur-sm  duration-200 transition-all ease-in-out ${
            open ? "" : "hidden"
          }`}
        >
          <Modal
            cancelFunction={() => { setOpen(false); setDeleteTarget(null); }}
            classname={styles}
            handleClick={() => {
              if (deleteTarget?.type === "blog") deletePost(deleteTarget.id);
              if (deleteTarget?.type === "news") deleteNewsPost(deleteTarget.id);
            }}
            modalText={"you want to delete this post"}
            exitFunction={() => { setOpen(false); setDeleteTarget(null); }}
          />
        </figure>

        <div
          className="flex flex-col md:flex-row justify-center items-center gap-2 lg:gap-3 border-b-1 border-[#1e1e1e] bg-[#141414] py-2 "
          ref={ref}
          data-aos={visible ? "fade-left" : "fade-right"}
          data-aos-easing="ease-in-out"
        >
          {/* profile image */}
          <aside className="xs:h-[8rem] sm:h-[9rem] md:h-[10rem] lg:h-[15rem] xs:w-[8rem] sm:w-[9rem] md:w-[10rem] lg:w-[15rem] rounded-full relative border-1 ">
            <img
              src={User? User.profilepic : "/avatarpic.webp"}
              alt=""
              className="h-full rounded-full w-full object-center"
            />
            <FaCamera
              className="xs:text-xl sm:text-2xl lg:text-3xl text-slate-400 absolute bottom-[2%] right-[12%] z-10 transition-all ease duration-800  active:text-yellow-400"
              onClick={() => ProfileRef.current.click()}
            />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
              ref={ProfileRef}
            />
          </aside>

          <div className="w-fit ">
            {/* profile name */}
            <p className="font-semibold xs:text-md sm:text-lg md:text-xl lg:text-3xl p-2 text-center md:text-left">
              {User ? User.fullname : "add profile name"}
            </p>
            {/* personal bio */}
            <p className="xs:w-[90%] sm:w-[60%] md:w-[80%] lg:w-[75%] text-slate-300 xs:text-ss sm:text-sm italic font-medium p-2 mx-auto md:mx-0 text-center md:text-left">
              {User ? User.biography : "add bio"}
            </p>
            {/* profile status */}
            <p className="font-medium text-slate-300  text-center md:text-left text-xs sm:text-sm md:text-md p-2">
              {User ? User.status : "add employee status"}
            </p>
            {/* for the profile email,country and phone number */}
            <aside className="flex p-2 mt-3 sm:mt-5 text-ss sm:text-xs  sm:items-center justify-self-center justify-between text-slate-200 font-semibold gap-3 w-fit lg:w-[30rem] flex-col sm:flex-row">
              <p>{User ? User.email : "add email"}</p>
              <p>{User ? `${User.phone_number}` : " add phone"}</p>
              <p>{User ? User.nationality : "add nationality"}</p>
            </aside>
          </div>
          <Link
            to={"/personalinfo"}
            className="text-sm lg:text-md font-medium text-slate-300 lg:p-3 transition-all ease duration-100 active:text-yellow-400  mr-3 lg:mr-0"
          >
            edit profile
          </Link>
        </div>

        {/* for the blog post input */}
        <section className="h-fit justify-center flex flex-col sm:flex-row bg-[#141414] py-2 ">
          {/* for the blog post creation */}
          <div className=" px-2 py-2 border-b-1 border-[#1e1e1e] sm:w-[25rem] md:w-[16rem]">
            <LuNotebookText className="xs:text-3xl sm:text-3xl md:text-4xl  text-slate-300 mb-2" />
            <p className="text-sm  md:text-md text-slate-300 transition-all ease duration-200 active:text-yellow-400 p-2">
              create posts
            </p>
            <aside className="flex p-2 mt-3 sm:mt-5 text-xs md:text-sm justify-between text-slate-300 font-semibold w-[fit] sm:w-[10rem] md:w-[14rem] gap-2">
              <AppButton
                BtnText={"blog"}
                BtnFunction={() => navigate("/createPost")}
              />
              <AppButton
                BtnText={"news"}
                BtnFunction={() => navigate("/createnewspost")}
              />
              <AppButton BtnText={"podcasts"} BtnFunction={() => navigate("/podcasts")} />
            </aside>
          </div>
          {/* for the profile blog posts */}
          <div
            className="sm:w-[50rem] p-1.5 border-l-1 border-[#1e1e1e] bg-[#141414]"
            data-aos={visible ? "fade-left" : "fade-right"}
            data-aos-delay="1000"
            data-aos-easing="ease-in-out"
            ref={ref}
          >
            <h1 className="p-2 font-bold text-xs sm:text-sm lg:text-lg bg-[#1e1e1e]">
              blogs
            </h1>
            {blogpost.length > 0 ? (
              <>
                {blogpost.map((item) => (
                  <section
                    className="flex ml-3 xs:h-[14rem] sm:h-[14rem]  justify-between items-center sm:gap-2 xs:flex-col sm:flex-row capitalize"
                    key={item.id}
                  >
                    <aside>
                      <p className="text-gray-400 font-light xs:text-ss sm:text-xs md:text-sm py-1.5 ">
                        {item.createdAt?.toDate?.().toLocaleDateString() || item.createdAt}
                      </p>
                      <h2 className="flex justify-between items-center gap-6 py-2 sm:text-md lg:text-lg">
                        {item.title}
                        {/* to open the delete modal */}
                        <aside
                          className=" h-[2.5rem] w-[2.5rem] flex justify-center items-center rounded-full duration-200 transition-all ease active:bg-[#1e1e1e]"
                          onClick={() => { setDeleteTarget({ type: "blog", id: item.id }); setOpen(true); }}
                        >
                          <BsThreeDotsVertical className="transition-all duration-200 ease text-lg active:text-slate-500 " />
                        </aside>
                      </h2>
                      <p
                        className="xs:text-ss md:text-xs text-gray-400 font-light py-3"
                        dangerouslySetInnerHTML={{
                          __html:
                            item.content.length > 100
                              ? item.content.slice(0, 100) + "..."
                              : item.content,
                        }}
                      ></p>
                      {/* => the likes,comment and share btns */}
                      <div className="flex items-center gap-3 py-3">
                        <LikeBtn likeCount={item.likes} Like={false} />
                        <CommentBtn commentCount={item.comment} />
                        <ShareBtn shareCount={item.shares} />
                      </div>
                    </aside>
                    <AppButton
                      width={true}
                      BtnFunction={() => navigate(`/blogpost/${item.id}`)}
                      BtnText="view blog"
                      iconArrow={true}
                    />
                  </section>
                ))}
              </>
            ) : (
              <>
                {/* for no blog post */}
                <section className="flex ml-3 xs:h-[14rem] sm:h-[14rem]  justify-center items-center capitalize bg-[#141414]">
                  <h2 className="py-2 text-sm sm:text-md lg:text-lg">
                    no blog post{" "}
                  </h2>
                </section>
              </>
            )}
          </div>
          {/* for the news post */}

          <aside
            className="sm:w-[50rem] p-1.5 border-l-1 border-[#1e1e1e] bg-[#141414]"
            ref={ref}
            data-aos={visible ? "fade-left" : "fade-right"}
            data-aos-delay="1700"
            data-aos-easing="ease-in-out"
          >
            <h1 className="font-bold text-xs sm:text-sm lg:text-lg p-2 bg-[#1e1e1e]">
              news{" "}
            </h1>
            {news.length > 0 ? (
              <>
                {news.map((item) => (
                  <section
                    className="flex ml-3 xs:h-[14rem] sm:h-[14rem]  justify-between items-center sm:gap-2 xs:flex-col sm:flex-row capitalize"
                    key={item.id}
                  >
                    <aside>
                      <p className="text-gray-400 font-light xs:text-ss sm:text-xs md:text-sm py-1.5 ">
                        {item.createdAt?.toDate?.().toLocaleDateString() || item.createdAt}
                      </p>
                      <h2 className="flex justify-between items-center gap-6 py-2 sm:text-md lg:text-lg">
                        {item.title}
                        {/* to open the delete modal */}
                        <aside
                          className=" h-[2.5rem] w-[2.5rem] flex justify-center items-center rounded-full duration-200 transition-all ease active:bg-[#1e1e1e]"
                          onClick={() => { setDeleteTarget({ type: "news", id: item.id }); setOpen(true); }}
                        >
                          <BsThreeDotsVertical className="transition-all duration-200 ease text-lg active:text-slate-500 " />
                        </aside>
                      </h2>
                      <p
                        className="xs:text-ss md:text-xs text-gray-400 font-light py-3"
                        dangerouslySetInnerHTML={{
                          __html:
                            item.content.length > 100
                              ? item.content.slice(0, 100) + "..."
                              : item.content,
                        }}
                      ></p>
                      {/* => the likes,comment and share btns */}
                    </aside>
                    <AppButton
                      width={true}
                      BtnFunction={() => navigate(`/newspost/${item.id}`)}
                      BtnText="view news"
                      iconArrow={true}
                    />
                  </section>
                ))}
              </>
            ) : (
              <>
                {/* for no news post */}
                <section className="flex ml-3 xs:h-[14rem] sm:h-[14rem]  justify-center items-center capitalize bg-[#141414]">
                  <h2 className="py-2 text-sm sm:text-md lg:text-lg">
                    no news post{" "}
                  </h2>
                </section>
              </>
            )}
          </aside>
        </section>

        {/* for the footer */}
        <FooterPart />
        <Footer />
      </section>
    </>
  );
};

export default ProfilePage;
