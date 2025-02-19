import React, { useState } from "react";
import HeroImage from "../Assets/Anniversary.png";
import MoneyIcon from "../Assets/Money.png";
import Container from '../Assets/Container.png';
import { ChevronDown } from "lucide-react";
import ReferralModal from "./ReferralModal";
import Table from './Table'
import FAQ from './FAQ'
import Footer from './SectionFooter';

const ReferralPage = () => {
  const [selected, setSelected] = useState("Refer");
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

const scrollToSection = (sectionId) => {
  setSelected(sectionId);
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

  return (
    <div className="min-h-screen">
      <div className="bg-[#E3ECFC] text-center py-3">
        <p className="text-gray-700 text-sm">
          Navigate your ideal career path with tailored expert advice{" "}
          <a href="#" className="text-blue-600 ml-4 font-medium hover:underline">
            Contact Expert
          </a>
        </p>
      </div>

      {/* Navigation Bar */}
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left Section - Logo & Courses */}
            <div className="flex items-center">
              <div className="text-blue-600 font-bold text-xl">
                <a href="https://accredian.com/">
                  <img src={Container} alt="Logo" className="h-8" />
                </a>
              </div>

              {/* Courses Button with Dropdown */}
              <div className="relative ml-4">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Courses
                  <ChevronDown className="w-4 h-4 ml-2" />
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                  <ul className="py-2 text-gray-700">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Data Science</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">AI & Machine Learning</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Cybersecurity</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Cloud Computing</li>
                  </ul>
                </div>
                )}
              </div>
            </div>

            {/* Right Section - Navigation Links & Buttons */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Refer & Earn
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Resources
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                About Us
              </a>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                Login
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Try for free
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Secondary Navigation */}
      <div className="py-4 -mb-32">
        <div className="max-w-md mx-auto bg-white rounded-full shadow-sm">
          <div className="flex justify-between px-8 py-2 bg-[#1A73E81C] rounded-full">
            {["Refer", "Benefits", "FAQs", "Support"].map((item) => (
              <button
                key={item}
                className={`relative font-medium px-4 py-1 rounded-full transition-all focus:outline-none ${
                  selected === item ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => scrollToSection(item)}
              >
                {item}
                {selected === item && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Box */}
      <div className="min-h-screen flex justify-center items-center px-2 -mt-4">
        <div className="max-w-6xl w-full bg-[#F5F7FF] rounded-3xl shadow-[0px_10px_30px_rgba(0,0,0,0.2)] p-8 flex items-center relative">
            {/* Left Content */}
            <div className="w-1/2 pr-8 relative">
              {/* Money Icon Above Heading */}
              <img
                src={MoneyIcon}
                alt="Money"
                className="absolute -top-6 left-0 w-14 animate-bounce"
              />

              <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-4">
                Let's Learn & Earn
              </h1>
              <p className="text-xl text-gray-700 mb-2">Get a chance to win</p>
              <p className="text-3xl font-bold text-gray-900 mb-6">
                up to <span className="text-blue-600">Rs. 15,000</span>
              </p>
              <button
                className="bg-blue-600 text-white px-8 py-3 text-lg rounded-md hover:bg-blue-700 transition-colors"
                onClick={() => setIsModalOpen(true)} // Open modal on click
              >
                Refer Now
              </button>
            </div>

            {/* Right Content - Image with Floating Money */}
            <div className="w-1/2 relative flex justify-center">
              <img
                src={HeroImage} // ✅ Replace with your correct image path
                alt="Referral Promotion"
                className="w-full max-w-md object-cover rounded-3xl"
              />

              {/* Floating Money Elements */}
              <img
                src={MoneyIcon}
                alt="Money"
                className="absolute top-0 left-0 w-16 animate-bounce"
              />
              <img
                src={MoneyIcon}
                alt="Money"
                className="absolute top-8 right-0 w-12 animate-bounce"
              />
              <img
                src={MoneyIcon}
                alt="Money"
                className="absolute bottom-4 left-8 w-14 animate-bounce"
              />
            </div>
          </div>
          <ReferralModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </div>
  );
};

export default ReferralPage;
