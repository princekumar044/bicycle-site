
import "./PreLoader.css";

const PreLoader = () => {
  return (
    <div className="preloader-wrapper">
      <div className="bike-container">
        <svg className="bike" viewBox="0 0 512 512" width="120" height="120">
          <circle className="wheel back" cx="130" cy="380" r="60" />
          <circle className="wheel front" cx="380" cy="380" r="60" />
          <polyline className="frame" points="130,380 180,300 240,380 300,300 380,380 240,380" />
          <circle className="pedal" cx="240" cy="380" r="10" />
        </svg>
        <p className="loading-text ">Hold Tight, Wheels Are Rolling…</p>
      </div>
    </div>
  );
};

export default PreLoader;
