import React, {useState} from "react";
import Container from "@material-ui/core/Container";
import {
  AppBar,
  Backdrop,
  Fade,
  Grid,
  Hidden,
  ListItemIcon,
  ListItemText,
  Modal,
  Paper,
  TextField,
  Toolbar
} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {CalendarToday, ChevronRight, LocationOn, Menu, Phone, Search} from '@material-ui/icons';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {Link, useRouteMatch} from 'react-router-dom'
import {TSLogo} from "../../../styles/svgs";
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
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
  const date   = new Date();
  const months = ["Јануар", "Фебруар", "Март", "Април", "Мај", "Јун", "Јул", "Август", "Септембар", "Октобар", "Новембар", "Децембар"];
  const today  = date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();

  //additional menu
  const classes           = useStyles();
  const [state, setState] = React.useState({
    top  : false,
    right: false,
  });

  //search
  const [openModal, setOpenModal] = useState(true);
  const handleOpen                = () => {
    setOpenModal(true);
  };
  const handleClose               = () => {
    setOpenModal(false);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if(event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({...state, [anchor]: open});
  };

  const list = (anchor) => {
    if(anchor === 'top') {
      return (
        <div
          className={classes.fullList}
          role="presentation"
          // onClick={toggleDrawer(anchor, false)}
          // onKeyDown={toggleDrawer(anchor, false)}
        >
          <div className={'search-modal-content'}>
            <Grid container spacing={3}>
              <Grid item xs={9} md={11}>
                <TextField classes={{root: 'search-field'}} size={'small'} id="outlined-basic" label="Претражи..." variant="outlined" type="search" fullWidth={true}/>
              </Grid>
              <Grid item xs={3} md={1}>
                <IconButton classes={{root: 'search-modal-icon'}} size={'medium'}>
                  <Search/>
                </IconButton>
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

const SearchModal = props => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      classes={{root: 'search-modal'}}
      open={props.open}
      onClose={props.close}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open}>
        <Paper classes={{root: 'search-modal-content'}}>
          <TextField classes={{root: 'search-field'}} size={'small'} id="outlined-basic" label="Претражи..." variant="outlined"/>
          <IconButton classes={{root: 'search-modal-icon'}} size={'medium'}>
            <Search/>
          </IconButton>
        </Paper>
      </Fade>
    </Modal>
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
