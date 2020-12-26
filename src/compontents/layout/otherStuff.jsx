import Container from "@material-ui/core/Container";
import React from "react";
import {Grid, Paper, Typography} from "@material-ui/core";
import AnimatedNumber from "animated-number-react";

const statsList = [
  {number: 4, label: 'Подручија рада'},
  {number: 11, label: 'образовних профила'},
  {number: 37, label: 'образовних профила'},
  {number: 1006, label: 'ученика'},
]

export const Stats = props => {
  const fromatValue = (value) => value.toFixed(0);
  return (
    <Container maxWidth={'xl'} disableGutters={true} classes={{root: 'stats'}}>
      <Container maxWidth={'xl'}>
        <Typography classes={{root: 'stats-title'}} variant={'h2'} align={'center'}>Зашто баш ми?</Typography>
        <Grid container spacing={3}>
          {statsList.map((item, i) => {
            return (
              <Grid item xs={6} md={3} key={i}>
                <Paper classes={{root: 'stats-item'}}>
                  <AnimatedNumber value={item.number} formatValue={fromatValue}/>
                  <div className={'text'}>{item.label}</div>
                </Paper>
              </Grid>)
          })}
        </Grid>
      </Container>
    </Container>
  )
}
