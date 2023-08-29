import React, { useState, useCallback } from "react";
import Typical from "react-typical";
import Switch from "react-switch";

const Header = (props) => {
  const { sharedData } = props;
  const [checked, setChecked] = useState(false);

  const onThemeSwitchChange = useCallback((checked) => {
    setChecked(checked);
    setTheme();
  }, []);

  const setTheme = () => {
    const dataThemeAttribute = "data-theme";
    const body = document.body;
    const newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  };

  let titles = [], name = '';
  if (sharedData) {
    name = sharedData.name;
    titles = sharedData.titles.map((x) => [x.toUpperCase(), 1500]).flat();
  }

  const HeaderTitleTypeAnimation = React.memo(() => {
    return <Typical className="title-styles" steps={titles} loop={50} />;
  }, () => true);

  return (
    <>
      <div style={{
        position: "absolute",
        right: '0',
        zIndex: 100,
        width: "100%"
      }}>
        <marquee direction="right" height="40px" width="100%" scrollamount="5" onmouseover="this.stop();" onmouseout="this.start();">
          <ul class="ticker-right">
            <li>Lorem ipsum dolor sit <i class="fa fa-minus"></i></li>
            <li>Duis autem vel eum iriure <i class="fa fa-minus"></i></li>
            <li>Typi non habent claritatem <i class="fa fa-minus"></i></li>
            <li>Mirum est notare </li>
          </ul>
        </marquee></div>
      <header id="home" style={{ height: window.innerHeight - 140, display: 'block' }}>
      <div className="row aligner" style={{ height: '100%' }}>
        <div className="col-md-12">
          <div>
            <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
            <br />
            <h1 className="mb-0">
              <Typical steps={[name]} wrapper="p" />
            </h1>
            <div className="title-container">
              <HeaderTitleTypeAnimation />
            </div>
            <Switch
              checked={checked}
              onChange={onThemeSwitchChange}
              offColor="#baaa80"
              onColor="#353535"
              className="react-switch mx-auto"
              width={90}
              height={40}
              uncheckedIcon={<span
                role="img"
                aria-label="moon"
                style={{
                  display: "block",
                  height: "100%",
                  // fontSize: 25,
                  textAlign: "center",
                  marginTop: "8px",
                  marginLeft: '18px',
                  color: "black",
                }}
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black" // Change the color to black
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                </svg>
              </span>}
              checkedIcon={
                <span
                  className="iconify"
                  data-icon="noto-v1:sun-with-face"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "10px",
                    color: "#353239",
                  }}
                ></span>
              }
              id="icon-switch"
            />
          </div>
        </div>
      </div>
    </header>
    </>);
};

export default Header;
