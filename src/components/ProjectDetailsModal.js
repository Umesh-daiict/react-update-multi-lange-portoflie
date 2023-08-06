import React from "react";
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "../scss/light-slider.scss";
import AwesomeSliderStyles2 from "../scss/dark-slider.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";

const ProjectDetailsModal = (props) => {
  const { data } = props;

  const [technologies, setTechnologies] = React.useState([]);
  const [images, setImages] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [url, setUrl] = React.useState("");

  React.useEffect(() => {
    if (data) {
      const { technologies, images, title, description, url } = data;
      setTechnologies(technologies || []);
      setImages(images || []);
      setTitle(title || "");
      setDescription(description || "");
      setUrl(url || "");
    }
  }, [data]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-inside"
    >
      <span onClick={props.onHide} className="modal-close">
        <i className="fas fa-times fa-3x close-icon"></i>
      </span>
      <div className="col-md-12">
        <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
          <div className="slider-tab">
            <span
              className="iconify slider-iconfiy"
              data-icon="emojione:red-circle"
              data-inline="false"
              style={{ marginLeft: "5px" }}
            ></span>{" "}
            &nbsp;{" "}
            <span
              className="iconify slider-iconfiy"
              data-icon="twemoji:yellow-circle"
              data-inline="false"
            ></span>{" "}
            &nbsp;{" "}
            <span
              className="iconify slider-iconfiy"
              data-icon="twemoji:green-circle"
              data-inline="false"
            ></span>
          </div>
          <AwesomeSlider
            cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
            animation="scaleOutAnimation"
            className="slider-image"
          >
            {images.map((elem, i) => (
              <div key={i} data-src={elem} />
            ))}
          </AwesomeSlider>
        </div>
        <div className="col-md-10 mx-auto">
          <h3 style={{ padding: "5px 5px 0 5px" }}>
            {title}
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-href"
              >
                <i
                  className="fas fa-external-link-alt"
                  style={{ marginLeft: "10px" }}
                ></i>
              </a>
            ) : null}
          </h3>
          <p className="modal-description">{description}</p>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto">
              {technologies.map((icons, i) => (
                <li className="list-inline-item mx-3" key={i}>
                  <span>
                    <div className="text-center">
                      <i className={icons.class} style={{ fontSize: "300%" }}>
                        <p className="text-center" style={{ fontSize: "30%" }}>
                          {icons.name}
                        </p>
                      </i>
                    </div>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetailsModal;
