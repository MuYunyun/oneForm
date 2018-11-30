import * as React from 'react';
import Prism from 'prismjs'
import './index.less'

class PreView extends React.Component {
  render() {
    const { jsxString } = this.props
    return (
      <>
        <br /><br />
        <pre className="code-background"><code
          dangerouslySetInnerHTML={{ __html: Prism.highlight(jsxString, Prism.languages.javascript, 'javascript') }}>
        </code></pre>
      </>
    )
  }
}

export default PreView