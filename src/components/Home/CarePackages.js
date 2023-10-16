import { Badge, Checked, Insured, FastAid } from "../../assets/index.js";

const CarePackages = () => {
  return (
    <div class="h1-feature-area">
      <div class="container-fluid p-0">
        <div class="row justify-content-center bg">
          <div class="col-lg-10 gap-4 d-flex align-items-center justify-content-lg-between justify-content-center flex-lg-nowrap flex-wrap ">
            <div class="feature-left">
              <div class="single-card mb-45">
                <div class="icon">
                  <img src={Badge} alt="badge1" />
                </div>
                <div class="content">
                  <h4>ID Badged</h4>
                  <p>
                    Pellentesque maximus augue orci, quis congue purus iaculison
                  </p>
                </div>
              </div>
              <div class="single-card">
                <div class="icon">
                  <img src={Checked} alt="checked1" />
                </div>
                <div class="content">
                  <h4>DBS Checked</h4>
                  <p>
                    Pellentesque maximus augue orci, quis congue purus iaculison
                  </p>
                </div>
              </div>
            </div>
            <div class="freture-title">
              <h2>
                Your Pets Are <span>100% Safe</span> at Our Care.
              </h2>
            </div>
            <div class="feature-right">
              <div class="single-card mb-45">
                <div class="icon">
                  <img src={Insured} alt="insured1" />
                </div>
                <div class="content">
                  <h4>Fully Insured</h4>
                  <p>
                    Pellentesque maximus augue orci, quis congue purus iaculison
                  </p>
                </div>
              </div>
              <div class="single-card">
                <div class="icon">
                  <img src={FastAid} alt="fast-aid" />
                </div>
                <div class="content">
                  <h4>Pet First-Aid Trained</h4>
                  <p>
                    Pellentesque maximus augue orci, quis congue purus iaculison
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarePackages;
