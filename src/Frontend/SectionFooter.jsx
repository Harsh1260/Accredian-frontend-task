import React from "react";
import { Plus, Facebook, Linkedin, Twitter, Instagram, Youtube, MessageCircle } from "lucide-react";
import Container from '../Assets/Container.png';

const FooterSection = () => {
  return (
    <footer className="bg-[#282828] text-gray-400 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 p-6 relative">
        {/* Top Section */}
        <div className="flex justify-between items-center mb-4">
          {/* Shifted Logo Towards Center */}
          <div className="ml-6">
            <img src={Container} alt="Logo" className="h-6" />
          </div>

          {/* Left Aligned Button */}
          <div className="text-left">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Schedule 1-on-1 Call Now
            </button>
            <p className="text-xs text-gray-500">Speak with our Learning Advisor</p>
          </div>
        </div>

        {/* Decreased Line Thickness */}
        <hr className="border-gray-700 mb-6" />

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Programs - Increased Line Spacing & Centered More */}
          <div>
            <h3 className="font-semibold text-white mb-3">Programs</h3>
            <ul className="space-y-3">
              {[
                "Data Science & AI",
                "Product Management",
                "Business Analytics",
                "Digital Transformation",
                "Business Management",
                "Project Management",
                "Strategy & Leadership",
                "Senior Management",
                "Fintech",
              ].map((item) => (
                <li key={item} className="flex justify-between items-center hover:text-white cursor-pointer">
                  {item} <Plus className="w-4 h-4 text-gray-500" />
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us - Reduced Font Size & Line Gap */}
          <div>
            <h3 className="font-semibold text-white mb-3">Contact Us</h3>
            <ul className="text-xs space-y-1">
              <li>Email (Data Science): admissions@accredian.com</li>
              <li>Email (Product Management): pm@accredian.com</li>
              <li>DS Admission Helpline: +91 9079592392 (9 AM - 7 PM)</li>
              <li>PM Admission Helpline: +91 9625811095</li>
              <li>Student Helpline: +91 7996322507</li>
              <li>Office: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</li>
            </ul>

            {/* Follow Us - Moved Below Contact Us */}
            <div className="mt-4">
              <h3 className="font-semibold text-white mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 hover:text-white cursor-pointer" />
                <Linkedin className="w-5 h-5 hover:text-white cursor-pointer" />
                <Twitter className="w-5 h-5 hover:text-white cursor-pointer" />
                <Instagram className="w-5 h-5 hover:text-white cursor-pointer" />
                <Youtube className="w-5 h-5 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Accredian Links */}
          <div>
            <h3 className="font-semibold text-white mb-3">Accredian</h3>
            <ul className="text-xs space-y-2">
              {["About", "Career", "Blog", "Admission Policy", "Referral Policy", "Privacy Policy", "Terms of Service", "Master FAQs"].map(
                (link) => (
                  <li key={link} className="hover:text-white cursor-pointer">
                    {link}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-gray-500 text-xs text-center mt-8">
          © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </div>

        {/* Floating Chat Button */}
        <button className="fixed bottom-6 right-6 bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-700 transition">
          <MessageCircle className="w-6 h-6 text-white" />
        </button>
      </div>
    </footer>
  );
};

export default FooterSection;
