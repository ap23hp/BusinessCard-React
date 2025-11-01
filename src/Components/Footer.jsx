import twitterIcon from "../assets/twitter.png";
import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";
import githubIcon from "../assets/github.png";

export default function Footer() {
  return (
    <footer>
      <img src={twitterIcon} alt="Twitter" className="footer-icon" />
      <img src={facebookIcon} alt="Facebook" className="footer-icon" />
      <img src={instagramIcon} alt="Instagram" className="footer-icon" />
      <img src={githubIcon} alt="GitHub" className="footer-icon" />
    </footer>
  );
}
