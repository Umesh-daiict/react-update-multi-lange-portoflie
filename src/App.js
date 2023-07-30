import React, { useState, useEffect, useRef } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

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

  const loadResumeFromPath = (path) => {
    fetch(path)
      .then((response) => response.json())
      .then((data) => {
        setResumeData(data);
      })
      .catch((error) => {
        // alert(error.message);
        setResumeData(resumeDataDummy)
      });
  };

  const loadSharedData = () => {
    fetch(`portfolio_shared_data.json`)
      .then((response) => response.json())
      .then((data) => {
        setSharedData(data);
        document.title = `${data.basic_info.name}`;
      })
      .catch((error) => {
        // alert(error.message);
        setSharedData(sharedDataDummy)
      });
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
            data-icon="twemoji-flag-for-flag-united-kingdom"
            data-inline="false"
            id={window.$primaryLanguageIconId}
            ref={primaryLanguageIconIdRef}
          ></span>
        </div>
        <div
          onClick={() =>
            applyPickedLanguage(window.$secondaryLanguage, primaryLanguageIconIdRef.current)
          }
          style={{ display: "inline" }}
        >
          <span
            className="iconify language-icon"
            data-icon="twemoji-flag-for-flag-poland"
            data-inline="false"
            id={window.$secondaryLanguageIconId}
            ref={secondaryLanguageIconIdRef}
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

const resumeDataDummy = {
  "basic_info": {
    "description_header": "Hi",
    "description": "👋 I'm Davina Griss. Fictional person for preview purposes :) I'm working with newest front-end frameworks like Angular, React and Vue. What you are seeing now is portfolio template from Dorota1997. If you like this portfolio template, make sure to ⭐ the repository to make it more recognizable for other users. Thank you 💜",
    "section_name": {
      "about": "About me",
      "projects": "Projects",
      "skills": "Skills",
      "experience": "Experience"
    }
  },
  "projects": [
    {
      "title": "Animal Shelter",
      "startDate": "2020",
      "description": "The most expanded application I had opportunity to work with. I've learned many technologies and my code was reviewed by awesome curator. Application handles all adoption processess and allows to store all evidence on adopting animals from animal shelter.",
      "images": [
        "images/portfolio/animal-shelter/p1.jpg",
        "images/portfolio/animal-shelter/p2.jpg"
      ],
      "url": "",
      "technologies": [
        {
          "class": "devicon-angularjs-plain",
          "name": "Angular"
        },
        {
          "class": "devicon-typescript-plain",
          "name": "TypeScript"
        },
        {
          "class": "devicon-csharp-plain",
          "name": "C#"
        }
      ]
    },
    {
      "title": "Photography",
      "startDate": "2018",
      "description": "Personal project for study subject. I was responsible for testing photography application that optimizes images with popular algorithms used by graphic editors like Pixlr or Adobe Photoshop. I've earned A grade :)",
      "images": [
        "images/portfolio/photography/p1.jpg",
        "images/portfolio/photography/p2.jpg"
      ],
      "url": "https://github.com",
      "technologies": [
        {
          "class": "devicon-react-original",
          "name": "React"
        },
        {
          "class": "devicon-javascript-plain",
          "name": "JavaScript"
        }
      ]
    },
    {
      "title": "3D Object Viewer",
      "startDate": "2015",
      "description": "One of the first apps I was working on my internship. I had to develop front-end implementation for app that shows 3D models of known buildings. This was also my first project in Angular framework. I've learned a lot!",
      "images": [
        "images/portfolio/adventure/p1.jpg",
        "images/portfolio/adventure/p2.jpg"
      ],
      "url": "https://github.com",
      "technologies": [
        {
          "class": "devicon-angularjs-plain",
          "name": "Angular"
        },
        {
          "class": "devicon-typescript-plain",
          "name": "TypeScript"
        },
        {
          "class": "devicon-csharp-plain",
          "name": "C#"
        }
      ]
    }
  ],
  "experience": [
    {
      "company": "DefOpenSource",
      "title": "Front-End Developer",
      "years": "10.2019 - present",
      "mainTech": [
        "Angular 8/9/10"
      ],
      "technologies": [
        "REST API",
        "RxJS",
        "JavaScript",
        "Bootstrap",
        "MDBootstrap",
        "EF Core",
        ".NET Core",
        "SignalR",
        "Angular Material"
      ]
    },
    {
      "company": "Serros Solutions",
      "title": "Intern",
      "years": "01.2018 - 09.2019",
      "mainTech": [
        "Angular 7/8"
      ],
      "technologies": [
        "RxJS",
        "Django",
        "PHP",
        "JavaScript",
        "DHTMLX Gantt"
      ]
    }
  ]
}
const sharedDataDummy = {
  "basic_info": {
    "name": "Davina Griss",
    "titles": ["Front-end Developer", "Senior Data Engineer", "Dev Team lead", "Mobile App Developer"],
    "social": [
      {
        "name": "github",
        "url": "https://github.com",
        "class": "fab fa-github"
      },
      {
        "name": "instagram",
        "url": "https://www.instagram.com",
        "class": "fab fa-instagram"
      }
    ],
    "image": "myProfile.jpg"
  },
  "skills": {
    "icons": [
      {
        "name": "HTML 5",
        "class": "devicon-html5-plain",
        "level": "95"
      },
      {
        "name": "CSS 3",
        "class": "devicon-css3-plain",
        "level": "95"
      },
      {
        "name": "Angular",
        "class": "devicon-angularjs-plain",
        "level": "80"
      },
      {
        "name": "TypeScript",
        "class": "devicon-typescript-plain",
        "level": "90"
      },
      {
        "name": "JavaScript",
        "class": "devicon-javascript-plain",
        "level": "70"
      },
      {
        "name": "Sass",
        "class": "devicon-sass-original",
        "level": "75"
      },
      {
        "name": "Bootstrap",
        "class": "devicon-bootstrap-plain",
        "level": "85"
      },
      {
        "name": "C#",
        "class": "devicon-csharp-plain",
        "level": "65"
      },
      {
        "name": "MySql",
        "class": "devicon-mysql-plain",
        "level": "60"
      }
    ]
  }
}