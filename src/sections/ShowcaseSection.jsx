import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/site1.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content"> 
              <h2>
                Create a similar responsive youtube clone using the RapidApi's.
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React, Redux, RapidAPI's & TailwindCSS for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#303952]">
                <img
                  src="/images/site4.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>The RealEstate Site - List / Rent your properties</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#6DA5C7]">
                <img src="/images/site3.png" alt="YC Directory App" />
              </div>
              <h2>Split-Your-Expense - Easyway to split your trip expense</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;