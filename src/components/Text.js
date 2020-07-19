import React from 'react'
import { TextField, Typography } from '@material-ui/core'
import styled from 'styled-components'

const StyledTypography = styled(Typography)`
  && {
    font-weight: 700;
  }
`

const CustomTextField = styled.div`
  && {
    margin: 16px;
  }
`

const Text = ({ label, value, setValue }) => {
  return (
    <CustomTextField>
      <StyledTypography variant='subtitle2'>{label}</StyledTypography>
      <TextField
        value={value}
        variant='outlined'
        onChange={(e) => setValue(e.target.value)}
      />
    </CustomTextField>
  )
}

export default Text
