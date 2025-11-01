import emailIcon from "../assets/email.png";
import linkedinIcon from "../assets/linkedin.png";

export default function Buttons() {
  return (
    <div className="button-container">
      <button className="emailbtn">
        <img src={emailIcon} alt="Email" className="btn-icon" />
        Email
      </button>

      <button className="linkedinbtn">
        <img src={linkedinIcon} alt="LinkedIn" className="btn-icon linkedin-icon" />
        LinkedIn
      </button>
    </div>
  );
}

