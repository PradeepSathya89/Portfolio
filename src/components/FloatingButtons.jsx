import "./FloatingButtons.css";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingButtons = () => {
  return (
    <div className="floating-buttons">
      <a
        href="https://wa.me/918897541279?text=Hello%20I%20am%20interested%20in%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <FaWhatsapp />
      </a>

      <a
        href="tel:+918897541279"
        className="call-btn"
      >
        <FaPhoneAlt />
      </a>
    </div>
  );
};

export default FloatingButtons;