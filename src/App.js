import React, { useState, useEffect, useRef } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { sharedDataDummy } from "./data/your-data";
import { resumeDataDummy } from "./data/your-data";

const App = () => {
  const [resumeData, setResumeData] = useState({});
  const [sharedData, setSharedData] = useState({});
  const primaryLanguageIconIdRef = useRef(null);
  const secondaryLanguageIconIdRef = useRef(null);

  const applyPickedLanguage = (pickedLanguage, oppositeLangIconId) => {
    swapCurrentlyActiveLanguage(oppositeLangIconId);
    document.documentElement.lang = pickedLanguage;
    const resumePath =
      document.documentElement.lang === window.$primaryLanguage
        ? `res_primaryLanguage.json`
        : `res_secondaryLanguage.json`;
    loadResumeFromPath(resumePath);
  };

  const swapCurrentlyActiveLanguage = (oppositeLangIconId) => {
    const pickedLangIconId =
      oppositeLangIconId === primaryLanguageIconIdRef.current
        ? secondaryLanguageIconIdRef.current
        : primaryLanguageIconIdRef.current;

    if (document.getElementById(oppositeLangIconId)) {
      document.getElementById(oppositeLangIconId).removeAttribute("filter", "brightness(40%)");
    }
    if (document.getElementById(pickedLangIconId)) {
      document.getElementById(pickedLangIconId).setAttribute("filter", "brightness(40%)");
    }
  };

  const loadResumeFromPath = () => {
    setResumeData(resumeDataDummy)
  };

  const loadSharedData = () => {
    setSharedData(sharedDataDummy)
  };

  useEffect(() => {
    loadSharedData();
    applyPickedLanguage(window.$primaryLanguage, secondaryLanguageIconIdRef.current);
  }, []);

  return (
    <div>
      <Header sharedData={sharedData.basic_info} />
      <div className="col-md-12 mx-auto text-center language">
        <div
          onClick={() =>
            applyPickedLanguage(window.$primaryLanguage, secondaryLanguageIconIdRef.current)
          }
          style={{ display: "inline" }}
        >
          <span
            className="iconify language-icon mr-5"
            data-icon="twemoji:flag-india"
            data-inline="false"
            id={window.$secondaryLanguageIconId}
            ref={secondaryLanguageIconIdRef}
          ></span>

          {/* <span
            className="iconify language-icon mr-5"
            data-icon="twemoji-flag-for-flag-united-kingdom"
            data-inline="false"
            id={window.$primaryLanguageIconId}
            ref={primaryLanguageIconIdRef}
          ></span> */}
        </div>
        <div
          onClick={() =>
            applyPickedLanguage(window.$secondaryLanguage, primaryLanguageIconIdRef.current)
          }
          style={{ display: "inline" }}
        ><span
          className="iconify language-icon"
            data-icon="twemoji-flag-for-flag-united-kingdom"
            data-inline="false"
            id={window.$primaryLanguageIconId}
            ref={primaryLanguageIconIdRef}
          ></span>
        </div>
      </div>
      <About resumeBasicInfo={resumeData.basic_info} sharedBasicInfo={sharedData.basic_info} />
      <Projects resumeProjects={resumeData.projects} resumeBasicInfo={resumeData.basic_info} />
      <Skills sharedSkills={sharedData.skills} resumeBasicInfo={resumeData.basic_info} />
      <Experience resumeExperience={resumeData.experience} resumeBasicInfo={resumeData.basic_info} />
      <Footer sharedBasicInfo={sharedData.basic_info} />
    </div>
  );
};

export default App;


