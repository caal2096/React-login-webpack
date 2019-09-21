import React from "react";
import { Router, Route, Link } from "react-router-dom";

import { history } from "@/_helpers";
import { authenticationService } from "@/_services";
import { PrivateRoute } from "@/_components";
import { Dashboard } from "@/View/Dashboard";
import { LoginPage } from "@/View/LoginPage";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe(x =>
      this.setState({ currentUser: x })
    );
  }

  logout() {
    authenticationService.logout();
    history.push("/login");
  }

  render() {
    const { currentUser } = this.state;
    return (
      <Router history={history}>
        <div>
          {currentUser && (
            <nav className="navbar navbar-expand navbar-dark bg-dark">
              <div className="navbar-nav">
                <Link to="/Dashboard" className="nav-item nav-link">
                  Dashdoard
                </Link>
                <a onClick={this.logout} className="nav-item nav-link">
                  Logout
                </a>
              </div>
            </nav>
          )}

          <PrivateRoute exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/login" component={LoginPage} />
        </div>
      </Router>
    );
  }
}

export { App };
