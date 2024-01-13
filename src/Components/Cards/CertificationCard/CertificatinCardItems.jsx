import { useSelector } from "react-redux";
import "./CertificationCardItems.css";
import CertificationCards from "./CertificationCards";

const CertificationCardItems = () => {
  const certCardItems = useSelector((store) => store.certCardItems);

  return (
    <div className="main" id="certs">
      <div className="certs-body-div">
        {certCardItems.map((certCardItem) => (
          <CertificationCards
            key={certCardItem.title}
            certCardItem={certCardItem}
          />
        ))}
      </div>
    </div>
  );
};

export default CertificationCardItems;
