import React from "react";
import {
  FaTwitter,
  FaSquareFacebook,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-100 px-5 py-10" aria-labelledby="footer-heading">
      <div className="md:grid md:grid-cols-3 gap-4">
        <div className="col-span-1 mt-8 px-4">
          <h2 className="text-pink text-2xl font-medium mb-3">dribble</h2>
          <p>
            Dribble is the world's leading community for creatives to share grow
            and get hired.
          </p>
          <div className="flex gap-6 mt-4">
            <a href="#">
              <FaTwitter size={25} className="text-gray-700 cursor-pointer" />
            </a>
            <a href="#">
              <FaSquareFacebook
                size={25}
                className="text-gray-700 cursor-pointer"
              />
            </a>
            <a href="#">
              <FaPinterest size={25} className="text-gray-700 cursor-pointer" />
            </a>
            <a href="#">
              <FaInstagram size={25} className="text-gray-700 cursor-pointer" />
            </a>
          </div>
        </div>

        <div className="mt-4 col-span-2 grid grid-cols-2 justify-items-stretch sm:grid-cols-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
          <div className="flex flex-col gap-3 mt-4">
            <p className="font-semibold">For Designers</p>
            <a href="#">Go Pro!</a>
            <a href="#">Explore design work</a>
            <a href="#">Design blog</a>
            <a href="#">Overtime podcast</a>
            <a href="#">Playoffs</a>
            <a href="#">Weekly Warm-up</a>
            <a href="#">Refer a Friend</a>
            <a href="#">Code of conduct</a>
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <p className="font-semibold">Hire designers</p>
            <a href="#">Post a job opening</a>
            <a href="#">Post a freelance project</a>
            <a href="#">Search for designers</a>
            <p className="font-bold">Brands</p>
            <a href="#">Advertise with us</a>
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <p className="font-semibold">Company</p>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Support</a>
            <a href="#" className="font-bold">
              Media kit
            </a>
            <a href="#">Testimonials</a>
            <a href="#">API</a>
            <a href="#">Terms of service</a>
            <a href="#">Privacy policy</a>
            <a href="#">Cookie policy</a>
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <p className="font-semibold">Directories</p>
            <a href="#">Design jobs</a>
            <a href="#">Designers for hire</a>
            <a href="#">Freelance designers for hire</a>
            <a href="#" className="font-bold">
              Tags
            </a>
            <a href="#">Places</a>
            <p className="font-bold">Design assets</p>
            <a href="#">Dribble Marketplace</a>
            <a href="#">Creative Market</a>
            <a href="#">Fontspring</a>
            <a href="#">Font Squirrel</a>
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <p className="font-semibold">Design Resources</p>
            <a href="#">Freelancing</a>
            <a href="#">Design Hiring</a>
            <a href="#">Design Portfolio</a>
            <a href="#">Design Education</a>
            <a href="#" className="font-bold">
              Creative Process
            </a>
            <a href="#">Design Industry Trends</a>
          </div>
        </div>
      </div>
      <div className="px-10 mt-10 text-sm">
        <hr className="border-[1px]" />
        <div className="flex justify-between mt-4">
          <p className="text-gray-700">
            &copy; 2023 Dribble. All rights reserved.
          </p>
          <p>
            <span className="font-bold">20,501,853</span> shots dribbled
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
