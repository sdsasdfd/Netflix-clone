import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LogOut, Menu, Search } from "lucide-react";
import { useAuthStore } from "../store/authUser";
import { useContentStore } from "../store/content";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuthStore();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const { setContentType } = useContentStore();

  return (
    <div className=" max-w-6xl h-20 mx-auto flex flex-wrap items-center justify-between p-4 ">
      <div className=" flex items-center gap-10 z-50">
        <Link to={"/"}>
          <img src="/netflix-logo.png" className="w-32 sm:w-40" alt="" />
        </Link>
        {/* desktop navbar */}
        <div className="hidden sm:flex gap-2 items-center">
          <Link
            to="/"
            className="hover:underline"
            onClick={() => setContentType("movie")}
          >
            Movies
          </Link>
          <Link
            to="/"
            className="hover:underline"
            onClick={() => setContentType("tv")}
          >
            Tv Shows
          </Link>
          <Link to="/history" className="hover:underline">
            Search History
          </Link>
        </div>
      </div>

      <div className=" flex gap-2 items-center z-50">
        <Link to={"/search"}>
          <Search className=" size-6 cursor-pointer" />
        </Link>
        <img src={user.image} className="h-8 rounded cursor-pointer" alt="" />
        <LogOut className=" size-6 cursor-pointer " onClick={logout} />
        <div className="sm:hidden">
          <Menu className="size-6 cursor-pointer" onClick={toggleMobileMenu} />
        </div>
      </div>

      {/* mobile navbar items */}
      {isMobileMenuOpen && (
        <div className=" w-full sm:hidden mt-4 z-50 bg-black border rounded border-gray-600">
          <Link
            to={"/"}
            className="block hover:underline p-2"
            onClick={toggleMobileMenu}
          >
            Movies
          </Link>
          <Link
            to={"/"}
            className="block hover:underline p-2"
            onClick={toggleMobileMenu}
          >
            Tv Shows
          </Link>
          <Link
            to={"/history"}
            className="block hover:underline p-2"
            onClick={toggleMobileMenu}
          >
            Search History
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
