import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import Tips from "./pages/Tips";
import AddMe from "./pages/AddMe";
import TipsDetail from "./pages/TipsDetail";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/tips" exact>
            <Tips />
          </Route>
          <Route path="/tips/:id">
            <TipsDetail />
          </Route>
          <Route path="/addme">
            <AddMe />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
