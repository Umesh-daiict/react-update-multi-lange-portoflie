import React from "react";

const Footer = (props) => {
  const { sharedBasicInfo } = props;

  // Create a state to store the networks data
  const [networks, setNetworks] = React.useState([]);

  // Load the networks data on component mount
  React.useEffect(() => {
    if (sharedBasicInfo) {
      const networkElements = sharedBasicInfo.social.map((network) => (
        <span key={network.name} className="m-4">
          <a href={network.url} target="_blank" rel="noopener noreferrer">
            <i className={network.class}></i>
          </a>
        </span>
      ));

      setNetworks(networkElements);
    }
  }, [sharedBasicInfo]);

  return (
    <footer>
      <div className="col-md-12">
        <div className="social-links">{networks}</div>

        <div className="copyright py-4 text-center">
          <div className="container">
            <small>
              Copyright &copy;{" "}
              {sharedBasicInfo ? sharedBasicInfo.name : "???"}
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
