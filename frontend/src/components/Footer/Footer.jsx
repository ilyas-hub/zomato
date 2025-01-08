import Gstore from "../../assets/images/playstore.png";
import Appstore from "../../assets/images/appstore.png";
import indianFlag from "../../assets/images/indiaflag.png";
import { IoIosArrowDown } from "react-icons/io";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGlobe,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
let Footer = () => {
  return (
    <div className="w-full bg-gray-100 p-8">
      <div className="w-[75%] mx-auto">
        {/* Header Section */}
        <div className="w-full mb-5 flex flex-wrap justify-between">
          <div className="">
            <img
              loading="lazy"
              src={
                "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
              }
              alt=""
            />
          </div>
          <div className="flex gap-4">
            <div className="p-2 border border-gray-300 rounded flex items-center">
              <img
                loading="lazy"
                className="w-5 h-5 mr-2"
                src={indianFlag}
                alt="India flag"
              />
              <span>India</span>
              <span className="ml-2">
                <IoIosArrowDown size={12} />
              </span>
            </div>
            <div className="p-2 border border-gray-300 rounded flex items-center">
              <span className="mr-2 ">
                <a href="#" className="text-black">
                  <FaGlobe className="text-xl" />
                </a>
              </span>
              <span>English</span>
              <span className="ml-2">
                <IoIosArrowDown size={12} />
              </span>
            </div>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Column 1 */}
          <div className="flex flex-col">
            <div className="mb-2 tracking-wider font-semibold">
              ABOUT TOMATO
            </div>
            <a href="#" className="mb-1 text-gray-600 text-sm">
              Who We Are
            </a>
            <a href="#" className="mb-1 text-gray-600 text-sm">
              Blog
            </a>
            <a href="#" className="mb-1 text-gray-600 text-sm">
              Work With Us
            </a>
            <a href="#" className="mb-1 text-gray-600 text-sm">
              Investor Relations
            </a>
            <a href="#" className="text-gray-600 text-sm">
              Report Fraud
            </a>
            <a href="#" className="text-gray-600 text-sm">
              Press Kit
            </a>
            <a href="#" className="text-gray-600 text-sm">
              Contact Us
            </a>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            <div className="mb-2 tracking-wider font-semibold">TOMAVERSE</div>

            <a href="#" className="mb-1 text-gray-600 text-sm">
              Zomato
            </a>
            <a href="#" className="mb-1 text-gray-600 text-sm">
              Blinkit
            </a>
            <a href="#" className="mb-1 text-gray-600 text-sm">
              District
            </a>
            <a href="#" className="text-gray-600 text-sm">
              Tomaland
            </a>
            <a href="#" className="text-gray-600 text-sm">
              Hyperpure
            </a>
            <a href="#" className="text-gray-600 text-sm">
              Zomato Live
            </a>
            <a href="#" className="text-gray-600 text-sm">
              Zomaland
            </a>
            <a href="#" className="text-gray-600 text-sm">
              Weather Union
            </a>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col">
            <div className="mb-2 tracking-wider font-semibold">
              FOR RESTAURANTS
            </div>
            <a href="#" className="mb-1 text-gray-600 text-sm">
              Partner With Us
            </a>
            <a href="#" className="mb-1 text-gray-600 text-sm">
              Apps For You
            </a>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col">
            <div className="mb-2 tracking-wider font-semibold">LEARN MORE</div>
            <a href="#" className="mb-1 text-gray-600 text-sm">
              Privacy
            </a>
            <a href="#" className="mb-1 text-gray-600 text-sm">
              Security
            </a>
            <a href="#" className="mb-1 text-gray-600 text-sm">
              Terms
            </a>
          </div>

          {/* Column 5 */}
          <div className="flex flex-col">
            <div className="mb-2 tracking-wider font-semibold">
              SOCIAL LINKS
            </div>
            <div className="flex gap-2 mb-4">
              <a
                href="#"
                className="flex items-center justify-center p-1 bg-black text-white rounded-full shadow-lg"
              >
                <FaFacebookF size={12} />
              </a>
              <a
                href="#"
                className="flex items-center justify-center p-1 bg-black text-white rounded-full shadow-lg"
              >
                <FaLinkedinIn size={12} />
              </a>
              <a
                href="#"
                className="flex items-center justify-center p-1 bg-black text-white rounded-full shadow-lg"
              >
                <FaInstagram size={12} />
              </a>
              <a
                href="#"
                className="flex items-center justify-center p-1 bg-black text-white rounded-full shadow-lg"
              >
                <FaXTwitter size={12} />
              </a>
              <a
                href="#"
                className="flex items-center justify-center p-1 bg-black text-white rounded-full shadow-lg"
              >
                <FaYoutube size={12} />
              </a>
            </div>

            <a href="#" className="w-36 h-10 mb-2">
              <img
                loading="lazy"
                className="w-full h-full rounded"
                src={Gstore}
                alt="Google Play Store"
              />
            </a>
            <a href="#" className="w-36 h-10">
              <img
                loading="lazy"
                className="w-full h-full rounded"
                src={Appstore}
                alt="Apple App Store"
              />
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <hr className="my-5 border-t border-gray-300" />
        <div className="text-gray-700 text-sm text-justify">
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2008-2025 © Zomato™ Ltd. All
          rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
