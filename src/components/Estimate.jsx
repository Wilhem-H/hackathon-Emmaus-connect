import { useNavigate } from "react-router-dom";
import "./Estimate.css";
import desktop from "/desktop_icon.jpg";
import tablet from "/tablet_icon.jpg";
import phone from "/phone_icon.jpg";

function Estimate() {
  const navigate = useNavigate();
  const handleButtonClick = (route) => {
    navigate(route);
  };

  return (
    <div className="estimate_main_div">
      <h1 className="estimate_title">Nouvelle Estimation </h1>
      <div className="estimate_div_button">
        <button
          className="estimate_button"
          onClick={() => handleButtonClick("/laptopForm")}
        >
          <img src={desktop} alt="" />
        </button>
        <button
          className="estimate_button"
          onClick={() => handleButtonClick("/tabletForm")}
        >
          <img src={tablet} alt="" />
        </button>
        <button
          className="estimate_button"
          onClick={() => handleButtonClick("/Form")}
        >
          <img src={phone} alt="" />
        </button>
      </div>
    </div>
  );
}
export default Estimate;
