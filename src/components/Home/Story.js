import { Trastpilot, StoryImg, section, sectionr1 } from "../../assets/index.js";
const Story = () => {
  return (
    <div class="h1-story-area mb-120">
      <div class="container">
        <div class="row g-lg-4 gy-5">
          <div class="col-lg-6">
            <div class="section-title1">
              <span>
                <img
                  src={section}
                  alt="sectionl1"
                />
                Our Story
                <img
                  src={sectionr1}
                  alt="sectionri"
                />
              </span>
              <h2>come to know what we have done about pets.</h2>
            </div>
            <div class="story-content">
              <p>
                Pellentesque maximus augue orci, quis congue purus iaculison id.
                Maecenas eu lorem quisesdoi massal molestie vulputate in sitagi
                amet diam. Cras eu odio sit amet ipsum cursus for that gone
                pellentesquea. thisaton Vestibulum ut aliquet risus. In hac
                habitasse plateajoa dictumst. Nuncet posuere scelerisque justo
                in accumsan.
              </p>
              <div class="story-title-reviews">
                <h3>
                  We Think Working Process may <span>increase</span> mindset.
                </h3>
                <div class="review">
                  <p>
                    Based on <a href="#">20,921 reviews</a>
                  </p>
                  <img
                    src={Trastpilot}
                    alt="trastpilot"
                  />
                </div>
              </div>
              <p>
                Pellentesque maximus augue orci, quis congue purus iaculison id.
                Maecenas eu lorem quisesdoi massal molestie vulputate in sitagi
                amet diam. Cras eu odio sit amet ipsum cursus for that gone
                pellentesquea. thisaton Vestibulum ut aliquet risus.
              </p>
            </div>
          </div>
          <div class="col-lg-6 d-flex justify-content-lg-end justify-content-center">
            <div class="story-img">
              <img
                class="img-fluid"
                src={StoryImg}
                alt="story"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
