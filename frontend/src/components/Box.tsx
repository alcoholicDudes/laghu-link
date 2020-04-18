import * as React from 'react'
import './Box.scss'

export interface Props {
  height?: string
  children?: any
  styles?: object
}

const Hello = ({children, styles}: Props) => {
  return (
    <div className="box" style={styles}>
      {children}
    </div>
  )
}

export default Hello
