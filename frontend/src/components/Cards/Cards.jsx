import React from "react";
import image1 from "../../assets/images/orderonline.jpg";
import image2 from "../../assets/images/diningout.jpg";
import image3 from "../../assets/images/nightlifeandclubs.jpg";

const Cards = () => {
  const data = [
    {
      image: image1,
      title: "Order Online",
      des: "Stay home and order to your doorstep",
    },
    {
      image: image2,
      title: "Dining",
      des: "View the city's favourite dining venues",
    },
    {
      image: image3,
      title: "Live Events",
      des: "Discover India’s best events & concerts",
    },
  ];
  return (
    <div className="py-6">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col rounded-b-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            <div className="w-full h-40">
              <img
              loading="lazy" 
                src={item.image}
                alt=""
                className="object-cover w-full h-full rounded-t-xl"
              />
            </div>
            <div className="flex flex-col gap-1 p-4">
              <div className="text-[20px] text-[#363636] font-medium">
                {item.title}
              </div>
              <div className="text-[#4f4f4f] text-[16px] font-normal ">
                {item.des}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
