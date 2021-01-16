import React, {useContext} from "react";
import {FilesContext, StudentsContext} from "../context";
import Container from "@material-ui/core/Container";
import {Button, Card, CardActions, CardContent, Grid, Hidden, Paper, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import {routeFixer} from "../search/localization-convertor";
import {Visibility} from "@material-ui/icons";
import {NotificationSlider} from "../notifications";

export const StudentsWidget = props => {
  const [students] = useContext(StudentsContext);
  const [files]    = useContext(FilesContext);
  return (
    <Container maxWidth={'xl'} disableGutters={true} classes={{root: 'stats'}}>
      <Container maxWidth={'xl'}>
        <Grid container spacing={3}>
          {students?.map((item, index) => {
            return (
              <Grid item xs={12} lg={3} md={6}>
                <StudentCard key={index} files={files}  {...item} />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Container>
  )
}

export const StudentCard = props => {
  return (
    <Card className={'students-widget-card'}>
      {props.slika ? props.files
        .filter(file => file.id === props.slika)
        .map((item, index) =>
          <div key={index} className={'students-widget-picture'} style={{backgroundImage: `url(${item.data.thumbnails[7].url})`}}/>
        ) : <div className={'students-widget-picture'} style={{backgroundImage: `url('/images/no_image.jpg')`}}/>}
      <CardContent classes={{root: 'students-widget-description'}}>
        <Typography variant={'h5'}>{props.naslov}</Typography>
      </CardContent>
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

export const StudentSinglePage = props => {
  return (
    <Container maxWidth={'xl'} disableGutters={true} classes={{root: 'students-singlePage'}}>
      <div className={'students-singlePage-picture'} style={{backgroundImage: `url('/images/no_image.jpg')`}}/>
      <Container maxWidth={'lg'} classes={{root: 'students-singlePage-content'}}>
        <Typography classes={{root: 'students-singlePage-content-title'}} variant={'h5'}>{props.naslov}</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={9}>
            <Typography classes={{root: 'students-singlePage-content-text'}} dangerouslySetInnerHTML={{__html: props.tekst}}/>
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
