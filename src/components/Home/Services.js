import {
  section,
  sectionr1,
  servicescard,
  Arrow,
  Daycare,
  Grooming,
  Boarding,
  Veterinary,
} from "../../assets/index.js";

const Services = () => {
  return (
    <div class="h1-service-area pt-120 mb-120">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <div class="section-title1 text-center">
              <span>
                <img src={section} alt="section" />
                Services
                <img src={sectionr1} alt="section" />
              </span>
              <h2>Experience our worship</h2>
            </div>
          </div>
        </div>
        <div class="row d-sm-flex d-none">
          <div class="col-lg-12">
            <div class="swiper-btn-wrap d-flex align-items-center justify-content-between">
              <div class="slider-btn prev-btn-1">
                <i class="bi bi-arrow-left"></i>
              </div>
              <div class="slider-btn next-btn-1">
                <i class="bi bi-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="swiper home1-services-slider">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="services-card1">
                  <img
                    class="services-card-vec"
                    src={servicescard}
                    alt="services"
                  />
                  <div class="icon">
                    <img src={Daycare} alt="daycare" />
                  </div>
                  <div class="content">
                    <h3>
                      <a href="service-details.html">Daycare </a>
                    </h3>
                    <p>
                      Pellentesque maximus augue orciquista ut aliquet risus In
                      hac habitasse.
                    </p>
                  </div>
                  <a class="more-btn" href="service-details.html">
                    More Details
                    <img src={Arrow} alt="arrow1" />
                  </a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="services-card1 two">
                  <img
                    class="services-card-vec"
                    src={servicescard}
                    alt="services"
                  />
                  <div class="icon">
                    <img src={Grooming} alt="grooming2" />
                  </div>
                  <div class="content">
                    <h3>
                      <a href="service-details.html">Grooming </a>
                    </h3>
                    <p>
                      Pellentesque maximus augue orciquista ut aliquet risus In
                      hac habitasse.
                    </p>
                  </div>
                  <a class="more-btn" href="service-details.html">
                    More Details
                    <img src={Arrow} alt="arrow1" />
                  </a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="services-card1 three">
                  <img
                    class="services-card-vec"
                    src={servicescard}
                    alt="services"
                  />
                  <div class="icon">
                    <img src={Boarding} alt="boarding2" />
                  </div>
                  <div class="content">
                    <h3>
                      <a href="service-details.html">Boarding</a>
                    </h3>
                    <p>
                      Pellentesque maximus augue orciquista ut aliquet risus In
                      hac habitasse.
                    </p>
                  </div>
                  <a class="more-btn" href="service-details.html">
                    More Details
                    <img src={Arrow} alt="arrow1" />
                  </a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="services-card1 four">
                  <img
                    class="services-card-vec"
                    src={servicescard}
                    alt="services"
                  />
                  <div class="icon">
                    <img src={Veterinary} alt="veterinary2" />
                  </div>
                  <div class="content">
                    <h3>
                      <a href="service-details.html">veterinary</a>
                    </h3>
                    <p>
                      Pellentesque maximus augue orciquista ut aliquet risus In
                      hac habitasse.
                    </p>
                  </div>
                  <a class="more-btn" href="service-details.html">
                    More Details
                    <img src={Arrow} alt="arrow1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
