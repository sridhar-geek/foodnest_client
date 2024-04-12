import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaDiscord,
  FaYoutube,
} from "react-icons/fa";

import AppStore from "../../public/FooterImages/appStore.png";
import Microsoft from "../../public/FooterImages/microsoft.png";
import PlayStore from "../../public/FooterImages/playstore.png";

const Footer = () => {
  return (
    <div>
        {/* Grid for footer elements */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 items-center w-full bg-footer p-2 ">
          {/* single grid item */}
          <div className="footer">
            <h4 className="headings">Quick Links</h4>
            <div className="links">Careers</div>
            <div className="links">Vendor Registration</div>
            <div className="links">Terms and Conditions</div>
          </div>
          {/* end of single grid item */}
          <div className="footer">
            <h4 className="headings">Contact Us</h4>
            <div className="links flexitems">
              <MdLocationOn /> Lucknow{" "}
            </div>
            <div className="links flexitems">
              <MdPhone /> +919876543210
            </div>
            <div className="links flexitems">
              <MdEmail /> contact@gmail.com{" "}
            </div>
          </div>
          <div className="footer">
            <h4 className="headings ">Mobile Apps</h4>
            <img src={AppStore} alt="appStore" className="image" />
            <img src={PlayStore} alt="appStore" className="image" />
            <img src={Microsoft} alt="appStore" className="image" />
          </div>
          <div className="footer">
            <h4 className="headings">Social Links</h4>
            <div className="flex gap-5 mt-4 p-3">
              <FaFacebook className="social" />
              <FaInstagramSquare className="social" />
              <FaTwitter className="social" />
              <FaYoutube className="social" />
              <FaDiscord className="social" />
            </div>
          </div>
        </div>
        {/* end of grid elements */}
      <div className="container w-max mx-auto mb-6 ">
        2024 || All rights are reserved
      </div>
    </div>
  );
};

export default Footer;
