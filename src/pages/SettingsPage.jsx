import React from "react";
import NavBar from "../components/layouts/NavBar";
import FooterPart from "../components/ui/FooterPart";
import Footer from "../components/layouts/Footer";

const SettingsPage = () => {
  const sections = [
    { title: "Account", description: "Manage your account details and email preferences" },
    { title: "Notifications", description: "Configure email and push notification settings" },
    { title: "Appearance", description: "Toggle between light and dark mode themes" },
    { title: "Privacy", description: "Control your data and privacy preferences" },
  ];
  return (
    <>
      <NavBar />
      <section className="xs:mt-26 sm:mt-32 lg:mt-37 text-white capitalize font-inter min-h-screen bg-[#141414]">
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">Settings</h1>
          <p className="text-gray-400 text-sm md:text-base mb-8">
            Manage your account and application preferences
          </p>
          <div className="grid gap-4">
            {sections.map((section) => (
              <div
                key={section.title}
                className="bg-[#1e1e1e] rounded-lg p-5 flex items-center justify-between hover:bg-[#252525] transition-colors cursor-pointer"
              >
                <div>
                  <h2 className="text-md md:text-lg font-semibold">
                    {section.title}
                  </h2>
                  <p className="text-gray-500 text-xs md:text-sm mt-1">
                    {section.description}
                  </p>
                </div>
                <span className="text-yellow-400 text-lg">{">"}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FooterPart />
      <Footer />
    </>
  );
};

export default SettingsPage;
