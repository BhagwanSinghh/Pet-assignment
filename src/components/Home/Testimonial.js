import {
  SectionVec,
  SectionVecR2,
  H1Testi1,
  H1Testi2,
  H1Testi3,
  H1Testi4,
} from "../../assets/index.js";

const Testimonial = () => {
  return (
    <div class="h1-testimonial-area mb-120">
      <div class="container-fluid">
        <div class="row mb-50">
          <div class="col-lg-12 d-flex justify-content-center">
            <div class="section-title1 text-center">
              <span>
                <img src={SectionVec} alt="SectionVec"/>
                Testimonial
                <img src={SectionVecR2} alt="SectionVecR2"/>
              </span>
              <h2 class="text-white">valueable words from Customers</h2>
            </div>
          </div>
        </div>
        <div class="row justify-content-end">
          <div class="col-xxl-10 col-md-11  p-sm-0">
            <div class="swiper h1-testimonial-slider">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="testimonial-card">
                    <div class="testimonial-img">
                      <img class="img-fluid" src={H1Testi1} alt="H1Testi1"/>
                    </div>
                    <div class="testimonial-content">
                      <ul class="review">
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
                      <p>
                        I highly recommend Scooby to anyone in need of pet care
                        services. Whether it's for regular grooming or boarding,
                        you can trust that your pets will be in good hands.
                      </p>
                      <div class="author-area">
                        <h4>Michael Mason</h4>
                        <span>Customer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="testimonial-card">
                    <div class="testimonial-img">
                      <img class="img-fluid" src={H1Testi2}  alt="H1Testi2"/>
                    </div>
                    <div class="testimonial-content">
                      <ul class="review">
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
                      <p>
                        I highly recommend Scooby to anyone in need of pet care
                        services. Whether it's for regular grooming or boarding,
                        you can trust that your pets will be in good hands.
                      </p>
                      <div class="author-area">
                        <h4>Sebastian Ethan</h4>
                        <span>Customer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="testimonial-card">
                    <div class="testimonial-img">
                      <img class="img-fluid" src={H1Testi3} alt="H1Testi3" />
                    </div>
                    <div class="testimonial-content">
                      <ul class="review">
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
                      <p>
                        I highly recommend Scooby to anyone in need of pet care
                        services. Whether it's for regular grooming or boarding,
                        you can trust that your pets will be in good hands.
                      </p>
                      <div class="author-area">
                        <h4>Anthony Dylan </h4>
                        <span>Customer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="testimonial-card">
                    <div class="testimonial-img">
                      <img class="img-fluid" src={H1Testi4} alt="H1Testi4" />
                    </div>
                    <div class="testimonial-content">
                      <ul class="review">
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
                      <p>
                        I highly recommend Scooby to anyone in need of pet care
                        services. Whether it's for regular grooming or boarding,
                        you can trust that your pets will be in good hands.
                      </p>
                      <div class="author-area">
                        <h4>Maverick Elias</h4>
                        <span>Customer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-11">
            <div class="swiper-btn-wrap d-flex align-items-center justify-content-center">
              <div class="slider-btn prev-btn-1">
                <i class="bi bi-arrow-left"></i>
              </div>
              <div class="slider-btn next-btn-1">
                <i class="bi bi-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
