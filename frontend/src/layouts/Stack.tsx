// lib imports
import React from 'react'

// shared imports
import Box from 'components/Box'

interface Props {
  children?: any
  title?: string
}
const StackLayout = ({children, title}: Props) => {
  return (
    <Box styles={{height: '100vh'}}>
      {/* TITLE_BAR */}
      {/* <OverflowBox fill="vertical">{children}</OverflowBox> */}
    </Box>
  )
}

export default StackLayout
