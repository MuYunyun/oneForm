import * as React from 'react';
import Controller from './controller'
import FormDemo1 from './formDemo1'

class Demo1 extends React.Component<any, any> {
  render() {
    return (
      <>
        <Controller>
          <FormDemo1 />
        </Controller>
      </>
    )
  }
}

export default Demo1