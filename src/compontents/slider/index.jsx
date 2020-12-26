import React, {useContext, useState} from 'react';
import {useTheme} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';

import { SliderListContext, FilesContext} from "../context";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const Slider = () => {
  const [files] = useContext(FilesContext);
  const [sliderList] = useContext(SliderListContext);
  const theme                       = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps                    = sliderList.length;

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
    <div className={'slider-frontpage'}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        interval={10000}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {sliderList.map((step, index) => (
          <div key={step.id}>
            {Math.abs(activeStep - index) <= 2 ?
                files
                  .filter(file => file.id === step.directus_files_id)
                  .map(file => {
                    return (
                      <SliderImage imgPath={file.data.full_url}/>
                    )
                  }
                )
             : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
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
  <div className={'slider-frontpage__item'} style={{backgroundImage: `url(${props.imgPath})`}}/>
)

const SliderControls = props => (
  <div className={'slider-frontpage__controls'}>
    <Button
      variant={'contained'}
      classes={{root: 'slider-frontpage__left'}}
      onClick={props.onClickLeft}
      disabled={props.disabledLeft}>
      <KeyboardArrowLeft fontSize="large"/>
    </Button>
    <Button
      variant={'contained'}
      classes={{root: 'slider-frontpage__right'}}
      onClick={props.onClickRight}
      disabled={props.disabledRight}>
      <KeyboardArrowRight fontSize="large"/>
    </Button>
  </div>
)
