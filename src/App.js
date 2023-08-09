import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { sharedDataDummy, sharedDataDummyHindi, resumeDataDummy, resumeDataDummyHindi } from "./data/your-data";


const App = () => {
  const [resumeData, setResumeData] = useState({});
  const [sharedData, setSharedData] = useState({});
  const [pickLang, setPickLang] = useState(false);//false = eng


  const loadSharedDataWithLang = () => {
    if (pickLang) {
      setResumeData(resumeDataDummyHindi);
      setSharedData(sharedDataDummyHindi);
      console.log('22222222');
    } else {
      setResumeData(resumeDataDummy);
      setSharedData(sharedDataDummy);
    }
  };

  // const swapCurrentlyActiveLanguage = (oppositeLangIconId) => {
    //make it more brite
  // };



  useEffect(() => {
    loadSharedDataWithLang();
    console.log('caaaaaaaaaaa');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pickLang]);

  return (
    <div>
      <Header sharedData={sharedData.basic_info} />
      <div className="col-md-12 mx-auto text-center language">
        <div
          style={{ display: "inline" }}
          onClick={() => setPickLang(true)}
        >
          <span
            className="iconify language-icon mr-5"
            data-icon="twemoji:flag-india"
            data-inline="false"
          ></span>
        </div>
        <div
          onClick={() => setPickLang(false)}
          style={{ display: "inline" }}
        ><span
          className="iconify language-icon"
            data-icon="twemoji-flag-for-flag-united-kingdom"
            data-inline="false"
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


