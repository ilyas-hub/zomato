import React, { useState } from "react";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqsData = [
    {
      id: 1,
      question: "Popular Cuisines Near Me",
      answer: (
        <div className="flex flex-wrap  gap-2">
          {[
            "Bakery near me",
            "Beverages near me",
            "Biryani near me",
            "Burger near me",
            "Chinese near me",
            "Desserts near me",
            "Ice Cream near me",
            "Kebab near me",
            "Maharashtrian near me",
            "Momos near me",
            "Mughlai near me",
            "North Indian near me",
            "Pizza near me",
            "Rolls near me",
            "Sandwich near me",
            "Seafood near me",
            "Shake near me",
            "Sichuan near me",
            "South Indian near me",
            "Street near me",
          ].map((item, index) => (
            <li key={index} className="list-disc">
              <a href="#" className="text-[16px] text-[#363636]">
                {item}
              </a>
            </li>
          ))}
        </div>
      ),
    },
    {
      id: 2,
      question: "Popular Restaurant Types Near Me",
      answer: (
        <div className="flex flex-wrap gap-2">
          {[
            "Bakeries near me",
            "Bars near me",
            "Beverage Shops near me",
            "Bhojanalya near me",
            "Cafés near me",
            "Casual Dining near me",
            "Clubs near me",
            "Cocktail Bars near me",
            "Confectioneries near me",
            "Dessert Parlors near me",
            "Dhabas near me",
            "Fine Dining near me",
            "Food Courts near me",
            "Food Trucks near me",
            "Irani Cafes near me",
            "Kiosks near me",
            "Lounges near me",
            "Microbreweries near me",
            "Paan Shop near me",
            "Pubs near me",
            "Quick Bites near me",
            "Shacks near me",
            "Sweet Shops near me",
          ].map((item, index) => (
            <li key={index} className="list-disc">
              <a href="#" className="">
                {item}
              </a>
            </li>
          ))}
        </div>
      ),
    },

    {
      id: 3,
      question: "Top Restaurant Chains",
      answer: (
        <div className="grid lg:grid-cols-5 grid-cols-3">
          <p>Bikanervala</p>
          <p>Blue Biryani</p>
          <p> Burger King</p>
          <p>Domino's</p>

          <p>Dunkin' Donuts</p>
          <p>KFC</p>
          <p> Krispy Kreme </p>
          <p>McDonald's </p>
          <p> Pizza Hut</p>
          <p>WOW! Momo</p>
        </div>
      ),
    },
    {
      id: 4,
      question: "Cities We Deliver To",
      answer: (
        <div className="grid lg:grid-cols-5 grid-cols-3 gap-2">
          {[
            "Delhi NCR",
            "Kolkata",
            "Mumbai",
            "Bengaluru",
            "Pune",
            "Hyderabad",
            "Chennai",
            "Lucknow",
            "Kochi",
            "Jaipur",
            "Ahmedabad",
            "Chandigarh",
            "Goa",
            "Indore",
            "Gangtok",
            "Nashik",
            "Ooty",
            "Shimla",
            "Ludhiana",
            "Guwahati",
            "Amritsar",
            "Kanpur",
            "Allahabad",
            "Aurangabad",
            "Bhopal",
            "Ranchi",
            "Visakhapatnam",
            "Bhubaneswar",
            "Coimbatore",
            "Mangalore",
            "Vadodara",
            "Nagpur",
            "Agra",
            "Dehradun",
            "Mysore",
            "Puducherry",
            "Surat",
            "Varanasi",
            "Patna",
            "Udaipur",
            "Srinagar",
            "Khajuraho",
            "Neemrana",
            "Cuttack",
            "Trivandrum",
            "Haridwar",
            "Leh",
            "Pushkar",
            "Rajkot",
            "Madurai",
            "Kozhikode",
            "Alappuzha",
            "Thrissur",
            "Manipal",
            "Vijayawada",
            "Jodhpur",
            "Kota",
            "Ajmer",
            "Mussoorie",
            "Rishikesh",
            "Jalandhar",
            "Jammu",
            "Manali",
            "All delivery cities",
          ].map((item, index) => (
            <a key={index} href="#" className="">
              {item}
            </a>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="w-full py-10 bg-[#FCFCFC]">
      <div className="w-[75%] mx-auto flex flex-col gap-5">
        <div className="text-[30px] font-medium">Explore options near me</div>
        {faqsData.map(({ id, question, answer }) => (
          <div
            key={id}
            className="border border-gray-300 rounded-l overflow-hidden"
          >
            <div
              className="flex justify-between items-center px-5 py-4 cursor-pointer text-lg font-medium text-gray-800"
              onClick={() => toggleAccordion(id)}
            >
              <span className="text-[20px] font-normal">{question}</span>
              <span className="text-gray-500">
                {activeIndex === id ? <div><IoIosArrowUp size={20}/></div> : <div><IoIosArrowDown size={20}/></div>}
              </span>
            </div>
            {activeIndex === id && (
              <div className="px-5 py-4 text-gray-700 bg-white text-base leading-relaxed">
                {answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
