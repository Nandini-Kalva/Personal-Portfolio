import React from "react";
import therapypage from "../assets/therapypage.png";
import financedashboard from "../assets/financedashboard.png";

const Projects = () => {
  return (
  <section id="Projects" className="px-6 py-12 bg-gray-200 scroll-mt-20">
      <h1 className="text-4xl text-center mb-10">Projects</h1>

      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h1 className="text-2xl text-pink-500 mb-4">GROW MY THERAPY</h1>
          <p className="mb-4 text-xl">
            ✔️ A responsive frontend clone of a therapy platform built using
            React, inspired by modern web design templates.
            <br />
            ✔️ The project focuses on clean layout structure, smooth navigation,
            and user-friendly UI.It demonstrates the ability to recreate real-world designs with
            attention to spacing, typography, and responsiveness.
            <br />
          </p>
          <p className="mb-2 text-xl">
            ✔️ Tech Stack: React • Tailwind CSS • Responsive Design
          </p>
          <p className="text-xl mb-4">
            ✔️ Git link : https://github.com/Nandini-Kalva/grow-my-therapy-homepage <br />
          </p>
          <p  className="text-xl" > ✔️ Live link :https://grow-my-therapy-homepage.vercel.app/</p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 w-full h-auto">
          <img
            src={therapypage}
            alt="Grow My Therapy Screenshot"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start gap-16 mt-10">
        <div className="md:w-1/2 w-full h-auto">
          <img
            src={financedashboard}
            alt="Grow My Therapy Screenshot"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-2xl text-pink-500 mb-4">Finance Dashboard</h1>
          <p className="mb-2 text-xl">
            ✔️ An interactive finance dashboard that visualizes income, expenses,
            and spending patterns using charts.
            <br /> ✔️ The application includes dynamic data handling, role-based UI
            simulation, and filtering features.It demonstrates strong frontend skills in building
            data-driven interfaces with a focus on usability and clarity.
          </p>
            <br />
          <p className="mb-2 text-xl text-xl">
            ✔️ React • Tailwind CSS • Chart.js 
          </p>
          <p className="text-xl mb-4">
            ✔️ Git link : https://github.com/Nandini-Kalva/finance-dashboard <br />
          </p>
          <p className="text-xl">✔️ Live link : https://finance-dashboard-chi-seven.vercel.app/</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
