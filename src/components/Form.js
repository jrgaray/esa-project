import React from 'react'
import {
  Grid,
  Checkbox,
  Radio,
  RadioGroup,
  FormControl,
  Typography,
  FormLabel,
  FormControlLabel,
  FormGroup,
} from '@material-ui/core'
import Text from 'components/Text'
import styled from 'styled-components'
import { xor } from 'lodash'

const StyledTypography = styled(Typography)`
  && {
    font-weight: 700;
  }
`

const CustomFormControl = styled(FormControl)`
  && {
    margin: 16px;
  }
`

const toggle = (array, item) => xor(array, [item])
const contractOptions = ['D130028', 'D140080', 'D2345098', 'D1o87287']
const billingStatuses = [
  {
    label: 'This person has already billed time to the project',
    value: 'billed',
  },
  { label: 'Current employee to add to schedule', value: 'current' },
  { label: 'New employee starting soon', value: 'new' },
]

const Form = ({
  firstName,
  lastName,
  setFirstName,
  setLastName,
  contracts,
  setContracts,
  billingStatus,
  setBillingStatus,
}) => {
  return (
    <>
      <Grid item xs={6}>
        <Text label='First Name' value={firstName} setValue={setFirstName} />
      </Grid>
      <Grid item xs={6}>
        <Text label='Last Name' value={lastName} setValue={setLastName} />
      </Grid>
      <Grid item xs={6}>
        <CustomFormControl component='fieldset'>
          <FormLabel color='secondary' component={StyledTypography}>
            Contracts:
          </FormLabel>
          <FormGroup>
            {contractOptions.map((option) => {
              return (
                <FormControlLabel
                  key={option}
                  control={
                    <Checkbox
                      checked={contracts.includes(option)}
                      onChange={(e) => setContracts(toggle(contracts, option))}
                      name={option}
                    />
                  }
                  label={option}
                />
              )
            })}
          </FormGroup>
        </CustomFormControl>
      </Grid>
      <Grid item xs={6}>
        <CustomFormControl component='fieldset'>
          <FormLabel component={StyledTypography}>Billing Status</FormLabel>
          <RadioGroup
            aria-label='gender'
            name='gender1'
            value={billingStatus}
            onChange={(e) => setBillingStatus(e.target.value)}>
            {billingStatuses.map(({ label, value }) => {
              return (
                <FormControlLabel
                  key={value}
                  value={value}
                  control={<Radio />}
                  label={label}
                />
              )
            })}
          </RadioGroup>
        </CustomFormControl>
      </Grid>
    </>
  )
}

export default Form
