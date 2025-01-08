import React, { useState } from "react";

const GetApp = () => {
  const [contactMethod, setContactMethod] = useState("email");
  const [contactValue, setContactValue] = useState("");
  const [countryCode, setCountryCode] = useState("+1");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ contactMethod, contactValue, countryCode });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  mt-20 mx-auto w-[75%] ">
      <div
        className="w-full lg:h-[32rem] h-[20rem] bg-cover bg-center flex flex-col justify-end "
        style={{
          backgroundImage: `url(${"https://b.zmtcdn.com/data/o2_assets/ce5bc038a8a2d4f8f24465c8826182af1726501431.png"})`,
          backgroundSize: "80%", // Reduce the image size to 50%
          backgroundRepeat: "no-repeat", // Ensure no tiling
          backgroundPosition: "center", // Center the image
        }}
      ></div>
      <div className="flex flex-col gap-3 justify-center text-[16px] ">
        <div className="text-[44px] font-medium">Get the Zomato app</div>
        <div>We will send you a link, open it on your phone to download</div>
        <div> the app</div>

        <div className="flex gap-10 items-center ">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="contactMethod"
              value="email"
              checked={contactMethod === "email"}
              onChange={() => setContactMethod("email")}
              className="w-5 h-5 accent-[#EF4F5F] cursor-pointer" // Increased size and applied color
            />
            <span className="text-gray-700">Email</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="contactMethod"
              value="phone"
              checked={contactMethod === "phone"}
              onChange={() => setContactMethod("phone")}
              className="w-5 h-5 accent-[#EF4F5F] cursor-pointer" // Increased size and applied color
            />
            <span className="text-gray-700">Phone Number</span>
          </label>
        </div>

        <div className="flex gap-2 items-center">
          <div className="flex-grow">
            {contactMethod === "phone" && (
              <div className="flex items-center relative">
                <select
                  className="absolute left-0 top-0 h-full border-r px-2 py-1 rounded-l-lg focus:outline-none border "
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                >
                  <option value="+1">+1</option>
                  <option value="+91">+91</option>
                  <option value="+44">+44</option>
                  <option value="+61">+61</option>
                </select>
                <input
                  type="text"
                  className="border  px-4 py-3 pl-20 w-full focus:outline-none rounded-lg"
                  placeholder="Phone Number"
                  value={contactValue}
                  onChange={(e) => setContactValue(e.target.value)}
                />
              </div>
            )}

            {contactMethod === "email" && (
              <input
                type="email"
                placeholder="Email Address"
                className="border px-4 py-3 w-full focus:outline-none rounded-lg"
                value={contactValue}
                onChange={(e) => setContactValue(e.target.value)}
              />
            )}
          </div>

          <div>
            <button
              className="px-4 py-3 text-white rounded-lg bg-[#EF4F5F]"
              onClick={handleSubmit}
            >
              Share App Link
            </button>
          </div>
        </div>

        <div>Download app from</div>
        <div className="flex  gap-5">
          <div className="w-[146px] h-[38px] bg">
            <img
            loading="lazy" 
              src={
                "https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
              }
              alt="playstore"
              className="object-fit w-full h-full"
            />
          </div>
          <div className="w-[146px] h-[38px]">
            <img
            loading="lazy" 
              src={
                "https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
              }
              alt="appstore"
              className="object-fit w-full h-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetApp;
