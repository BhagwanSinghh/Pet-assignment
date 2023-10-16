import "../../assets/css/all.css";
import "../../assets/css/animate.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/boxicons.min.css";
import "../../assets/css/bootstrap-icons.css";
import "../../assets/css/jquery-ui.css";
import "../../assets/css/aos.css";
import "../../assets/css/swiper-bundle.css";
import "../../assets/css/nice-select.css";
import "../../assets/css/magnific-popup.css";
import "../../assets/css/jquery.fancybox.min.css";
import "../../assets/css/odometer.css";
import "../../assets/css/datepicker.min.css";
import "../../assets/css/uiicss.css";
import "../../assets/css/style.css";

import { phoneLogo, envelopeLogo, locationLogo } from "../../assets/index.js";

function Footer() {
  return (
    <footer>
      <div class="container">
        <div class="row pt-90 pb-90 justify-content-center">
          <div class="col-lg-3 col-sm-6 order-lg-1 order-2 d-flex justify-content-sm-start justify-content-start">
            <div class="footer-items contact ">
              <h3>Contacts</h3>
              <div class="hotline mb-30">
                <div class="hotline-icon">
                  <img src={phoneLogo} alt="Phone icon" />
                </div>
                <div class="hotline-info">
                  <h6 class="mb-10">
                    <a href="tel:+8801761111456">+880 176 1111 456</a>
                  </h6>
                  <h6>
                    <a href="tel:+8801701111000">+880 170 1111 000</a>
                  </h6>
                </div>
              </div>
              <div class="email mb-30">
                <div class="email-icon">
                  <img src={envelopeLogo} alt="Envelope icon" />
                </div>
                <div class="email-info">
                  <h6 class="mb-10">
                    <a href="https://demo.egenslab.com/cdn-cgi/l/email-protection#95fcfbf3fad5f0edf4f8e5f9f0bbf6faf8">
                      <span
                        class="__cf_email__"
                        data-cfemail="046d6a626b44617c65697468612a676b69"
                      >
                        [email&#160;protected]
                      </span>
                    </a>
                  </h6>
                  <h6>
                    <a href="https://demo.egenslab.com/cdn-cgi/l/email-protection#620b0c040d22111712120d10164c010d0f">
                      <span
                        class="__cf_email__"
                        data-cfemail="4920272f26093a3c3939263b3d672a2624"
                      >
                        [email&#160;protected]
                      </span>
                    </a>
                  </h6>
                </div>
              </div>
              <div class="email">
                <div class="email-icon">
                  <img src={locationLogo} alt="Location icon" />
                </div>
                <div class="email-info">
                  <h6 class="mb-10">
                    <a>168/170, Avenue 01, Mirpur</a>
                  </h6>
                  <h6>
                    <a>DOHS, Bangladesh</a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-center order-lg-2 order-1 justify-content-sm-center justify-content-start">
            <div class="footer-items">
              <h2>
                want <span>to keep</span>
                <br />
                your pet in, <span>our center</span>?
              </h2>
              <div class="book-btn">
                <a class="primary-btn1" href="contact.html">
                  Book Now
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 d-flex justify-content-sm-end justify-content-start order-3">
            <div class="footer-items opening-time">
              <h3>Opening Hours</h3>
              <h6 class="mb-25">Mon - Fri: 9.00AM - 6.00PM</h6>
              <h6 class="mb-25">Saturday: 9.00AM - 6.00PM</h6>
              <h6>Sunday: Closed</h6>
              <ul class="social-icons">
                <li>
                  <a href="https://www.facebook.com/">
                    <i class="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/">
                    <i class="bx bxl-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.pinterest.com/">
                    <i class="bx bxl-pinterest-alt"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <i class="bx bxl-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row border-top">
          <div class="col-lg-6">
            <div class="copyright-area">
              <p>
                © 2023 Scooby is Proudly Powered by{" "}
                <a href="https://www.egenslab.com/"> Egens Lab.</a>
              </p>
            </div>
          </div>
          <div class="col-lg-6 d-flex justify-content-lg-end justify-content-center">
            <ul class="footer-btm-menu">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
