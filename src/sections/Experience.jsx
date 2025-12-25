import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);
const Experience = () => {
  useGSAP(() => {
    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />
        <div className="mt-20 md:mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  {
                    card?.card?.map((reviewCard) => (
                      <GlowCard card={reviewCard}>
                        <div>
                          <img style={{width: '150px'}} src={reviewCard.imgPath} alt="exp-img" />
                        </div>
                      </GlowCard>
                    ))
                  }
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper hidden md:block">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo hidden md:block">
                        <img src={card.logoPath} alt="logo" />
                      </div>
                      <div className="bg-gradient-to-br from-[#0B1220] to-[#0E1628] border border-white/10 rounded-2xl p-4 md:p-8 space-y-8">
                        <div>
                          <h2 className="text-xl md:text-3xl font-bold text-white">
                            {card.title}
                          </h2>
                          <p className="text-md md:text-lg text-indigo-300 mt-1">
                            {card.company}
                          </p>
                          <p className="text-sm text-white/50 mt-2">
                            📅 {card.date}
                          </p>
                        </div>

                        {/* Projects */}
                        <div className="space-y-6">
                          <h3 className="text-md md:text-xl font-semibold text-white">
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;