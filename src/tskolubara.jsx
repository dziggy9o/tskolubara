import React from 'react';
import Container from '@material-ui/core/Container';
import * as TS from './compontents';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes} from './routes'
import {TSProvider} from "./compontents/context";

export const TSKolubaraApp = () => {
  return (
    <TSProvider>
    <Router>
      <Container maxWidth={'xl'} disableGutters={true}>
        <TS.Header/>
        <Routes/>
        <TS.Footer/>
      </Container>
    </Router>
    </TSProvider>
  )
}
