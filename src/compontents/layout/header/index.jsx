import React from "react";
import Container from "@material-ui/core/Container";
import {AppBar, Hidden, Toolbar} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {CalendarToday, LocationOn, Menu, Phone, Search} from '@material-ui/icons';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {Link, useRouteMatch} from 'react-router-dom'
import {TSLogo} from "../../../styles/svgs";
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";

const useStyles = makeStyles({
  list    : {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export const Header = props => {
  //date
  const date              = new Date();
  const months            = ["Јануар", "Фебруар", "Март", "Април", "Мај", "Јун", "Јул", "Август", "Септембар", "Октобар", "Новембар", "Децембар"];
  const today             = date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();

  //additional menu
  const classes           = useStyles();
  const [state, setState] = React.useState({
    top  : false,
    right: false,
  });

  const toggleDrawer      = (anchor, open) => (event) => {
    if(event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({...state, [anchor]: open});
  };

  const list = (anchor) => {
    if (anchor === 'top') {
      return (
        <div
          className={classes.fullList}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                <ListItemText primary={text}/>
              </ListItem>
            ))}
          </List>
        </div>
      )
    }
    else {
      return (
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                <ListItemText primary={text}/>
              </ListItem>
            ))}
          </List>
        </div>
      )
    }};

  return (
    <React.Fragment>
    <Container maxWidth={'xl'} disableGutters={true} classes={{root: 'header'}}>
      <Container maxWidth={'xl'} disableGutters={true} classes={{root: 'top'}}>
        <Container maxWidth={'lg'} disableGutters={true} classes={{root: 'content'}}>
          <ButtonGroup aria-label="outlined primary button group">
            <Button
              size="small"
              startIcon={<LocationOn/>}
            ><Hidden smDown>
              Доситеја Обрадовића бр.6 Лазаревац
            </Hidden>
            </Button>
            <Button
              size="small"
              startIcon={<Phone/>}
            >
              <Hidden smDown>
                011/8123-249
              </Hidden>
            </Button>
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
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
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
  {to: '/obrazovni-profili', label: 'Обрзовни профили'},
  {to: '/ucenici', label: 'Ученици'},
  {to: '/vanredni', label: 'Ванредни'},
  {to: '/galerija', label: 'Галерија'},
  {to: '/onama', label: 'О нама'},
  {to: '/javne-nabavke', label: 'Јавне набавке'}
]
