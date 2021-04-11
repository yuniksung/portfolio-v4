import './App.css';

// Pages
import CoverPage from "./pages/CoverPage/CoverPage";
import MainPage from "./pages/MainPage/MainPage"

// Components
import AppStickyMenu from "./component/App-component/AppStickyMenu";
import AppNav from "./component/App-component/AppNav";
import AppFooter from "./component/App-component/AppFooter";

import "./App.scss";

function App() {
  return (
    <div className="App">
        <CoverPage />
        <AppStickyMenu />
        <AppNav />
        <AppFooter />
        <MainPage />
    </div>
  );
}

export default App;
