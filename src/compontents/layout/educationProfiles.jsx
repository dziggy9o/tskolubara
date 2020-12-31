import React from 'react';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText, Typography
} from '@material-ui/core';
import {BarChart, ChevronRight, Settings, SettingsInputAntenna, Visibility, Wallpaper} from '@material-ui/icons'
import Container from "@material-ui/core/Container";
import {Link} from "react-router-dom";


export const EducationProfileCard = props => {
  return (
    <Card className={'education-profiles'}>
      <CardHeader
        classes={{root: 'education-profiles-header'}}
        avatar={
          <Avatar aria-label="recipe" className={'education-profiles-avatar'}>
            <IconButton aria-label="settings">
              {props.icon}
            </IconButton>
          </Avatar>
        }
        title={props.name}
      />
      <div
        className={'education-profiles-picture'}
        style={{backgroundImage: `url(${props.background})`}}
      />
      <CardContent classes={{root: 'education-profiles-description'}}>
        <List component="nav" aria-label="main mailbox folders">
          {props.list.map((item, index) => {
            return (
              <Link key={index}>
                <ListItem button classes={{root: 'whiteColor'}}>
                  <ListItemIcon classes={{root: 'whiteColor'}}>
                    <ChevronRight/>
                  </ListItemIcon>
                  <ListItemText primary={item.name}/>
                </ListItem>
              </Link>
            )
          })}
        </List>
      </CardContent>
      <CardActions disableSpacing classes={{root: 'education-profiles-actions'}}>
        <IconButton
          classes={{root: 'education-profiles-visibility'}}
          aria-label="show more"
        ><span className={'label-moreinfo'}>ВИШЕ ИНФОРМАЦИЈА</span>

          <Visibility/>
        </IconButton>
      </CardActions>
    </Card>
  );
}

export const EducationProfileView = () => (
  <Container maxWidth={'xl'} disableGutters={true} classes={{root: 'stats'}}>
    <Container maxWidth={'xl'}>
      <Typography classes={{root: 'education-profiles-title'}} variant={'h2'} align={'center'}>Образовни профили</Typography>
      <Grid container spacing={3}>
        {EducationProfileList.map((item, index) => {
          return (
            <Grid item xs={12} lg={3} md={6}>
              <EducationProfileCard key={index} {...item} />
            </Grid>
          )
        })}
      </Grid>
    </Container>
  </Container>
)

const EducationProfileList = [
  {
    name      : 'Геологија, рударство и металургија',
    background: '/images/obrazovni-profili/rudarstvo.jpg',
    icon      : <Wallpaper/>,
    list      : [
      {name: 'Руковалац механизацијом у површинској експлоатацији'},
      {name: 'Рударски техничар'},
    ]
  },
  {
    name      : 'Машинство и обрада метала',
    background: '/images/obrazovni-profili/masinskaobradametala.jpg',
    icon      : <Settings/>,
    list      : [
      {name: 'Машински техничар за репаратуру'},
      {name: 'Техничар за компјутерско управљање (ЦНЦ) машина'},
    ]
  },
  {
    name      : 'Економија, право и администрација',
    background: '/images/obrazovni-profili/ekonomija.jpg',
    icon      : <BarChart/>,
    list      : [
      {name: 'Економски техничар'},
      {name: 'Финансијски техничар'},
    ]
  },
  {
    name      : 'Електротехника',
    background: '/images/obrazovni-profili/elektronika.jpg',
    icon      : <SettingsInputAntenna/>,
    list      : [
      {name: 'Електромонтер мрежа и постројења'},
      {name: 'Аутоелектричар'},
      {name: 'Електротехничар рачунара'},
      {name: 'Електротехничар процесног управљања'},
    ]
  },
]

