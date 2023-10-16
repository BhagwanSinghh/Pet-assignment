import {
  logo,
  supportIcon,
  headerLogo,
  banner,
  dogs,
  dogBg,
} from "../../assets/index.js";

const Banner = ({ page }) => {
  return (
    <div class="inner-page-banner">
      <div class="breadcrumb-vec-btm">
        <img class="img-fluid" src={banner} alt="inner-banner" />
      </div>
      <div class="container">
        <div class="row justify-content-center align-items-center text-center">
          <div class="col-lg-6 align-items-center">
              <div class="banner-content">
                <h1>{page}</h1>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a >Home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      {page}
                    </li>
                  </ol>
                </nav>
              </div>
            {/* )} */}
          </div>
          <div class="col-lg-6">
            <div class="banner-img d-lg-block d-none">
              <div class="banner-img-bg">
                <img class="img-fluid" src={dogBg} alt="inner-banner" />
              </div>
              <img class="img-fluid" src={dogs} alt="inner-banner" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
