import * as React from 'react'
import FormData from './formData'

const formData = new FormData()
export const formContext = React.createContext(formData)
