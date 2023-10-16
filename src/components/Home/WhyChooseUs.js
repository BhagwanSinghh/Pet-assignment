import {
  section,
  sectionr1,
  ChooseStar,
  DogLeaf,
  ChooseVector,
  PersonalizedCare,
  TrustedTeam,
  PeaceMind,
} from "../../assets/index.js";

const WhyChooseUs = () => {
  return (
    <div class="h1-choose-area mb-120">
      <div class="container ">
        <div class="row g-lg-4 gy-5 justify-content-center">
          <div class="col-lg-5">
            <div class="section-title1">
              <span>
                <img src={section} alt="section" />
                Why Choose Us
                <img src={sectionr1} alt="sectionr1" />
              </span>
              <h2>we provide the best care services.</h2>
            </div>
            <div class="choose-content">
              <p>
                Pellentesque maximus augue orci, quis congue purus iaculis id.
                Maecenas eudocl lorem quis massal molestie vulputate in sit amet
                diam. Cras eu odio sit amet ont tellus. Cras ut sollicitudin
                urna. Vivamus blandit,
              </p>
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      01. In et finibus lectus. Donec scelerisque tortor?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Pellentesque maximus augue orci, quis congue purus iaculis
                      id. Maecenas eudocl lorem quis massal molestie vulputate
                      in sit amet diam. Cras eu odio sit amet ont tellus. Cras
                      ut sollicitudin urna. Vivamus blandit,{" "}
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      02. rhoncus turpis porta non Curabitur interdum?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Pellentesque maximus augue orci, quis congue purus iaculis
                      id. Maecenas eudocl lorem quis massal molestie vulputate
                      in sit amet diam. Cras eu odio sit amet ont tellus. Cras
                      ut sollicitudin urna. Vivamus blandit,{" "}
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      03. Donec ac enim vitae ligula ultrices accum?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Pellentesque maximus augue orci, quis congue purus iaculis
                      id. Maecenas eudocl lorem quis massal molestie vulputate
                      in sit amet diam. Cras eu odio sit amet ont tellus. Cras
                      ut sollicitudin urna. Vivamus blandit,
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-8">
            <div class="choose-img">
              <div class="batch">
                <img src={ChooseStar} alt="choose" />
                <span>
                  100% Safe
                  <br />
                  Your Pet
                </span>
              </div>
              <div class="choose-vector">
                <img src={ChooseVector} alt="choose" />
              </div>
              <img class="img-fluid" src={DogLeaf} alt="choose-img" />
            </div>
          </div>
          <div class="col-lg-2">
            <div class="choose-feature">
              <ul>
                <li>
                  <div class="single-choose-card">
                    <div class="icon">
                      <img src={PersonalizedCare} alt="care" />
                    </div>
                    <div class="content">
                      <h4>Personalized care</h4>
                      <p>
                        Pellentesque maximus augue orci, quisl congue purus
                        iaculison
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="single-choose-card">
                    <div class="icon">
                      <img src={TrustedTeam} alt="team" />
                    </div>
                    <div class="content">
                      <h4>Trusted Team</h4>
                      <p>
                        Pellentesque maximus augue orci, quisl congue purus
                        iaculison
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="single-choose-card">
                    <div class="icon">
                      <img src={PeaceMind} alt="mind" />
                    </div>
                    <div class="content">
                      <h4>Peace of mind</h4>
                      <p>
                        Pellentesque maximus augue orci, quisl congue purus
                        iaculison
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
