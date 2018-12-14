import * as React from 'react'

class ErrorBoundary extends React.Component<any, any> {
  state = {
    hasError: false,
    errorInfo: ''
  }

  static getDerivedStateFromError(errorInfo: any) {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true,
      errorInfo,
    };
  }

  componentDidCatch(error: any) {}

  render() {
    if (this.state.hasError) {
      return <div>{this.state.errorInfo.toString()}</div>
    }
    return this.props.children
  }
}

export default ErrorBoundary