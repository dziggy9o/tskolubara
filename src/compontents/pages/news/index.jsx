import React, {useContext} from "react";
import Container from "@material-ui/core/Container";
import {Button, Card, CardActions, CardContent, Chip, Grid, Hidden, Paper, Typography} from "@material-ui/core";
import {Visibility} from "@material-ui/icons";
import {FilesContext, NewsContext} from "../../context";
import {Link} from "react-router-dom";
import Moment from "react-moment";
import {NotificationSlider} from "../../notifications";

export const NewsWidget = props => {
  const [news]  = useContext(NewsContext);
  const [files] = useContext(FilesContext);
  return (
    <Container maxWidth={'xl'} disableGutters={true} classes={{root: 'stats'}}>
      <Container maxWidth={'xl'}>
        {props.showTitle ?
        <Typography classes={{root: 'news-widget-title'}} variant={'h2'} align={'center'}>Актуелно</Typography> : null}
        <Grid container spacing={3}>
          {news.slice(0, props.displayedPosts).map((item, index) => {
            let datumFormatiran = <Moment format={'DD.MM.YYYY.'}>{item.datum}</Moment>
            return (
              <Grid item xs={12} lg={3} md={6}>
                <NewsCard key={index} files={files} datumFormatiran={datumFormatiran} {...item} />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Container>
  )
}

export const NewsCard = props => {
  return (
    <Card className={'news-widget-card'}>
      {props.slika ? props.files
        .filter(file => file.id === props.slika)
        .map((item, index) =>
          <div key={index} className={'news-widget-picture'} style={{backgroundImage: `url(${item.data.thumbnails[7].url})`}}/>
        ) : <div className={'news-widget-picture'} style={{backgroundImage: `url('/images/no_image.jpg')`}}/>}
      <Chip classes={{root: 'news-widget-date'}} label={props.datumFormatiran}/>
      <CardContent classes={{root: 'news-widget-description'}}>
        <Typography variant={'h5'}>{props.naslov}</Typography>
        <Typography variant={'h6'}>{props.opis}</Typography>
      </CardContent>
      <CardActions disableSpacing classes={{root: 'news-widget-actions'}}>
        <Link style={{marginLeft: 'auto'}} to={`/${props.alias}`}>
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

export const NewsSinglePage = props => {
  return (
    <Container maxWidth={'xl'} disableGutters={true} classes={{root: 'news-singlePage'}}>
      {props.slika ? props.files
        .filter(file => file.id === props.slika)
        .map((item, index) =>
          <div key={index} className={'news-singlePage-picture'} style={{backgroundImage: `url(${item.data.thumbnails[7].url})`}}/>
        ) : <div  className={'news-singlePage-picture'} style={{backgroundImage: `url('/images/no_image.jpg')`}}/>}
      <Container maxWidth={'lg'}  classes={{root: 'news-singlePage-content'}}>
        <Typography classes={{root: 'news-singlePage-content-title'}} variant={'h5'}>{props.naslov}</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={9}>
            <Typography classes={{root: 'news-singlePage-content-text'}} dangerouslySetInnerHTML={{__html: props.tekst}}/>
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
