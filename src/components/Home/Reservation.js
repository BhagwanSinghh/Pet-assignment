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

import { dogCat, trustpilot001, google2 } from "../../assets/index.js";

const Reservation = () => {
  return (
    <div class="hero-style-1">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-lg-11">
            <div class="row">
              <div class="col-xxl-6 col-xl-5 d-flex align-items-center">
                <div class="banner-content ">
                  <div class="tag">
                    <ul>
                      <li>Trustworthy</li>
                      <li>Safely</li>
                      <li>Loyalty</li>
                    </ul>
                  </div>
                  <h1>
                    To Ensure Perfect
                    <br /> Service Of Your{" "}
                    <span id="js-rotating" class="morphext">cat., dog.</span>
                  </h1>
                </div>
              </div>
              <div class="col-xxl-6 col-xl-7 d-flex align-items-center justify-content-md-start justify-content-center">
                <div class="banner-img">
                  <img class="img-fluid" src={dogCat} alt="new-banner" />
                </div>
                <div class="reservation-review">
                  <div class="reservation-btn">
                    <a class="primary-btn1" href="contact.html">
                      Make A Reservation
                    </a>
                  </div>
                  <div class="review-area">
                    <ul>
                      <li>
                        <div class="single-review">
                          <div class="icon">
                            <img src={trustpilot001} alt="trustpilot001" />
                            <span>reviews</span>
                          </div>
                          <div class="reviews">
                            <ul>
                              <li>
                                <i class="bi bi-star-fill"></i>
                              </li>
                              <li>
                                <i class="bi bi-star-fill"></i>
                              </li>
                              <li>
                                <i class="bi bi-star-fill"></i>
                              </li>
                              <li>
                                <i class="bi bi-star-fill"></i>
                              </li>
                              <li>
                                <i class="bi bi-star-fill"></i>
                              </li>
                            </ul>
                            <span>(200)</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="single-review">
                          <div class="icon">
                            <img src={google2} alt="google2" />
                            <span>reviews</span>
                          </div>
                          <div class="reviews">
                            <ul>
                              <li>
                                <i class="bi bi-star-fill"></i>
                              </li>
                              <li>
                                <i class="bi bi-star-fill"></i>
                              </li>
                              <li>
                                <i class="bi bi-star-fill"></i>
                              </li>
                              <li>
                                <i class="bi bi-star-fill"></i>
                              </li>
                              <li>
                                <i class="bi bi-star-fill"></i>
                              </li>
                            </ul>
                            <span>(300)</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Reservation;
