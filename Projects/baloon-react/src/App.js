import Animated from "./components/Animated";
import baloonImg from "./assets/balloon.png";
import cloudImg from "./assets/cloud.png";

const App = () => {
  return (
    <div className="ballon-animation">
      <Animated
        src={cloudImg}
        className="flying-cloud"
        ratioX={0.33}
        ratioY={0.4}
      />
      <Animated
        src={cloudImg}
        className="flying-cloud"
        ratioX={0.22}
        ratioY={0.33}
      />
      <Animated
        src={cloudImg}
        className="flying-cloud"
        ratioX={0.1}
        ratioY={0.15}
      />
      <Animated
        src={cloudImg}
        className="flying-cloud"
        ratioX={0.5}
        ratioY={0.13}
      />
      <Animated
        src={cloudImg}
        className="flying-cloud"
        ratioX={0.23}
        ratioY={0.6}
      />
      <Animated
        src={cloudImg}
        className="flying-cloud"
        ratioX={0.05}
        ratioY={0.1}
      />
      <Animated
        src={baloonImg}
        className="flying-ballon"
        ratioX={0.08}
        ratioY={0.1}
      />
    </div>
  );
};

export default App;
