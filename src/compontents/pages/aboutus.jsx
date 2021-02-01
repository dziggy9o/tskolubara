import Container from "@material-ui/core/Container";
import {Grid, Hidden, Paper, Typography} from "@material-ui/core";
import {NotificationSlider} from "../notifications";
import React from "react";

export const AboutUs = props => {
  return (
    <Container maxWidth={'xl'} disableGutters={true} classes={{root: 'students-singlePage'}}>
      <Container maxWidth={'lg'} classes={{root: 'students-singlePage-content'}}>
        <Typography classes={{root: 'students-singlePage-content-title'}} variant={'h5'}>{'О нама'}</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={9}>
            <Typography classes={{root: 'students-singlePage-content-text'}} style={{textAlign: 'justify'}}>
              <br/>
              Техничка школа „Колубара“ у Лазаревцу је средња стручна школа која је током свог постојања често мењала
              назив, јер јој корени датирају још из 1948/49. године када је у Вреоцима постојала као Школа за ученике у
              привреди.
              Када се преместила у Лазаревац, добила је и нов назив: Школа за квалификоване раднике.
              <br/>
              <br/>
              Године 1958/59. школа почиње са радом као ТШ „Станислав Сремчевић Црни“.
              Од 1978/79.године, после реформе школства, школа прераста у Образовни центар за усмерено образовање
              „Станислав Сремчевић Црни“
              Као Образовни центар за усмерено образовање „Станислав Сремчевић Црни“ са својим радом наставља до
              школске 1990/91.године када је одлуком Скупштине Републике Србије и Актом о верификацији раздвојена на
              две школе: Техничку школу „Колубара“ и Гимназију Лазаревац.
              <br/>
              <br/>
              Школа је током протеклих година мењала подручја рада и занимања у оквиру њих у зависности од потреба
              привреде и рударског басена „Колубара“ .
              Резултатима свога рада, развојем и мењањем паралелно са ЈПРБ „Колубара“ и друштвом у целини, школа је
              нашла своје место и израсла у васпитно-образовну институцију која има услове да успешно закорачи у
              будућност.
            </Typography>
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
