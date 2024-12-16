import { Link } from "react-router-dom";
import { useState } from "react";
import { MdOutlineSegment } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBtn = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav className="border-gray-200 bg-slate-50 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://imgs.search.brave.com/jXd1ljCMWlulC2lFi--jHjHgVJ63Pmhd6oSUQv9EQ1U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bG9nb2pveS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MDUvMzAxNjM2MjEv/MV9iaWcxLTc2OHg1/OTEuanBn"
              className="h-8 sm:h-10 rounded-full"
              alt="travel agency Logo"
            />
            <span className="self-center text-xl sm:text-2xl font-semibold whitespace-nowrap">
              AA.Travels
            </span>
          </a>

          <MdOutlineSegment onClick={toggleBtn} className="md:hidden " />
          <div className="hidden w-full md:block md:w-auto  text-xl">
            <ul className="flex flex-col mt-4 rounded-lg ubuntu-medium bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <Link
                  to={"/"}
                  className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/packages"}
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
                >
                  Packages
                </Link>
              </li>

              <li>
                <Link
                  to={"/admin"}
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 "
                >
                  Admin
                </Link>
              </li>
            </ul>
          </div>

          {/* mobile view */}

          <div
            className={`lg:hidden ${
              isOpen ? "block" : "hidden"
            } w-full text-xl`}
          >
            <ul className="flex flex-col mt-4 rounded-lg bg-gray-50 space-y-4">
              <li>
                <Link
                  to={"/"}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/packages"}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  to={"/admin"}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                >
                  Admin
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
