import { useNavigate } from "react-router-dom";

export const TravelPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="travel">
      <div className="travel-header">
        <img src="/travel-img.png" alt="" />

        <button onClick={handleGoBack}>
          <img src="/back.svg" alt="" />
        </button>
        <img className="travel-save" src="/save.svg" alt="" />
        <div className="travel-item__info">
          <p className="travel-item__info__title">
            <span className="active1">Andes Mountain</span>Price
          </p>
          <div className="travel-item__container">
            <div className="travel-item__location">
              <img src="/location.svg" alt="loc" />
              <p className="travel-item__location__text">South, America</p>
            </div>
            <div className="travel-item__stars">
              <p className="travel-item__stars__text">
                <span className="dollar">$</span>
                230
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="travel-main">
        <h3 className="main-title">
          Overview
          <span className="main-title__active">Details</span>
        </h3>

        <div className="main-info">
          <div className="main-info__stats">
            <img src="/clock.svg" alt="" />
            <p className="main-info__stats__text">8 hours</p>
          </div>
          <div className="main-info__stats">
            <img src="/cloud.svg" alt="" />
            <p className="main-info__stats__text">16 C</p>
          </div>
          <div className="main-info__stats">
            <img src="/star3.svg" alt="" />
            <p className="main-info__stats__text">4.5</p>
          </div>
        </div>

        <p className="main-desc">
          This vast mountain range is renowned for its remarkable diversity in
          terms of topography and climate. It features towering peaks, active
          volcanoes, deep canyons, expansive plateaus, and lush valleys. The
          Andes are also home to
        </p>
      </div>
      <a href="/" className="travel-btn">
        Book Now
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="24"
          viewBox="0 0 23 24"
          fill="none"
        >
          <path
            d="M14.1368 23.0126C12.7279 23.0126 10.7339 22.0216 9.15787 17.2815L8.29815 14.7025L5.71916 13.8429C0.991003 12.2668 0 10.2729 0 8.86395C0 7.46699 0.991003 5.46111 5.71916 3.87311L15.8561 0.494152C18.3873 -0.353573 20.5007 -0.102838 21.8021 1.18666C23.1035 2.47616 23.3543 4.60144 22.5066 7.13268L19.1276 17.2696C17.5396 22.0216 15.5457 23.0126 14.1368 23.0126ZM6.28033 5.5805C2.96107 6.6909 1.77903 8.00428 1.77903 8.86395C1.77903 9.72365 2.96107 11.037 6.28033 12.1355L9.2892 13.1384C9.55188 13.222 9.7668 13.4369 9.85038 13.6996L10.8533 16.7084C11.9518 20.0277 13.2771 21.2097 14.1368 21.2097C14.9964 21.2097 16.3098 20.0277 17.4202 16.7084L20.7992 6.57151C21.4081 4.73278 21.3006 3.22836 20.5245 2.45228C19.7485 1.67619 18.244 1.58067 16.4173 2.1896L6.28033 5.5805Z"
            fill="white"
          />
          <path
            d="M9.22925 14.38C9.00237 14.38 8.77552 14.2964 8.59642 14.1173C8.25017 13.7711 8.25017 13.198 8.59642 12.8517L12.8709 8.56532C13.2171 8.21907 13.7903 8.21907 14.1365 8.56532C14.4828 8.91158 14.4828 9.48469 14.1365 9.83094L9.86206 14.1173C9.69491 14.2964 9.45611 14.38 9.22925 14.38Z"
            fill="white"
          />
        </svg>
      </a>
    </div>
  );
};
