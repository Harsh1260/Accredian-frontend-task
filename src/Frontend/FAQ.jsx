import React, { useState } from "react";
import { ChevronDown, Headphones } from "lucide-react";

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("Eligibility");
  const [openQuestion, setOpenQuestion] = useState("");

  const tabs = [
    { id: "Eligibility", label: "Eligibility" },
    { id: "HowToUse", label: "How To Use?" },
    { id: "Terms", label: "Terms & Conditions" },
  ];

  const faqData = {
    Eligibility: [
      {
        question:
          "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
        answer:
          "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
      },
      {
        question: "What is the minimum system configuration required?",
        answer: "The system requirements will be displayed here when expanded.",
      },
    ],
    HowToUse: [
      {
        question: "How do I access the course materials?",
        answer: "Course materials access instructions will be displayed here.",
      },
    ],
    Terms: [
      {
        question: "What are the terms of use?",
        answer: "Terms of use details will be displayed here.",
      },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto mt-16"> 
      <h1 className="text-2xl font-semibold mb-8 text-center">
        Frequently Asked <span className="text-blue-500">Questions</span>
      </h1>

      {/* Main Layout */}
      <div className="flex gap-12"> {/* Increased gap for better spacing */}
        {/* Left: Tabs */}
        <div className="flex flex-col gap-2 -ml-34"> {/* Shifted left */}
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-center rounded-lg w-full transition-all ${
                activeTab === tab.id
                  ? "bg-white text-blue-500 shadow-lg border-none"
                  : "border border-gray-500 text-gray-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Right: FAQ Content */}
        <div className="flex-1 ml-16">
          {faqData[activeTab].map((item) => (
            <div key={item.question} className="mb-4">
              <button
                onClick={() =>
                  setOpenQuestion(openQuestion === item.question ? "" : item.question)
                }
                className="w-full flex justify-between items-center p-4 rounded-lg transition-all text-gray-800"
              >
                <span
                  className={`truncate transition-colors ${
                    openQuestion === item.question ? "text-blue-600" : "text-gray-800"
                  }`}
                >
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 ml-2 transition-transform ${
                    openQuestion === item.question ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {openQuestion === item.question && (
                <div className="p-4 text-gray-600">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-10 rounded-xl relative overflow-hidden p-6 bg-blue-500 text-white ">
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at 50% 50%, 
              rgba(255, 0, 150, 0.5) 0%, 
              rgba(0, 150, 255, 0.5) 40%, 
              rgba(0, 255, 150, 0.5) 80%)`,
          }}
        ></div>

        {/* Content */}
        <div className="relative flex items-center gap-4">
          <div className="bg-white p-3 rounded-lg">
            <Headphones className="text-blue-500 w-6 h-6" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">
              Want to delve deeper into the program?
            </h2>
            <p className="text-blue-100">
              Share your details to receive expert insights from our program team!
            </p>
          </div>
          <button className="bg-white text-blue-500 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-all">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
