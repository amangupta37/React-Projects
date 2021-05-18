import "./App.css";
import { Route, Switch } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Navigation from "./layouts/Navigation";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Page1 />
        </Route>
        <Route path="/page2">
          <Page2 />
        </Route>
        <Route path="/page3">
          <Page3 />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
