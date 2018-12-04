import * as React from 'react';
import './index.less'

class Background extends React.Component<any, any> {
  render() {
    const { color } = this.props
    return (
      <div className="background" style={{ 'backgroundColor': color }}>
        { this.props.children }
      </div>
    );
  }
}

export default Background