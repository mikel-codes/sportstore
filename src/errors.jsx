import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    //logErrorToMyService(error, info);

    this.setState({
      error: error,
      errorInfo: info
    });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2 className="ui centered huge basic label">
            Something went wrong.
          </h2>
          <details style={{ whiteSpace: "pre-wrap", color: "indianred" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
