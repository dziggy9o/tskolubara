import React, {useContext} from 'react';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator
} from '@material-ui/lab';
import {Container, Hidden, ListItem, ListItemIcon, ListItemText, Paper, Typography} from '@material-ui/core';
import {FilesContext, JavneNabavkeContext, JavneNabavkeFilesContext} from '../context'
import {FileCopy} from "@material-ui/icons";

export const JavnaNabavka = () => {
  const [files]             = useContext(FilesContext);
  const [javneNabavke]      = useContext(JavneNabavkeContext);
  const [javneNabavkeFiles] = useContext(JavneNabavkeFilesContext);

  return (
    <Container maxWidth={'xl'} disableGutters={true} classes={{root: 'javne-nabavke'}}>
      <Container maxWidth={'lg'}>
        <Timeline align="left">
          {javneNabavke
            .sort((a, b) => b.godina - a.godina)
            .map(item => {
              return (
                <TimelineItem key={item.id}>
                  <TimelineOppositeContent>
                    <Hidden smDown>
                      <Typography variant="h5" color="textSecondary">
                        {item.naziv}
                      </Typography>
                    </Hidden>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot classes={{root: 'javne-nabavke-dot'}}>
                      {item.godina}
                    </TimelineDot>
                    <TimelineConnector/>
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper elevation={3} classes={{root: 'javne-nabavke-content'}}>
                      <Hidden mdUp>
                      <Typography classes={{root: 'javne-nabavke-title-header'}}>{item.naziv}</Typography>
                      </Hidden>
                      <Typography dangerouslySetInnerHTML={{__html: item.tekst}}/>
                      {javneNabavkeFiles
                        .filter(jnf => jnf.javne_nabavke_id === item.id)
                        .map(jnFile => {
                          return (
                            <React.Fragment>
                              {files
                                .filter(file => jnFile.directus_files_id === file.id)
                                .map(file => {
                                  return (
                                    <a href={file.data.full_url} target={'new'} download>
                                      <ListItem button classes={{root: 'whiteColor'}}>
                                        <ListItemIcon classes={{root: 'whiteColor'}}>
                                          <FileCopy/>
                                        </ListItemIcon>
                                        <ListItemText primary={file.title}/>
                                      </ListItem>
                                    </a>
                                  )
                                })}
                            </React.Fragment>
                          )
                        })}
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              )
            })}
            </Timeline>
            </Container>
            </Container>
            );
          }
