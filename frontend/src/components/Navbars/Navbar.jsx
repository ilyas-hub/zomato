import React, { useState } from "react";
import search from "../../assets/images/search.png";
import downArrow from "../../assets/images/down-arrow1.png";
import location from "../../assets/images/location.png";
import menuIcon from "../../assets/images/menu.png";
import closeIcon from "../../assets/images/close.png";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null); // Manage active dropdown
  const [searchQuery, setSearchQuery] = useState(""); // Manage search input
  const [menuOpen, setMenuOpen] = useState(false); // Manage mobile menu visibility

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value) {
      setActiveDropdown("search");
    } else {
      setActiveDropdown(null);
    }
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Banner image */}
      <div
        className="w-full lg:h-[27rem] h-[calc(100vh-30vh)] bg-cover bg-center"
        style={{
          backgroundImage: `url(${"https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"})`,
        }}
      >
        {/* Navbar */}
        <div className="bg-transparent w-full z-10">
          <nav className="flex items-center justify-between mx-auto lg:w-[75%] w-[90%] text-[18px] text-white py-4">
            <div className="flex md:hidden">
              <img
              loading="lazy" 
                src={menuOpen ? closeIcon : menuIcon}
                alt="menu toggle"
                className="w-6 h-6 cursor-pointer z-30"
                onClick={toggleMenu}
              />
            </div>
            <div >{ menuOpen ?<div className="font-medium text-[14px] text-black">logo</div> :<div className="font-medium text-[14px]">Get App</div>}</div>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <div >Investor Relations</div>
              <div>Add restaurant</div>
              <div>Log in</div>
              <div>Sign up</div>
            </div>
            {/* Mobile Menu Toggle */}

          </nav>
          {/* Mobile Menu */}
          {menuOpen && (
            <div className="fixed inset-0 flex flex-col bg-white text-black px-4 py-4 space-y-4 z-20 overflow-hidden">
              <div className="pt-10">Investor Relations</div>
              <div>Add restaurant</div>
              <div>Log in</div>
              <div>Sign up</div>
            </div>
          )}
        </div>

        {/* Centered Content */}
        <div className="flex flex-col items-center justify-center gap-10 text-white mt-20 mx-auto lg:w-[70%] w-[90%]">
          <div className="font-bold w-[18rem] h-14">
            <img
            loading="lazy" 
              src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
              alt="Zomato Logo"
              className="object-fill w-full h-full"
            />
          </div>
          <div className="lg:text-4xl text-[20px]">
            Discover the best food & drinks in Mumbai
          </div>
          <div className="lg:flex lg:flex-row flex flex-col items-center text-black relative lg:gap-0 gap-4">
            {/* Location Dropdown */}
            <div
              className="flex items-center bg-white px-4 py-4 lg:rounded-l-lg  cursor-pointer"
              onClick={() => toggleDropdown("location")}
            >
              <img src={location} alt="compass" className="w-6 h-6 mr-2" />
              <span className="mr-2 text-gray-500">
                Empire Mills Complex Buil
              </span>
              <img
              
              loading="lazy" 
                src={downArrow}
                alt="dropdown"
                className={`w-4 h-4 transition-transform duration-300 ${
                  activeDropdown === "location" ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>

            {/* Location Dropdown Options */}
            {activeDropdown === "location" && (
              <div className="absolute top-[calc(100%+8px)] left-0 w-[300px] bg-white shadow-lg rounded-md mt-2">
                <div className="px-4 py-2 cursor-pointer">Mumbai</div>
                <div className="px-4 py-2 cursor-pointer">Delhi</div>
                <div className="px-4 py-2 cursor-pointer">Bengaluru</div>
              </div>
            )}

            {/* Search Input with Dropdown */}
            <div className="relative lg:w-[500px] w-full">
              <img
              loading="lazy" 
                src={search}
                alt="search icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
              <input
                type="text"
                className="pl-10 pr-4 py-4 w-full focus:outline-none lg:rounded-r-lg "
                placeholder="Search for restaurant, cuisine or a dish"
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() => toggleDropdown("search")}
              />
              {/* Search Dropdown Options */}
              {activeDropdown === "search" && (
                <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-white shadow-lg rounded-md mt-2">
                  <div className="px-4 py-2 cursor-pointer">Option 1</div>
                  <div className="px-4 py-2 cursor-pointer">Option 2</div>
                  <div className="px-4 py-2 cursor-pointer">Option 3</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


