import React, {useContext, useState} from "react";
import Container from "@material-ui/core/Container";
import {AppBar, Grid, Hidden, ListItemIcon, ListItemText, TextField, Toolbar} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {CalendarToday, ChevronRight, Clear, LocationOn, Menu, Phone, Search} from '@material-ui/icons';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {Link, useRouteMatch} from 'react-router-dom'
import {TSLogo} from "../../../styles/svgs";
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Drawer from "@material-ui/core/Drawer";
import {NewsContext} from "../../context";
import {convertLatinToCirilic, routeFixer} from "../../search/localization-convertor";

const useStyles = makeStyles({
  list    : {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

class DeleteIcon extends React.Component {
  render() {
    return null;
  }
}

export const Header = props => {
  //date
  const date   = new Date();
  const months = ["Јануар", "Фебруар", "Март", "Април", "Мај", "Јун", "Јул", "Август", "Септембар", "Октобар", "Новембар", "Децембар"];
  const today  = date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();

  //additional menu
  const classes                       = useStyles();
  const [state, setState]             = React.useState({
    top  : false,
    right: false,
  });
  const [news]                        = useContext(NewsContext);
  const [searchInput, setSearchInput] = useState('');

  const toggleDrawer = (anchor, open) => (event) => {
    if(event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({...state, [anchor]: open});
  };

  const list = (anchor) => {
    let convertedSearchInput = convertLatinToCirilic(searchInput);
    if(anchor === 'top') {
      return (
        <div
          className={classes.fullList}
          role="presentation"
          // onClick={toggleDrawer(anchor, false)}
          // onKeyDown={toggleDrawer(anchor, false)}
        >
          <div className={'search-modal-content'} style={{height: `${searchInput.length > 3 ? '100vh' : '145px'}`}}>
            <Grid container spacing={3}>
              <Grid item xs={9} md={11}>
                <TextField
                  onChange={event => setSearchInput(convertLatinToCirilic(event.target.value))}
                  classes={{root: 'search-field'}}
                  size={'small'}
                  id="outlined-basic"
                  label="Претражи..."
                  variant="outlined"
                  type="search"
                  fullWidth={true}
                  value={searchInput}
                />
              </Grid>
              <Grid item xs={2} md={1}>
                <IconButton onClick={toggleDrawer(anchor, false)} classes={{root: 'search-modal-icon'}} size={'medium'}>
                  <Clear/>
                </IconButton>
              </Grid>
              <Grid item xs={12}>
                <List component="nav">
                  {news.filter(x => (x.naslov.toLowerCase().match(searchInput.toLowerCase()))).map((item, i) => {
                    return (
                      <Link key={i} to={`/${routeFixer(item.alias)}`}>
                        <ListItem onClick={toggleDrawer(anchor, false)} button classes={{root: 'whiteColor'}}>
                          <ListItemIcon classes={{root: 'whiteColor'}}>
                            <ChevronRight/>
                          </ListItemIcon>
                          <ListItemText primary={item.naslov}/>
                        </ListItem>
                      </Link>
                    )
                  })}
                </List>
              </Grid>
            </Grid>
          </div>
        </div>
      )
    } else {
      return (
        <div
          className={'mobile-menu'}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <Link to={'/'}>
              <ListItem button classes={{root: 'whiteColor'}}>
                <ListItemIcon classes={{root: 'whiteColor'}}>
                  <ChevronRight/>
                </ListItemIcon>
                <ListItemText primary={'Почетна'}/>
              </ListItem>
            </Link>
            {MenuList.map((item, index) => {
              return (
                <Link key={index} {...item}>
                  <ListItem button classes={{root: 'whiteColor'}}>
                    <ListItemIcon classes={{root: 'whiteColor'}}>
                      <ChevronRight/>
                    </ListItemIcon>
                    <ListItemText primary={item.label}/>
                  </ListItem>
                </Link>
              )
            })}
          </List>
        </div>
      )
    }
  };

  return (
    <React.Fragment>
      <Container maxWidth={'xl'} disableGutters={true} classes={{root: 'header'}}>
        <Container maxWidth={'xl'} disableGutters={true} classes={{root: 'top'}}>
          <Container maxWidth={'lg'} disableGutters={true} classes={{root: 'content'}}>
            <ButtonGroup aria-label="outlined primary button group">
              <a href={'https://goo.gl/maps/D74WkZwaxDupgUWp6'} target={'new'}
              >
                <Button
                  size="small"
                  startIcon={<LocationOn/>}
                ><Hidden smDown>
                  Доситеја Обрадовића бр.6 Лазаревац
                </Hidden>
                </Button>
              </a>
              <a href={'tel:+381118123249'}>
                <Button
                  size="small"
                  startIcon={<Phone/>}
                >
                  <Hidden smDown>
                    011/8123-249
                  </Hidden>
                </Button>
              </a>
            </ButtonGroup>
            <ButtonGroup style={{marginLeft: 'auto'}} aria-label="outlined primary button group">
              <Button
                size="small"
                startIcon={<CalendarToday/>}
              >
                {today}
              </Button>
            </ButtonGroup>
          </Container>
        </Container>
        <Container maxWidth={'xl'} disableGutters={true} classes={{root: 'menu'}}>
          <Container maxWidth='lg' disableGutters={true} classes={{root: 'content'}}>
            <AppBar position='static' classes={{root: 'layout'}}>
              <Toolbar>
                <Link to={'/'}>
                  <TSLogo/>
                </Link>
                <Hidden mdDown>
                  <ButtonGroup style={{
                    marginLeft : 'auto',
                    marginRight: '10px'
                  }} aria-label="outlined primary button group">
                    {MenuList.map((item, index) => {
                      return <MenuItem key={index} {...item}/>
                    })}
                  </ButtonGroup>
                </Hidden>
                <Hidden lgUp>
                  <IconButton onClick={toggleDrawer('right', true)} classes={{root: 'header-menu-icon'}}
                  >
                    <Menu/>
                  </IconButton>
                </Hidden>
                <IconButton onClick={toggleDrawer('top', true)} classes={{root: 'search-menu-icon'}}
                >
                  <Search/>
                </IconButton>
              </Toolbar>
            </AppBar>
          </Container>
        </Container>
      </Container>
      {['right', 'top'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer classes={{root: 'drawer-container'}} anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}

const MenuItem = ({label, to, AOWE}) => {
  let match = useRouteMatch({
    path : to,
    exact: AOWE
  })
  return (
    <Link to={to}>
      <Button variant={'outlined'} classes={{root: 'menu-item'}} className={match ? 'active' : ''}>
        {label}
      </Button>
    </Link>
  )
}


export const MenuList = [
  {to: '/aktuelno', label: 'Актуелно'},
  {to: '/obrazovni-profili', label: 'Обaрзовни профили'},
  {to: '/ucenici', label: 'Ученици'},
  {
    to: '/vanredni', label: 'Ванредни', list: [
      {to: '/proba', label: 'test2'},
      {to: '/proba', label: 'test'},
    ]
  },
  {to: '/galerija', label: 'Галерија'},
  {to: '/onama', label: 'О нама'},
  {to: '/javne-nabavke', label: 'Јавне набавке'}
]
