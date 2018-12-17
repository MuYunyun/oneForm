import * as React from 'react';
import ErrorBoundary from '../error/errorBoundary'
import FormElement from './formElement'
import './index.less'

interface FormItemObjectType {
  name: string,
  label?: string,
  colon?: boolean,
  inline?: boolean,
  labelCol?: string | number,
  wrapCol?: string | number,
  disable?: boolean,
  style?: object,
  initialValue?: string,
}

function FormItem(props: FormItemObjectType) {
  return (
    <ErrorBoundary>
      <FormElement {...props} />
    </ErrorBoundary>
  )
}

export default FormItem