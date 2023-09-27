import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { sharedDataDummy, sharedDataDummyHindi, resumeDataDummy, resumeDataDummyHindi } from "./data/your-data";
import Connect from "./components/Connect";


const App = () => {
  const [resumeData, setResumeData] = useState({});
  const [sharedData, setSharedData] = useState({});
  const [pickLang, setPickLang] = useState(false);//false = eng


  const loadSharedDataWithLang = () => {
    if (pickLang) {
      setResumeData(resumeDataDummyHindi);
      setSharedData(sharedDataDummyHindi);
    } else {
      setResumeData(resumeDataDummy);
      setSharedData(sharedDataDummy);
    }
  };

  useEffect(() => {
    loadSharedDataWithLang();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pickLang]);
  const downloadFile = () => {
    const fileURL = require('./assets/files/cv_2.pdf');
    console.log(fileURL, process.env.PUBLIC_URL
    );
    const link = document.createElement('a');
    link.href = fileURL;
    link.download = 'cv_2.pdf';

    // link.click();
  };

  return (
    <div>
      <Header sharedData={sharedData.basic_info} />
      <div className="col-md-12 mx-auto text-center language">
        <div
          className={`language-option  mr-5 ${pickLang ? "active" : ""}`}
          onClick={() => setPickLang(true)}
        >
          <span
            className="iconify language-icon"
            data-icon="twemoji:flag-india"
            data-inline="false"
          ></span>
        </div>
        <div
          onClick={() => setPickLang(false)}
          className={`language-option ${pickLang ? "" : "active"}`}
        ><span
            className="iconify language-icon"
            data-icon="twemoji-flag-for-flag-united-kingdom"
            data-inline="false"
          ></span>
        </div>
        <div className="cv-area">
          <button className="btn-cv" onClick={downloadFile}><i class="fa fa-download" aria-hidden="true"></i></button>
        </div>
      </div>
      <About resumeBasicInfo={resumeData.basic_info} sharedBasicInfo={sharedData.basic_info} />
      <Projects resumeProjects={resumeData.projects} resumeBasicInfo={resumeData.basic_info} />
      <Skills sharedSkills={sharedData.skills} resumeBasicInfo={resumeData.basic_info} />
      <Experience resumeExperience={resumeData.experience} resumeBasicInfo={resumeData.basic_info} />
      <Connect />
      <Footer sharedBasicInfo={sharedData.basic_info} />
    </div>
  );
};

export default App;


