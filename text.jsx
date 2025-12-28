import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    // Animate cards
    gsap.from(".exp-card-wrapper", {
      opacity: 0,
      y: 80,
      duration: 1,
      ease: "power3.out",
      stagger: 0.25,
      scrollTrigger: {
        trigger: "#experience",
        start: "top 70%",
      },
    });

    // Timeline animation (PER CARD)
    gsap.utils.toArray(".exp-card-wrapper").forEach((wrapper) => {
      const line = wrapper.querySelector(".timeline");

      gsap.fromTo(
        line,
        {
          scaleY: 0,
          transformOrigin: "top center",
        },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: "top 70%",
            end: "bottom 30%",
            scrub: true, // 🔥 Scroll-synced
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="experience"
      className="md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />

        <div className="mt-32 space-y-32">
          {expCards.map((card, index) => (
            <div
              key={index}
              className="exp-card-wrapper grid xl:grid-cols-[1.2fr_auto_2fr] gap-12 items-stretch"
            >
              {/* LEFT — Review */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg h-fit">
                <div className="flex gap-1 text-yellow-400 mb-3">
                  ★ ★ ★ ★ ★
                </div>

                <p className="text-white/70 leading-relaxed">
                  {card.review}
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <img
                    src={card.logoPath}
                    className="w-10 h-10 object-contain"
                    alt="logo"
                  />
                  <span className="text-sm text-white/50">
                    {card.company}
                  </span>
                </div>
              </div>

              {/* CENTER — Timeline */}
              <div className="flex flex-col items-center h-full relative">
                {/* Dot */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center shadow-lg z-10">
                  <img
                    src={card.logoPath}
                    className="w-7 h-7 object-contain"
                    alt="logo"
                  />
                </div>

                {/* LINE — THIS IS .timeline */}
                <div className="timeline w-[2px] flex-1 bg-gradient-to-b from-purple-500 to-transparent mt-2" />
              </div>

              {/* RIGHT — Content */}
              <div className="bg-gradient-to-br from-[#0B1220] to-[#0E1628] border border-white/10 rounded-2xl p-8 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-white">
                    {card.title}
                  </h2>
                  <p className="text-lg text-indigo-300 mt-1">
                    {card.company}
                  </p>
                  <p className="text-sm text-white/50 mt-2">
                    📅 {card.date}
                  </p>
                </div>

                {/* Projects */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-white">
                    Key Projects
                  </h3>

                  {card.projects.map((project, i) => (
                    <div
                      key={i}
                      className="bg-black/40 border border-white/10 rounded-xl p-6 space-y-4"
                    >
                      <h4 className="text-lg font-semibold text-indigo-400">
                        {project.name}
                      </h4>

                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <ul className="list-disc ms-5 space-y-2 text-white/60">
                        {project.highlights.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Responsibilities */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Responsibilities
                  </h3>
                  <ul className="list-disc ms-5 space-y-2 text-white/60">
                    {card.responsibilities.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
