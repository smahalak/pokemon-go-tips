import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import Tips from "./pages/Tips";
import AddMe from "./pages/AddMe";
import TipsDetail from "./pages/TipsDetail";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
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
    </div>
  );
}

export default App;
