import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import Tips from "./pages/Tips";
import AddMe from "./pages/AddMe";
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
        <Route path="/tips">
          <Tips />
        </Route>
        <Route path="/addme">
          <AddMe />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
