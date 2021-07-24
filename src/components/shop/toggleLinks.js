import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

export class ToggleLinks extends Component {
  render() {
    return (
      <div>
        <Route
          path={this.props.to}
          exact={this.props.exact}
          children={routeProps => {
            const baseClass = this.props.className || "ui fluid button";
            const activeClass = this.props.activeClass || " primary";
            const inActiveClass = this.props.inActiveClass || "secondary";
            const combinedClasses = `${baseClass} ${
              routeProps.match ? activeClass : inActiveClass
            }`;
            return (
              <Link to={this.props.to} className={combinedClasses}>
                {this.props.children}
              </Link>
            );
          }}
        />
      </div>
    );
  }
}
