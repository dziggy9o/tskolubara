import React, {useContext} from 'react';
import Container from "@material-ui/core/Container";
import {Button, Card, CardActions, CardContent, Chip, Grid, Hidden, Paper, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import {routeFixer} from "../search/localization-convertor";
import {Visibility} from "@material-ui/icons";
import {ExtraordinaryContext, FilesContext} from "../context";
import {NotificationSlider} from "../notifications";

export const ExtraordinaryWidget = props => {
  const [extraordinary] = useContext(ExtraordinaryContext);
  const [files]         = useContext(FilesContext);
  return (
    <Container maxWidth={'xl'} disableGutters={true} classes={{root: 'stats'}}>
      <Container maxWidth={'xl'}>
        <Grid container spacing={3}>
          {extraordinary.map((item, index) => {
            return (
              <Grid item xs={12} lg={4}>
                <ExtraordinaryCard key={index} files={files} {...item}/>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Container>
  )
}

export const ExtraordinaryCard = props => {
  return (
    <Card className={'extord-widget-card'}>
      <CardContent classes={{root: 'extord-widget-description'}}>
        <Typography variant={'h5'}>{props.naslov}</Typography>
        <Typography variant={'h6'}>{props.opis}</Typography>
      </CardContent>
      {props.slika ? props.files
        .filter(file => file.id === props.slika)
        .map((item, index) =>
          <div key={index} className={'extord-widget-picture'} style={{backgroundImage: `url(${item.data.thumbnails[7].url})`}}/>
        ) : <div className={'extord-widget-picture'} style={{backgroundImage: `url('/images/no_image.jpg')`}}/>}
      <CardActions disableSpacing classes={{root: 'news-widget-actions'}}>
        <Link style={{marginLeft: 'auto'}} to={`/${routeFixer(props.naslov)}`}>
          <Button
            classes={{root: 'education-profiles-visibility'}}
            aria-label="show more"
          ><span className={'label-moreinfo'}>ВИШЕ ИНФОРМАЦИЈА</span>
            <Visibility/>
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export const ExtraordinarySinglePage = props => {
  return (
    <Container maxWidth={'xl'} disableGutters={true} classes={{root: 'news-singlePage'}}>
      {props.slika ? props.files
        .filter(file => file.id === props.slika)
        .map((item, index) =>
          <div key={index} className={'extord-singlePage-picture'} style={{backgroundImage: `url(${item.data.thumbnails[7].url})`}}/>
        ) : <div className={'extord-singlePage-picture'} style={{backgroundImage: `url('/images/no_image.jpg')`}}/>}
      <Container maxWidth={'lg'} classes={{root: 'extord-singlePage-content'}}>
        <Typography classes={{root: 'extord-singlePage-content-title'}} variant={'h5'}>{props.naslov}</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={9}>
            <Typography classes={{root: 'extord-singlePage-content-text'}} dangerouslySetInnerHTML={{__html: props.tekst}}/>
          </Grid>
          <Hidden smDown>
            <Grid item md={3}>
              <Paper elevation={3} classes={{root: 'news-singlePage-notifications'}}>
                <div className={'title'}>ОБАВЕШТЕЊА</div>
                <NotificationSlider/>
              </Paper>
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </Container>
  )
}
