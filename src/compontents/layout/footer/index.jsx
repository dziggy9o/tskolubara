import Container from "@material-ui/core/Container";
import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  TextField,
  Hidden
} from "@material-ui/core";
import {LocationOn, Phone, Mail, ChevronRight, Send} from '@material-ui/icons'
import Button from "@material-ui/core/Button";
import {MenuList} from "../header";
import {Link} from "react-router-dom";

export const Footer = props => {
  return (
    <Container maxWidth={'xl'} disableGutters={true} classes={{root: 'footer'}}>
      <Container maxWidth={'xl'} disableGutters={false} classes={{root: 'top'}}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper classes={{root: 'address'}}>
              <Typography variant={'h5'} classes={{root: 'footer-title'}}>
                Информације
              </Typography>
              <List component="nav" >
                <a href={'https://goo.gl/maps/D74WkZwaxDupgUWp6'} target={'new'}>
                <ListItem button classes={{root: 'whiteColor'}}>
                  <ListItemIcon classes={{root: 'whiteColor'}}>
                    <LocationOn/>
                  </ListItemIcon>
                  <ListItemText primary="Доситеја Обрадовића бр.6 Лазаревац 11550"/>
                </ListItem>
                </a>
                <a href={'tel:+381118123249'}>
                <ListItem button classes={{root: 'whiteColor'}}>
                  <ListItemIcon classes={{root: 'whiteColor'}}>
                    <Phone/>
                  </ListItemIcon>
                  <ListItemText primary="011/8123-249"/>
                </ListItem>
                </a>
                <a href={'mailto:tskolubara@gmail.com'}>
                <ListItem button classes={{root: 'whiteColor'}}>
                  <ListItemIcon classes={{root: 'whiteColor'}}>
                    <Mail/>
                  </ListItemIcon>
                  <ListItemText primary="tskolubara@gmail.com"/>
                </ListItem>
                </a>
              </List>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2851.3836640815935!2d20.259645315715655!3d44.38424541286798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a01e35569a7b9%3A0x2c857cc908c334b6!2z0KLQtdGF0L3QuNGH0LrQsCDRiNC60L7Qu9CwIOKAntCa0L7Qu9GD0LHQsNGA0LDigJ0!5e0!3m2!1sen!2srs!4v1608498474345!5m2!1sen!2srs" width={'100%'} height="200" title={'TS Kolubara'} frameBorder="0" style={{border: '0'}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper classes={{root: 'quicklinks'}}>
              <Typography variant={'h5'} classes={{root: 'footer-title'}}>
                Брзе везе
              </Typography>
              <List component="nav" >
                {MenuList.map((item, i) => {
                  return (
                    <Link key={i} to={item.to}>
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
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper classes={{root: 'contact'}}>
              <Typography variant={'h5'} classes={{root: 'footer-title'}}>
                Контакт
              </Typography>
              <form noValidate autoComplete="off">
                <TextField classes={{root: 'contact-field'}} size={'small'} id="outlined-basic" label="Име" variant="outlined" fullWidth={true}/>
                <TextField classes={{root: 'contact-field'}} size={'small'} id="outlined-basic" label="Презиме" variant="outlined" fullWidth={true}/>
                <TextField classes={{root: 'contact-field'}} size={'small'} id="outlined-basic" label="Адреса електронске поште" variant="outlined" fullWidth={true}/>
                <TextField classes={{root: 'contact-field'}} size={'small'} id="outlined-basic" label="Порука" variant="outlined" fullWidth={true} multiline rows={4}/>
              </form>
              <Button classes={{root: 'send-button'}}
                variant={'contained'}
                startIcon={<Send/>}
              >
                <Hidden smDown>
                  ПОШАЉИ
                </Hidden>
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth={'lg'} disableGutters={true} classes={{root: 'bottom'}}>
        <Typography classes={{root: 'copyright'}}>
          Сва права задржана &copy; {new Date().getFullYear()} - Сајт
          развио: <a target='_blank' rel="noopener noreferrer" href="http://citymarketingservice.rs/">
          <div className='cms'/>
        </a>
        </Typography>
      </Container>
    </Container>
  )
}
