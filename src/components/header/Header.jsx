import { useNavigate } from "react-router-dom";
import { headerElemets } from "../../Shared/Constants";
import Sidebar from "../sidebar/Sidebar";
import { useState } from "react";
import Backdrop from "../backdrop/Backdrop";
import { AnimatePresence, motion } from "framer-motion";
import { BsFillCartFill } from "react-icons/bs";

import { useRecoilState, useRecoilValue } from "recoil";
import { cartState } from "../../global-state/cartItems";

const Header = () => {
  const navigate = useNavigate();
  const [shown, setShown] = useState();
  const cartItems = useRecoilValue(cartState);

  return (
    <>
      <AnimatePresence>
        {shown && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit={"hidden"}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Backdrop
              onClick={() => {
                setShown(!shown);
              }}
            />

            <Sidebar shown={shown} setShown={setShown} />
          </motion.div>
        )}
      </AnimatePresence>

      <nav className={`${shown ? "blur-[2px]" : ""}  fixed top-0 z-50 w-full`}>
        <ul className=" flex list-none flex-wrap items-center justify-center">
          {headerElemets.map(({ label, route, style }) => {
            if (route === "cart") {
              return (
                <li
                  key={route}
                  onClick={() => {
                    if (label !== "Menu") navigate(`/${route}`);
                    if (label === "Menu") setShown(true);
                  }}
                  className={`${style} mx-5 my-10 cursor-pointer items-center 
              rounded-md  p-[10px] transition duration-200 ease-in-out hover:bg-gray-400 sm:w-auto `}
                >
                  <div className="relative">
                    <BsFillCartFill size={20} />
                    <span className="absolute -right-3 top-3">
                      {cartItems.length}
                    </span>
                  </div>
                </li>
              );
            }
            return (
              <li
                className={`${style} mx-5 my-10 cursor-pointer items-center 
              rounded-md  p-[10px] transition duration-200 ease-in-out hover:bg-gray-400 sm:w-auto `}
                key={label}
                onClick={() => {
                  if (label !== "Menu") navigate(`/${route}`);
                  if (label === "Menu") setShown(true);
                }}
              >
                {label}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Header;
