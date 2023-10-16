import {
  section,
  sectionr1,
  PriceCard,
  PricingCheck,
  PricingX,
  PriceCardBg,
} from "../../assets/index";

const PricingPlan = () => {
  return (
    <div class="h1-pricing-plan-area mb-120">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <div class="section-title1 text-center">
              <span>
                <img src={section} alt="section" />
                Pricing plan
                <img src={sectionr1} alt="sectionr1" />
              </span>
              <h2>Choose your perfect Plan</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                class="nav-link one active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Per Hour
              </button>
              <button
                class="nav-link two"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Per Day
              </button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div class="row justify-content-center g-lg-4 gy-5">
                <div class="col-lg-4 col-md-6 col-sm-10">
                  <div class="pricing-card">
                    <img
                      class="price-card-vector"
                      src={PriceCard}
                      alt="price"
                    />
                    <div class="title">
                      <h4>Day Care Regular</h4>
                      <h2>
                        <span class="currency">$</span> 39{" "}
                        <span class="time">Per Hour</span>
                      </h2>
                    </div>
                    <ul>
                      <li>
                        Socialise Excercise
                        <img src={PricingCheck} alt="pricing" />
                      </li>
                      <li>
                        Handscissor Finish
                        <img src={PricingCheck} alt="pricing" />
                      </li>
                      <li>
                        Watering Plants
                        <img src={PricingCheck} alt="pricing" />
                      </li>
                      <li>
                        Conditioning Treatment
                        <img src={PricingX} alt="pricing" />
                      </li>
                      <li>
                        Ears Flushed & Cleaned
                        <img src={PricingX} alt="pricing" />
                      </li>
                    </ul>
                    <div class="book-now-btn">
                      <a href="contact.html">Book Now</a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-10">
                  <div class="pricing-card active">
                    <div class="offer-batch">
                      <h5>
                        50% <span>Off</span>
                      </h5>
                    </div>
                    <img
                      class="price-card-vector"
                      src={PriceCardBg}
                      alt="price"
                    />
                    <div class="title">
                      <h4>Day Care Standard </h4>
                      <h2>
                        <span class="currency">$</span> 49{" "}
                        <span class="time">Per Hour</span>
                      </h2>
                    </div>
                    <ul>
                      <li>
                        Socialise Excercise
                        <img src={PricingCheck} alt="pricing" />
                      </li>
                      <li>
                        Handscissor Finish
                        <img src={PricingCheck} alt="pricing" />
                      </li>
                      <li>
                        Watering Plants
                        <img src={PricingCheck} alt="pricing" />
                      </li>
                      <li>
                        Conditioning Treatment
                        <img src={PricingX} alt="pricing" />
                      </li>
                      <li>
                        Ears Flushed & Cleaned
                        <img src={PricingX} alt="pricing" />
                      </li>
                    </ul>
                    <div class="book-now-btn">
                      <a href="contact.html">Book Now</a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-10">
                  <div class="pricing-card">
                    <img
                      class="price-card-vector"
                      src={PriceCardBg}
                      alt="price"
                    />
                    <div class="title">
                      <h4>Day Care Special </h4>
                      <h2>
                        <span class="currency">$</span> 99{" "}
                        <span class="time">Per Hour</span>
                      </h2>
                    </div>
                    <ul>
                      <li>
                        Socialise Excercise
                        <img src={PricingCheck} alt="pricing" />
                      </li>
                      <li>
                        Handscissor Finish
                        <img src={PricingCheck} alt="pricing" />
                      </li>
                      <li>
                        Watering Plants
                        <img src={PricingCheck} alt="pricing" />
                      </li>
                      <li>
                        Conditioning Treatment
                        <img src={PricingX} alt="pricing" />
                      </li>
                      <li>
                        Ears Flushed & Cleaned
                        <img src={PricingX} alt="pricing" />
                      </li>
                    </ul>
                    <div class="book-now-btn">
                      <a href="contact.html">Book Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <div class="row justify-content-center g-lg-4 gy-5">
                <div class="col-lg-4 col-md-6 col-sm-10">
                  <div class="pricing-card">
                    <img
                      class="price-card-vector"
                      src={PriceCardBg}
                      alt="price"
                    />
                    <div class="title">
                      <h4>Day Care Regular</h4>
                      <h2>
                        <span class="currency">$</span> 390{" "}
                        <span class="time">Per Day</span>
                      </h2>
                    </div>
                    <ul>
                      <li>
                        Socialise Excercise
                        <img src={PricingCheck} alt="pricing" />
                      </li>
                      <li>
                        Handscissor Finish
                        <img src={PricingCheck} alt="pricing" />
                      </li>
                      <li>
                        Watering Plants
                        <img src={PricingCheck} alt="pricing" />
                      </li>
                      <li>
                        Conditioning Treatment
                        <img src={PricingX} alt="pricing" />
                      </li>
                      <li>
                        Ears Flushed & Cleaned
                        <img src={PricingX} alt="pricing" />
                      </li>
                    </ul>
                    <div class="book-now-btn">
                      <a href="contact.html">Book Now</a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-10">
                  <div class="pricing-card">
                    <div class="offer-batch">
                      <h5>
                        50% <span>Off</span>
                      </h5>
                    </div>
                    <img
                      class="price-card-vector"
                      src={PriceCardBg}
                      alt="price"
                    />
                    <div class="title">
                      <h4>Day Care Standard </h4>
                      <h2>
                        <span class="currency">$</span> 490{" "}
                        <span class="time">Per Day</span>
                      </h2>
                    </div>
                    <ul>
                      <li>
                        Socialise Excercise
                        <img src={PricingCheck} alt="pricing" />
                      </li>
                      <li>
                        Handscissor Finish
                        <img src={PricingCheck} alt="pricing" />
                      </li>
                      <li>
                        Watering Plants
                        <img src={PricingCheck} alt="pricing" />
                      </li>
                      <li>
                        Conditioning Treatment
                        <img src={PricingX} alt="pricing" />
                      </li>
                      <li>
                        Ears Flushed & Cleaned
                        <img src={PricingX} alt="pricing" />
                      </li>
                    </ul>
                    <div class="book-now-btn">
                      <a href="contact.html">Book Now</a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-10">
                  <div class="pricing-card">
                    <img
                      class="price-card-vector"
                      src={PriceCardBg}
                      alt="price"
                    />
                    <div class="title">
                      <h4>Day Care Special</h4>
                      <h2>
                        <span class="currency">$</span> 990{" "}
                        <span class="time">Per Day</span>
                      </h2>
                    </div>
                    <ul>
                      <li>
                        Socialise Excercise
                        <img src={PricingCheck} alt="pricing" />
                      </li>
                      <li>
                        Handscissor Finish
                        <img src={PricingCheck} alt="pricing" />
                      </li>
                      <li>
                        Watering Plants
                        <img src={PricingCheck} alt="pricing" />
                      </li>
                      <li>
                        Conditioning Treatment
                        <img src={PricingX} alt="pricing" />
                      </li>
                      <li>
                        Ears Flushed & Cleaned
                        <img src={PricingX} alt="pricing" />
                      </li>
                    </ul>
                    <div class="book-now-btn">
                      <a href="c.html">Book Now</a>
                    </div>
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
export default PricingPlan;
