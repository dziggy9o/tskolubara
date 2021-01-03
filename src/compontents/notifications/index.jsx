import Container from "@material-ui/core/Container";
import React, {useState, useContext} from "react";
import {Hidden, Paper} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import {autoPlay} from "react-swipeable-views-utils";
import SwipeableViews from "react-swipeable-views";

import {NotificationContext} from "../context";

export const Notifications = () => {
  return (
    <Container maxWidth={'xl'} disableGutters={true} classes={{root: 'notifications'}}>
      <Hidden smDown>
      <Container maxWidth={'lg'} disableGutters={true} classes={{root: 'notifications__space'}}/>
      </Hidden>
      <Container maxWidth={'lg'} disableGutters={true} classes={{root: 'notifications__container'}}>
        <Hidden smDown>
        <Paper elevation={3} classes={{root: 'notifications__container-box'}}>
          <div className={'title'}>ОБАВЕШТЕЊА</div>
          <NotificationSlider/>
        </Paper>
        </Hidden>
        <Hidden mdUp>
          <Paper elevation={3} classes={{root: 'notifications__container-box-mobile'}}>
            <div className={'title'}>ОБАВЕШТЕЊА</div>
            <NotificationSlider/>
          </Paper>
        </Hidden>
      </Container>
    </Container>
  )
}

const AutoPlayNotifications = autoPlay(SwipeableViews);

export const NotificationSlider = () => {
  const [notifications] = useContext(NotificationContext);
  const theme                       = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps                    = notifications.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={'content'}>
      <AutoPlayNotifications
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        interval={10000}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {notifications.map((step, index) => (
          <div key={step.naslov}>
            {Math.abs(activeStep - index) <= 2 ? (
              <SliderImage {...step}/>
            ) : null}
          </div>
        ))}
      </AutoPlayNotifications>
      <SliderControls
        onClickLeft={handleBack}
        onClickRight={handleNext}
        disabledLeft={activeStep === 0}
        disabledRight={activeStep === maxSteps - 1}
      />
    </div>
  );
}

const SliderImage = props => (
  <div className={'content__item'}>
    <h2>{props.naslov}</h2>
    <p dangerouslySetInnerHTML={{__html: props.tekst}}/>

  </div>
)

const SliderControls = props => (
  <div className={'content__controls'}>
    <Button variant={'contained'} classes={{root: 'content__left'}} size="medium" onClick={props.onClickLeft} disabled={props.disabledLeft}>
      <KeyboardArrowLeft fontSize="small"/>
    </Button>
    <Button variant={'contained'} classes={{root: 'content__right'}} size="medium" onClick={props.onClickRight} disabled={props.disabledRight}>
      <KeyboardArrowRight fontSize="small"/>
    </Button>
  </div>
)
