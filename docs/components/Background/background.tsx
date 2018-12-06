import * as React from 'react';
import './index.less'

class Background extends React.Component<any, any> {
  render() {
    const { color, width } = this.props
    return (
      <div className="space" style={{ 'backgroundColor': color, 'width': width, }}>
        { this.props.children }
      </div>
    );
  }
}

export default Background