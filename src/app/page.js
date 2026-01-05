"use client";

import React, { useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { FaLinkedin, FaBehance, FaInstagram, FaWhatsapp } from "react-icons/fa";


export default function Page() {
   const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#0a0a0a]/90 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Brand */}
          <a
            href="#home"
            className="font-bold text-xl tracking-wide text-white hover:text-green-400 transition-colors"
          >
            Nadhif.
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 items-center text-gray-300">
            <a
              href="#projects"
              className="hover:text-green-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="hover:text-green-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="hover:text-green-400 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Hamburger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-white focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#0f172a] flex flex-col items-center py-6 space-y-6">
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="hover:text-green-400"
            >
              Projects
            </a>
            <a
              href="#experience"
              onClick={() => setIsOpen(false)}
              className="hover:text-green-400"
            >
              Experience
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-green-400"
            >
              Contact
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center py-28 px-6"
      >
        {/* Badge */}
        <div className="mb-6 px-4 py-2 bg-gray-800/60 rounded-full text-sm">
          👋 Nadhif
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hello folks! I'm Nadhif <br />
          <span className="text-green-400">UI/UX Designer</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-gray-400">
          A UI/UX Designer & Software Developer from Indonesia with more than 2
          year of experience designing websites and mobile interface.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <a
            href="https://drive.google.com/file/d/1f4aDstDEEQFUI21dnkgFpb0FKxpi5sTM/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-lg bg-green-400 text-black font-semibold hover:bg-green-500"
          >
            Download Resume
          </a>
          <a
            href="mailto:nadhifps16@gmail.com"
            className="px-6 py-2 rounded-lg border border-green-400 text-green-400 font-semibold hover:bg-green-400 hover:text-black"
          >
            Contact Me →
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-6 text-2xl text-gray-400">
          <a
            href="https://www.linkedin.com/in/nadhifps/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.behance.net/nadhifps"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <FaBehance />
          </a>
          <a
            href="https://www.instagram.com/sp.nadhif"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/628970557659"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <FaWhatsapp />
          </a>
        </div>
      </section>

      {/* MARQUEE SECTION */}
      <section className="py-12 bg-[#0a0a0a] border-y border-gray-400">
        <Marquee gradient={false} speed={50} pauseOnHover>
          {[
            "figma",
            "trello",
            "maze",
            "vscode",
            "whimsical",
            "html",
            "css",
            "javascript",
            "typescript",
            "react",
            "vue",
            "nextjs",
            "nodejs",
            "php",
            "laravel",
          ].map((tool, i) => (
            <div
              key={i}
              className="mx-8 flex flex-col items-center justify-center"
            >
              <Image
                src={`/icons/${tool}.png`} // file ada di public/icons/
                alt={tool}
                width={60}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition duration-300"
              />
              <p className="mt-2 text-xs text-gray-400">{tool.toUpperCase()}</p>
            </div>
          ))}
        </Marquee>
      </section>

      {/* PROJECT SHOWCASE */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">
          Selected Works & Projects
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Highlights of my UI/UX design development work, where I turn ideas
          into engaging, user-centered products.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "UI Kit Design Assets",
              desc: "Creating & publishing a scalable Figma design system—boosting workflow efficiency while generating passive income through premium assets.",
              tag: "UI DESIGN KIT",
              img: "/images/TenkaUI.png",
              link: "https://www.behance.net/gallery/213821509/Tenka-Treasure-Hunt-AR-Design-Assets",
            },
            {
              title: "UI Mahakam App Redesign",
              desc: "Redesigning a livestock auction & agricultural marketplace app—making it more intuitive, user-friendly, and visually engaging.",
              tag: "MOBILE DESIGN",
              img: "/images/Mahakam.png",
              link: "https://www.behance.net/gallery/190266361/Mahakam-Apps",
            },
            {
              title: "UI Helium Web Redesign",
              desc: "Redesigning Helium Security’s website to improve look, functionality & info delivery—aligning UI/UX strategy with business goals.",
              tag: "WEB DESIGN",
              img: "/images/Helium.png",
              link: "https://www.behance.net/gallery/206610103/Helium-Security-Landing-Page-Redesign?share=1",
            },
            {
              title: "UI/UX Cyber Academy Merchandise",
              desc: "Designing Cyber Academy’s merchandise e-commerce platform—delivering the UI ahead of deadline & ensuring smooth dev handoff.",
              tag: "WEB DESIGN",
              img: "/images/CAMerchandise.png",
              link: "https://swag.cyberacademy.id",
            },
            {
              title: "UI/UX Objective Key Result(OKR)",
              desc: "Designing an OKR-based employee management app—combining UX research & UI design to support internal performance tracking.",
              tag: "WEB DESIGN",
              img: "/images/OKR.png",
              link: "https://www.behance.net/gallery/206413001/OKR-Aplikasi-Pengelolaan-Kinerja-Karyawan?share=1",
            },
            {
              title: "UX Chevalier SAS Case Study",
              desc: "UX case study: designing an app that streamlines & monitors study group activities for better collaboration.",
              tag: "UX CASE STUDY",
              img: "/images/CHEVPRO.png",
              link: "https://medium.com/@nadhifps16/studi-kasus-ux-explorasi-chevalier-apps-chevpro-3ed5818dc8cb",
            },
          ].map((proj, i) => (
            <a
              key={i}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-xl overflow-hidden shadow-lg border border-gray-700 bg-black transition-all duration-500 transform hover:scale-105 hover:bg-green-400"
            >
              {/* Thumbnail */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={proj.img}
                  alt={proj.title}
                  width={400}
                  height={250}
                  className="object-cover w-full h-48 group-hover:scale-110 transition-transform duration-500"
                />

                {/* Tag di pojok kiri atas */}
                {proj.tag && (
                  <span className="absolute top-3 left-3 bg-green-400 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    {proj.tag}
                  </span>
                )}
              </div>

              {/* Konten Card */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white group-hover:text-black transition-colors duration-500">
                  {proj.title}
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-black mt-2 transition-colors duration-500">
                  {proj.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
      {/* Timeline Section */}
      <section id="experience" className="px-8 py-20 bg-black">
        <h2 className="text-4xl font-bold text-center mb-4">
          Sneak Peek of My Journey 👀
        </h2>
        <p className="text-center text-gray-400 mb-12">
          A quick glimpse into my professional journey, featuring highlights
          from my design and development roles.
        </p>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex justify-between border-b border-gray-800 pb-4">
            <div>
              <h3 className="font-semibold">UI/UX Designer</h3>
              <p className="text-gray-400">Pelihara.co</p>
            </div>
            <span className="text-gray-400">Sep 2025 - Present</span>
          </div>
          <div className="flex justify-between border-b border-gray-800 pb-4">
            <div>
              <h3 className="font-semibold">Freelance Designer</h3>
              <p className="text-gray-400">Self Employed</p>
            </div>
            <span className="text-gray-400">Aug 2021 - Dec 2024</span>
          </div>
          <div className="flex justify-between border-b border-gray-800 pb-4">
            <div>
              <h3 className="font-semibold">UI/UX Designer Internship</h3>
              <p className="text-gray-400">Cyber Army Indonesia</p>
            </div>
            <span className="text-gray-400">Sep 2023 - Jun 2024</span>
          </div>
          <div className="flex justify-between border-b border-gray-800 pb-4">
            <div>
              <h3 className="font-semibold">UI/UX Design Mentor</h3>
              <p className="text-gray-400">Chevalier SAS Laboratory</p>
            </div>
            <span className="text-gray-400">Sep 2022 - Sep 2023</span>
          </div>
        </div>
        <div className="mt-12 text-center">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between bg-[#0f172a] rounded-lg shadow-lg px-6 py-6">
            <h3 className="text-lg font-semibold text-white mb-4 md:mb-0">
              Interested Working With Me?
            </h3>
            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-lg bg-green-600 text-white font-medium hover:bg--700 transition-colors"
            >
              Let’s Connect →
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer
        id="contact"
        className="px-8 py-12 bg-black text-center border-t border-gray-800"
      >
        <p className="mb-6 font-semibold text-gray-300">GET IN TOUCH ✨</p>
        <div className="flex flex-col items-center">
          {/* Foto Profil */}
          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-green-400 mb-4">
            <Image
              src="/images/profile.jpg" // pakai jpg
              alt="Nadhif Pratama Subagyo"
              width={112}
              height={112}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Nama & Subjudul */}
          <h3 className="text-xl font-bold">NADHIF PRATAMA SUBAGYO</h3>
          <p className="text-gray-400 mb-6">UI/UX Designer</p>

          {/* Social Links */}
          <div className="flex space-x-6 text-2xl text-gray-400">
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.behance.net/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaBehance />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
