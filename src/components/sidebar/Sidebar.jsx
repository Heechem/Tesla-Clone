import { headerElemets } from "../../Shared/Constants";
import { useNavigate } from "react-router-dom";

import { SlMenu } from "react-icons/sl";

const Sidebar = ({ shown, setShown }) => {
  const navigate = useNavigate();

  return (
    shown && (
      <nav
        className={`fixed  right-0  top-0 z-[200]  h-full w-1/3  cursor-pointer bg-white  text-black md:w-1/4`}
      >
        <SlMenu
          size={20}
          onClick={() => setShown(!shown)}
          className="absolute right-0 top-0 m-5 cursor-pointer  hover:scale-110  hover:text-2xl hover:font-bold "
        />
        <ul className="gapt-7 flex list-none flex-col pt-16">
          {headerElemets.map(({ label, route }) => {
            if (label === "Menu") return null;
            return (
              <li
                key={label}
                onClick={() => {
                  navigate(`/${route}`), setShown(!shown);
                }}
                className="cursor-pointer  p-[10px] transition duration-300 ease-in-out hover:bg-gray-100 hover:underline hover:underline-offset-2"
              >
                {label}
              </li>
            );
          })}
        </ul>
      </nav>
    )
  );
};

export default Sidebar;
