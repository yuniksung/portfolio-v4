import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import MainPage from "./component/mainpage/MainPage"


// Components
import AppStickyMenu from "./component/App-component/AppStickyMenu";
import AppNav from "./component/App-component/AppNav";
import AppFooter from "./component/App-component/AppFooter";

import "./App.scss";

function App() {

  const pages = ["home", "Classes", "Workout", "Profile"];

  const navLinks = pages.map((page) => {
    return <a href={"/" + page}>{page}</a>;
  });

  return (
  <Router>
    <AppNav>{navLinks}</AppNav>
    <div>
        <MainPage />
        <AppStickyMenu />
    </div>
  </Router>
  );
}

export default App;
