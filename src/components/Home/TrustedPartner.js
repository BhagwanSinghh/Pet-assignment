import {
  FounderImage,
  ExperienceAvatarIcon,
  Envato,
  Xidex,
  ArrowCompany,
  Ozgeo,
  Avianca,
  Shopee,
  Olinski,
  AirPrime,
} from "../../assets/index.js";

const TrustedPartner = () => {
  return (
    <div class="h1-partner-area mb-120">
      <div class="container">
        <div class="row align-items-center g-4">
          <div class="col-xl-5">
            <div class="partner-left">
              <div class="section-title1">
                <span>Here Our Partner Connceted With Us</span>
                <h2>Our Trusted Partner </h2>
              </div>
              <div class="author-name-expariance">
                <div class="author-name">
                  <div class="img">
                    <img src={FounderImage} alt="founder" />
                  </div>
                  <div class="name-deg">
                    <span>Founder</span>
                    <h4>Kash Preston</h4>
                  </div>
                </div>
                <div class="expariance">
                  <img src={ExperienceAvatarIcon} alt="experiance" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-7">
            <div class="row justify-content-center">
              <div class="col-lg-3 col-md-3 col-sm-4 col-6 d-flex justify-content-center">
                <div class="partner-img">
                  <img src={Envato} alt="envato" />
                </div>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-4 col-6 d-flex justify-content-center">
                <div class="partner-img">
                  <img src={Xidex} alt="xidex" />
                </div>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-4 col-6 d-flex justify-content-center">
                <div class="partner-img">
                  <img src={ArrowCompany} alt="arrow" />
                </div>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-4 col-6 d-flex justify-content-center">
                <div class="partner-img">
                  <img src={Ozgeo} alt="ozgeo" />
                </div>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-4 col-6 d-flex justify-content-center">
                <div class="partner-img">
                  <img src={Avianca} alt="avianca" />
                </div>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-4 col-6 d-flex justify-content-center">
                <div class="partner-img">
                  <img src={Shopee} alt="shopee" />
                </div>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-4 col-6 d-flex justify-content-center">
                <div class="partner-img">
                  <img src={Olinski} alt="olinski" />
                </div>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-4 col-6 d-flex justify-content-center">
                <div class="partner-img">
                  <img src={AirPrime} alt="air-prime" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedPartner;
