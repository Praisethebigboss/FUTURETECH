import React, { useState, createContext, useContext, useEffect } from "react";
import { db } from "./Firebase";
import {
  onSnapshot,
  collection,
  where,
  query,
  orderBy,
} from "firebase/firestore";
const TabContext = createContext();

export const TabProvider = ({ children }) => {
  // for the active tabs
  const [activeTab, setActiveTab] = useState("all");
  // to bring the all posts
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const collectionRef = collection(db, "blogs");

    // build query depending on activeTab
    const q =
      activeTab === "all"
        ? query(collectionRef, orderBy("createdAt", "desc"))
        : query(
            collectionRef,
            where("category", "==", activeTab),
            orderBy("createdAt", "desc")
          );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(items);
          
      },
      (err) => {
        console.log(err);
      }
    );

    // cleanup listener on unmount or when dependencies change
    return () => unsubscribe();
  }, [activeTab]);
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab, posts}}>
      {children}
    </TabContext.Provider>
  );
};
export const useTab = () => {
  return useContext(TabContext);
};
