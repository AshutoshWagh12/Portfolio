import "./CertificationCards.css";

const CertificationCards = ({ certCardItem }) => {
  return (
    <>
      <div className="react-reveal cert-card">
        <div className="content">
          <a
            href={certCardItem.certificate_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="content-overlay"></div>
            <div
              className="cert-header"
              style={{ backgroundColor: "rgb(29, 29, 29)" }}
            >
              <img
                className="logo_img"
                src={certCardItem.src}
                alt={certCardItem.alt_name}
              />
            </div>
          </a>
        </div>
        <div className="cert-body">
          <h2
            className="cert-body-title"
            style={{ color: "rgb(255, 255, 255)" }}
          >
            {certCardItem.title}
          </h2>
          <h3
            className="cert-body-subtitle"
            style={{ color: "rgb(141, 141, 141)" }}
          >
            {certCardItem.subtitle}
          </h3>
        </div>
      </div>
    </>
  );
};

export default CertificationCards;
