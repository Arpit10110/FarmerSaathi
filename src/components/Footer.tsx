import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "@/styles/footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="upper-container">
          <h1 className="logo">FarmerSaathi</h1>
          <div className="vertical-line"></div>
          <p className="para">One Stop Solutions for Farmers</p>
        </div>
        <hr />
        <div className="lower-container">
        <div className="left">
            <p className="Copyright">
              Copyright © 2023 3legant. All rights reserved{" "}
            </p>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
        </div>
          <div className="right">
            <div className="insta">
              <InstagramIcon />
            </div>

            <div className="facebook">
              <FacebookIcon />
            </div>

            <div className="youtube">
              <YouTubeIcon />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;