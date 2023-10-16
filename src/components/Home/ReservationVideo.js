import { video04 } from "../../assets/video-index.js";

const ReservationVideo = () => {
  return (
    <div class="hero-video-area">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-lg-11">
            <div class="video-wraper">
              <video autoplay loop muted preload="auto">
                <source src={video04} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationVideo;
