import React from "react";
import Container from "@material-ui/core/Container";
import {Grid, Typography} from "@material-ui/core";

export const MOWidget = props => {
  return (
    <Container maxWidth={'xl'} disableGutters={true} classes={{root: 'stats'}}>
      <Container maxWidth={'xl'}>
        <Typography classes={{root: 'news-widget-title'}} variant={'h2'} align={'center'}>Министарство одбране и Војска Србије</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <iframe width="100%" height="400" src="https://www.youtube-nocookie.com/embed/WKEd8R9q3Qc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </Grid>
          <Grid item xs={12} lg={6}>
            <iframe width="100%" height="400" src="https://www.youtube-nocookie.com/embed/PZI8iwUIT7I" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}
