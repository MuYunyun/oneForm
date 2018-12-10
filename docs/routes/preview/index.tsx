import * as React from 'react';
import * as Prism from 'prismjs'
import './index.less'

class PreView extends React.Component<any, any> {
  render() {
    const { jsxString } = this.props
    return (
      <>
        <pre className="code-background"><code
          dangerouslySetInnerHTML={{ __html: Prism.highlight(jsxString, Prism.languages.javascript) }}>
        </code></pre>
      </>
    )
  }
}

export default PreView