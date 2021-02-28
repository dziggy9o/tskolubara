import React, {forwardRef, useContext, useState} from 'react';
import {useTheme} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import {Card, CardActionArea, CardContent, Container, Grid, MobileStepper} from "@material-ui/core";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import {FilesContext, GalleryContext, GalleryFilesContext} from "../../context";


const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Gallery = () => {
  const [files]         = useContext(FilesContext);
  const [gallery]       = useContext(GalleryContext);
  const [gallery_files] = useContext(GalleryFilesContext);

  return (
    <Container maxWidth={'xl'} disableGutters={true} classes={{root: 'gallery'}}>
      <Container maxWidth={'xl'}>
        <Grid container spacing={3}>
          {gallery.map(item => {
            let filteredGalleryFiles = gallery_files.filter(gf => gf.galerija_id === item.id)
            let filteredFiles        = filteredGalleryFiles.map(fgf => files.filter(file => fgf.directus_files_id === file.id));
            let finalFiles           = [];
            let coverPic             = files.filter(cover => cover.id === item.cover);
            filteredFiles.forEach(element => finalFiles.push(Object.assign({}, ...element)));
            return (
              <Grid item xs={12} lg={3} md={6}>
                <GalleryItem {...item} galleryList={finalFiles} coverPic={coverPic[0].data.thumbnails[7].url}/>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Container>
  )
}

export const GalleryItem = props => {
  const theme                       = useTheme();
  const [open, setOpen]             = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps                    = props.galleryList.length;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      <Card classes={{root: 'gallery-card'}}>
        <CardActionArea onClick={handleClickOpen}>
          <div className={'gallery-card-img'} style={{backgroundImage: `url(${props.coverPic})`}}/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3" classes={{root: 'gallery-title'}}>
              {props.naziv}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar classes={{root: 'gallery-header'}}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon/>
            </IconButton>
            <Typography variant="h6">
              {props.naziv}
            </Typography>
          </Toolbar>
        </AppBar>
        <div>
          <div className={'gallery-img-container'} style={{backgroundImage: `url('/images/no_image.jpg')`}}>
            <img src={props.galleryList[activeStep].data.thumbnails[7].url} alt={'TS Kolubara'}/>
          </div>
          <MobileStepper
            classes={{root: 'gallery-footer'}}
            steps={maxSteps}
            variant="text"
            activeStep={activeStep}
            nextButton={
              <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                Следећа
                {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
                Претходна
              </Button>
            }
          />
        </div>
      </Dialog>
    </div>
  );
}


