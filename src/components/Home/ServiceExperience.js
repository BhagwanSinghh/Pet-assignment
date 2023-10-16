import { Client, Animals, Walked, Years } from "../../assets/index.js";

const ServiceExperience = () => {
  return (
    <div class="h1-feature-counter mb-120">
      <div class="container-md container-fluid">
        <div class="row justify-content-center g-md-4 gy-5">
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="counter-single client">
              <div class="counter-icon">
                <img src={Client} alt="Client" />
              </div>
              <div class="coundown">
                <div class="d-flex align-items-center gap-2">
                  <h3 class="odometer" data-odometer-final="100">
                    00
                  </h3>
                  <span>+</span>
                </div>
                <p>Client Served</p>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="counter-single animals">
              <div class="counter-icon">
                <img src={Animals} alt="Animals" />
              </div>
              <div class="coundown">
                <div class="d-flex align-items-center gap-12">
                  <h3 class="odometer" data-odometer-final="700">
                    00
                  </h3>
                  <span>+</span>
                </div>
                <p>Served animals</p>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="counter-single walked">
              <div class="counter-icon">
                <img src={Walked} alt="Walked" />
              </div>
              <div class="coundown">
                <div class="d-flex align-items-center gap-2">
                  <h3 class="odometer" data-odometer-final="1000">
                    00
                  </h3>
                </div>
                <p>Miles Walked </p>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="counter-single years">
              <div class="counter-icon">
                <img src={Years} alt="Years" />
              </div>
              <div class="coundown">
                <div class="d-flex align-items-center gap-2">
                  <h3 class="odometer" data-odometer-final="05">
                    00
                  </h3>
                </div>
                <p>Combined years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceExperience;


