import React, { useEffect } from "react";
import Navbar from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";

function About({ req, show }) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: "ease-out" });
  }, []);

  const team = [
    {
      id: 1,
      name: "Aarav Mehta",
      role: "Creative Director",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Aarav leads the creative vision at AdVision, crafting powerful ad strategies that connect with audiences on an emotional level.",
    },
    {
      id: 2,
      name: "Sanya Kapoor",
      role: "Marketing Strategist",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Sanya develops innovative campaign ideas and data-driven plans that turn brands into stories worth remembering.",
    },
    {
      id: 3,
      name: "Rahul Iyer",
      role: "Visual Designer",
      img: "https://randomuser.me/api/portraits/men/75.jpg",
      bio: "Rahul specializes in motion and digital design, ensuring every ad looks stunning and speaks with clarity.",
    },
  ];

  return (
    <>
      <Navbar />

      <div
        className="w-full text-white flex flex-col items-center justify-start pt-28 space-y-24 font-poppins"
        style={{
          background: "linear-gradient(135deg, #000000, #0a0a0a, #111111)",
        }}
      >
        {/* About Header */}
        <div className="text-center max-w-3xl px-6 md:px-16" data-aos="fade-up">
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(45deg, #007aff, #999999)",
            }}
          >
            About AdVision
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            We’re a team of storytellers, designers, and strategists passionate
            about transforming brands into unforgettable experiences. From
            creative ad campaigns to digital storytelling, we bring your vision
            to life with innovation and purpose.
          </p>
        </div>

        {/* Team Section */}
        <div className="w-full max-w-6xl flex flex-col space-y-24 px-6 md:px-16">
          {team.map((member, index) => (
            <div
              key={member.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="md:w-1/2 w-full flex justify-center">
                <div className="relative group">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="rounded-2xl shadow-lg w-80 h-80 object-cover border border-white/10 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 rounded-2xl backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
              </div>

              {/* Info */}
              <div className="md:w-1/2 w-full flex flex-col justify-center backdrop-blur-lg bg-white/10 border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                <h2
                  className="text-3xl font-bold mb-2 bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(45deg, #007aff, #9e9e9e)",
                  }}
                >
                  {member.name}
                </h2>
                <h3 className="text-yellow-400 font-medium mb-3">
                  {member.role}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Vision Section */}
        <div
          className="max-w-4xl text-center backdrop-blur-xl bg-white/10 p-10 rounded-2xl border border-white/10 shadow-lg mb-16 px-6 md:px-16"
          data-aos="fade-up"
        >
          <h2
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(45deg, #007aff, #999999)",
            }}
          >
            Our Vision
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            To redefine advertising through creativity, technology, and human
            connection — building campaigns that not only sell but inspire and
            resonate with audiences across the world.
          </p>
        </div>

        {/* Full-width Footer INSIDE About section */}
        <div className="w-full">
          {show != true ? "" : <Footer />}
          {req != false ? <Footer /> : ""}
          {/* <h3>About</h3> */}
        </div>
      </div>
    </>
  );
}

export default About;
