import React from "react";
import image1 from "../../assets/images/bestofhyderabad_4_11zon.jpg";
import image2 from "../../assets/images/callingallbarhoppers.jpg";
import image3 from "../../assets/images/citylegends_21_11zon.jpg";
import image4 from "../../assets/images/proandproplus.jpg";
import { MdPlayArrow } from "react-icons/md";

const Collections = () => {
  const data = [
    {
      image: image1,
      title: "Top Trending Spots",
      des: "33 Places",
    },
    {
      image: image2,
      title: "Best Insta-worthy Places",
      des: "28 Places",
    },
    {
      image: image3,
      title: "Newly Opened Places",
      des: "27 Places",
    },
    {
      image: image4,
      title: "Winter Park at Jio World Drive",
      des: "17 Places",
    },
  ];
  return (
    <div className="py-10">
      <div className="flex flex-col py-10">
        <div className="text-[36px] font-medium">Collections</div>
        <div className="lg:flex  items-center justify-between">
          <div className="text-[18px] text-[#363636] font-normal">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Mumbai, based on trends
          </div>
          <div className="flex items-center gap-1 text-[16px] text-[#ef4f5f]">
            All collections in Mumbai <span><MdPlayArrow/></span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col rounded-md shadow-lg overflow-hidden"
          >
            <div
              className="w-full h-[20rem] bg-cover bg-center flex flex-col justify-end"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="flex flex-col px-4 py-1 text-white">
                <div className="text-[18px] font-light text-white">
                  {item.title}
                </div>
                <div className="font-normal text-[16px] ">{item.des}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
