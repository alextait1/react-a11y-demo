import React from 'react';
import './App.css';
import { ModalDemo } from "./Pages/modal-demos";
import FocusRouting from "./Pages/focus-management-and-routing";
import { Home } from './Pages/home';
import { DynamicUpdates } from "./Pages/dynamic-updates";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  
  componentDidMount(){
    document.title = "React Acccessibility Demo";
    let target = document.querySelectorAll('h1, h2, h3, h4, h5, h6')[0];
    target.setAttribute('tabindex', "-1");
    target.focus();
  }
  render(){

    return (
      <Router>
        <div className="App" id="application">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/modal-demo">Modal Demos</Link>
              </li>
              <li>
                <Link to="/focus-routing">Focus Management and Routing</Link>
              </li>
              <li>
                <Link to="/dynamic-updates">Dynamic updates and Announcements</Link>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/modal-demo">
              <ModalDemo />
            </Route>
            <Route exact path="/focus-routing">
              <FocusRouting />
            </Route>
            <Route exact path="/dynamic-updates">
              <DynamicUpdates />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
