import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Locations = () => {
      const data = [
        { title: "Lower Parel", place: "492 places" },
        { title: "Dadar", place: "350 places" },
        { title: "Andheri", place: "475 places" },
        { title: "Bandra", place: "420 places" },
        { title: "Churchgate", place: "390 places" },
        { title: "CST", place: "500 places" },
        { title: "Kalyan", place: "450 places" },
        { title: "Thane", place: "560 places" },
        { title: "see more" },
        { title: "Borivali", place: "490 places" },
        { title: "Mulund", place: "480 places" },
        { title: "Goregaon", place: "460 places" },
        { title: "Vikhroli", place: "430 places" },
        { title: "Jogeshwari", place: "415 places" },
        { title: "Lower Khari", place: "395 places" },
        { title: "Kandivali", place: "510 places" },
        { title: "Navi Mumbai", place: "575 places" },
        { title: "Vashi", place: "530 places" },
        { title: "Chembur", place: "470 places" },
        { title: "Bhayander", place: "490 places" },
        { title: "Worli", place: "475 places" },
        { title: "Mahalaxmi", place: "520 places" },
        { title: "Kurla", place: "530 places" },
        { title: "Khar", place: "480 places" },
        { title: "Sion", place: "460 places" },
        { title: "Ghatkopar", place: "500 places" },
        { title: "see less" },
      ];
      const [showAll, setShowAll] = useState(false);
    
      const handleToggle = (index) => {
        if (index === data.length - 1) {
          setShowAll(false); // Reset to initial state when clicking "Show Less"
        } else if (index === 8) {
          setShowAll(!showAll); // Toggle when clicking the 9th item
        }
      };
    
  return (
 <div className="py-10">
      <div className="font-normal text-[36px] py-5 text-[#363636]">
        Popular localities in and around{" "}
        <span className="text-black">Mumbai</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2">
        {data.slice(0, showAll ? data.length : 9).map((item, index) => (
          <div
            key={index}
            className={`flex items-center border border-gray-300 px-4 py-2 rounded-md shadow-lg cursor-pointer ${
              index === 8 || index === data.length - 1
                ? "justify-center text-center"
                : "justify-between"
            }`}
            onClick={() => handleToggle(index)} // Handle click for "Show More" and "Show Less"
          >
            <div>
              <div
                className={`${
                  index === 8 || index === data.length - 1
                    ? "text-[20px] font-normal text-[#363636]"
                    : "flex flex-col gap-1 text-[20px] font-normal text-[#1c1c1c]"
                }`}
              >
                {item.title}
              </div>
              {item.place && index !== 8 && index !== data.length - 1 && (
                <div className="text-[16px] font-normal text-[#363636]">
                  {showAll || index < 9
                    ? item.place
                    : `${item.place.slice(0, 50)}...`}
                </div>
              )}
            </div>
            {index !== 8 && index !== data.length - 1 && (
              <IoIosArrowForward size={15} />
            )}
            {(index === 8 || index === data.length - 1) && (
              <div>
                {index === 8 ? (
                  <IoIosArrowDown size={15} />
                ) : (
                  <IoIosArrowUp size={15} />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Locations