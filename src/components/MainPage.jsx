import React from "react";
import Header from "./header/Header";
import { AnimatePresence, motion } from "framer-motion";
import Backdrop from "./backdrop/Backdrop";
import Sidebar from "./sidebar/Sidebar";

const MainPage = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default MainPage;
