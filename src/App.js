import Index from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import PlaceToStay from "./pages/PlaceToStay/PlaceToStay";
import { useMediaQuery } from "react-responsive";
function App() {
  const largeScreens = useMediaQuery({
    query: "(min-width :1025px)",
  });
  const smallScreensMax = useMediaQuery({
    query: "(max-width : 1024px)",
  });
  const smallScreensMin = useMediaQuery({
    query: "(min-width : 769px)",
  });
  const tabletMax = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const tabletMin = useMediaQuery({
    query: "(min-width: 480px)",
  });
  const mobile = useMediaQuery({
    query: "(max-width: 480px)",
  });

  const screen = {
    largeScreens: largeScreens,
    smallScreens: true ? smallScreensMax && smallScreensMin : false,
    tablet: true ? tabletMax && tabletMin : false,
    mobile: mobile,
  };

  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Index screen={screen} />} />
        <Route
          path={"/placetostay"}
          element={<PlaceToStay screen={screen} />}
        />
      </Routes>
    </div>
  );
}

export default App;
