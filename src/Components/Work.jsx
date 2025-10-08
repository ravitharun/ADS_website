// Work.jsx
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const adsData = [
  {
    id: 1,
    title: "Creative Product Launch Campaign",
    description:
      "We build attention-grabbing ad strategies that spark excitement and engagement. From concept to execution, every frame speaks your brand’s language.",
    image:
      "https://thumbs.dreamstime.com/b/digital-marketing-media-website-ad-email-social-network-seo-video-mobile-app-virtual-globe-shape-diagram-hand-working-124275542.jpg?w=768",
  },
  {
    id: 2,
    title: "Brand Awareness Visuals",
    description:
      "Our bold and memorable visuals help brands rise above the noise. Perfect for dark-themed ad spaces and high-impact digital experiences.",
    image:
      "https://thumbs.dreamstime.com/b/helsinki-finland-may-bing-application-icon-apple-iphone-screen-close-up-ads-app-online-advertising-social-media-network-146777519.jpg",
  },
  {
    id: 3,
    title: "E-commerce Growth Campaign",
    description:
      "Boost your online store visibility with ad creatives optimized for clicks, conversions, and customer loyalty.",
    image:
      "https://thumbs.dreamstime.com/b/google-ads-adwords-mobile-icon-app-screen-smartphone-iphone-macro-google-services-google-ads-contextual-service-google-ads-226555092.jpg",
  },
  {
    id: 4,
    title: "Digital Strategy & Targeting",
    description:
      "Our data-driven digital ad strategies ensure your content reaches the right audience, at the right time, every time.",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.5QMJuiboNUlraeaZ2pr2lwHaFY?pid=Api&P=0&h=180",
  },
];

function Work({ req }) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out" });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />

      {/* Work Section */}
      <main className="flex-grow px-6 md:px-20 py-16">
        {/* Title */}
        <h1
          className="text-5xl md:text-7xl font-extrabold text-center mb-6 bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(45deg, #007aff, #616161)",
            fontFamily: "'Monoton', cursive",
          }}
        >
          Our Creative Work
        </h1>

        <p className="text-center text-gray-400 text-lg md:text-xl mb-16 max-w-3xl mx-auto leading-relaxed">
          Discover how we blend strategy, design, and technology to create ad
          campaigns that leave a lasting impact.
        </p>

        {/* Ads Cards */}
        <div className="flex flex-col space-y-24">
          {adsData.map((ad, index) => (
            <div
              key={ad.id}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="md:w-1/2 w-full overflow-hidden border border-white/10 shadow-xl rounded-lg hover:scale-[1.02] transition-transform duration-500">
                <img
                  src={ad.image}
                  alt={ad.title}
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>

              {/* Text */}
              <div className="md:w-1/2 w-full flex flex-col justify-center space-y-4">
                <h2
                  className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(45deg, #007aff, #616161)",
                  }}
                >
                  {ad.title}
                </h2>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  {ad.description}
                </p>
                <button className="self-start px-4 py-1.5 bg-transparent border border-white text-white text-sm font-semibold transition-all duration-300 rounded hover:bg-black/20 hover:border-yellow-400 hover:text-yellow-400">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      {req == false ? "" : <Footer />}
    </div>
  );
}

export default Work;

{
  /* background-image: linear-gradient(45deg, #007aff, #616161);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;X */
}
{
  /* Footer (Perfectly Fitted, Full Width) */
}
{
  /* #9d9595    {/* #9d9595    border-radius: 3px;  w-isse,h-isse*/
}

{
  /* sub rmv  login-rmv */
}
