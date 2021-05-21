import "./App.css";
import { Route, Switch } from "react-router-dom";
import Allmeetups from "./pages/Allmeetups";
import Favorites from "./pages/Favorites";
import NewMeetups from "./pages/NewMeetup";
import Navigation from "./layouts/Navigation";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Allmeetups />
        </Route>
        <Route path="/NewMeetup">
          <Favorites />
        </Route>
        <Route path="/Favorites">
          <NewMeetups />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
