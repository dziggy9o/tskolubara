import React from 'react';
import Container from '@material-ui/core/Container';
import * as TS from './compontents';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes} from './routes'
import {TSProvider} from "./compontents/context";
import ScrollToTop from "./routes/scrolltotop";

export const TSKolubaraApp = () => {
  return (
    <TSProvider>
    <Router>
      <ScrollToTop/>
      <Container maxWidth={'xl'} disableGutters={true}>
        <TS.Header/>
        <Routes/>
        <TS.Footer/>
      </Container>
    </Router>
    </TSProvider>
  )
}
