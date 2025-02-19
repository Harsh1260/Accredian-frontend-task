import React, { useState } from "react";
import { ChevronRight, GraduationCap, ChevronDown } from "lucide-react";

const ReferralBenefits = () => {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState("ALL PROGRAMS");
  const [showAllPrograms, setShowAllPrograms] = useState(false);

  const categories = [
    "ALL PROGRAMS",
    "PRODUCT MANAGEMENT",
    "STRATEGY & LEADERSHIP",
    "BUSINESS MANAGEMENT",
    "FINTECH",
    "SENIOR MANAGEMENT",
    "DATA SCIENCE",
    "DIGITAL TRANSFORMATION",
    "BUSINESS ANALYTICS",
  ];

  const programs = [
    { name: "Professional Certificate Program in Product Management", referrerBonus: 7000, refereeBonus: 9000 },
    { name: "PG Certificate Program in Strategic Product Management", referrerBonus: 9000, refereeBonus: 11000 },
    { name: "Executive Program in Data Driven Product Management", referrerBonus: 10000, refereeBonus: 10000 },
    { name: "Executive Program in Product Management and Digital Transformation", referrerBonus: 10000, refereeBonus: 10000 },
    { name: "Executive Program in Product Management", referrerBonus: 10000, refereeBonus: 10000 },
    { name: "Advanced Certification in Product Management", referrerBonus: 10000, refereeBonus: 10000 },
    { name: "Executive Program in Product Management and Project Management", referrerBonus: 10000, refereeBonus: 10000 },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 mt-20">
      {/* Title */}
      <div className="text-center mb-4">
        <h1 className="text-2xl font-semibold">
          What Are The <span className="text-blue-500">Referral Benefits</span>?
        </h1>
      </div>

      {/* Enrolled Toggle */}
      <div className="flex justify-end items-center gap-2 mb-4">
        <span className="text-sm">Enrolled</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isEnrolled}
            onChange={() => setIsEnrolled(!isEnrolled)}
          />
          <div className="w-11 h-6 border border-black rounded-full peer peer-checked:after:bg-blue-500 after:content-[''] after:absolute after:top-1 after:left-1 after:bg-black after:border after:border-black after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-5"></div>
        </label>
      </div>

      <div className="flex gap-6">
        {/* Left Sidebar (Categories) */}
        <div className="w-64 shadow-xl rounded-lg overflow-hidden bg-white">
          <div className="p-0">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setExpandedCategory(category)}
                className={`relative w-full px-4 py-3 text-left flex justify-between items-center hover:bg-blue-50 transition-colors ${
                  expandedCategory === category ? "bg-blue-500 text-white font-bold" : ""
                }`}
              >
                <span className="relative z-10">{category}</span>
                <ChevronRight className="w-4 h-4 relative z-10" />
                {/* Gray separator lines */}
                {category !== "ALL PROGRAMS" && category !== "BUSINESS ANALYTICS" && (
                  <div className="absolute left-4 right-6 bottom-0 h-[1.5px] bg-gray-400"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right Section (Programs Table) */}
        <div className="flex-1 shadow-lg rounded-xl bg-white overflow-hidden">
          <div className="p-0">
            {/* Table Header */}
            <div className="grid grid-cols-[1.6fr_0.8fr_0.8fr] bg-blue-100 p-4 font-semibold text-center rounded-t-xl text-sm border-b border-gray-300">
              <div className="text-left pl-4">Programs</div>
              <div className="text-center border-l border-gray-300">Referrer Bonus</div>
              <div className="text-center border-l border-gray-300">Referee Bonus</div>
            </div>

            {/* Table Content */}
            <div className="">
              {programs
                .slice(0, showAllPrograms ? programs.length : 5) // Show limited rows
                .map((program, index) => (
                  <div
                    key={program.name}
                    className="grid grid-cols-[1.6fr_0.8fr_0.8fr] items-center text-sm py-6" // Increased row height
                  >
                    {/* Program Name */}
                    <div className="flex items-center gap-2 text-left pl-4">
                      <GraduationCap className="text-blue-500 fill-blue-500 w-4 h-4 flex-shrink-0" />
                      <span className="whitespace-normal">{program.name}</span>
                    </div>

                    {/* Bonus Columns (Ensuring Continuous Single Column Line) */}
                    <div className="text-center border-l border-gray-300 h-full flex items-center justify-center">
                      ₹ {program.referrerBonus.toLocaleString()}
                    </div>
                    <div className="text-center border-l border-gray-300 h-full flex items-center justify-center">
                      ₹ {program.refereeBonus.toLocaleString()}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* "Show More/Less" Button (Bottom Right) */}
      <div className="flex justify-end mt-6">
        <button
          onClick={() => setShowAllPrograms(!showAllPrograms)}
          className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
        >
          Show {showAllPrograms ? "Less" : "More"}
          <ChevronDown className={`w-4 h-4 transform transition-transform ${showAllPrograms ? "rotate-180" : ""}`} />
        </button>
      </div>

      {/* "Refer Now" Button (Centered) */}
      <div className="flex justify-center mt-6">
        <button className="bg-blue-500 text-white px-8 py-2 rounded-lg font-semibold hover:bg-blue-600 transition">
          Refer Now
        </button>
      </div>
    </div>
  );
};

export default ReferralBenefits;
