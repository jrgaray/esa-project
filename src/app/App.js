import React, { useState } from 'react'
import {
  Button,
  Container as MaterialContainer,
  Card,
  Grid,
  CardContent,
  CardActions,
} from '@material-ui/core'
import Form from 'components/Form'
import Header from 'components/Header'
import styled from 'styled-components'

const Container = styled(MaterialContainer)`
  && {
    margin-top: 10vh;
  }
`

const App = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [contracts, setContracts] = useState([])
  const [billingStatus, setBillingStatus] = useState('')
  const resetForm = () => {
    setFirstName('')
    setLastName('')
    setContracts([])
    setBillingStatus('')
  }

  return (
    <>
      <Container fixed>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Header title={`Goose Form`} />
              </Grid>
              <Form
                firstName={firstName}
                lastName={lastName}
                setLastName={setLastName}
                setFirstName={setFirstName}
                contracts={contracts}
                setContracts={setContracts}
                billingStatus={billingStatus}
                setBillingStatus={setBillingStatus}
              />
            </Grid>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => {
                alert(
                  `You successfully submitted the following:\nFirst Name: ${firstName}\nLast Name: ${lastName}\nContracts: ${contracts}\nStatus: ${billingStatus}`
                )
                resetForm()
              }}
              color='primary'
              variant='contained'>
              Submit
            </Button>
          </CardActions>
        </Card>
      </Container>
    </>
  )
}

export default App
