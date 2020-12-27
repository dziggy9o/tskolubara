import React from 'react';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator
} from '@material-ui/lab';
import {Paper, Typography, Container} from '@material-ui/core';

export const JavnaNabavka = () => {

  return (
    <Container maxWidth={'xl'} disableGutters={true} classes={{root: 'javne-nabavke'}}>
      <Container maxWidth={'lg'}>
        <Timeline align="left">

          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="h5" color="textSecondary">
                Набавка добара – електрична енергија
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot classes={{root: 'javne-nabavke-dot'}}>
                2020
              </TimelineDot>
              <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} classes={{root: 'javne-nabavke-content'}}>
                <Typography>Рок за подношење понуда је до 16.11.2020. године до 12:00 часова. Благовременим ће се
                  сматрати понуде које пристигну код наручиоца најкасније до наведеног датума и часа. Понуде које
                  пристигну по истеку овог рока сматраће се неблаговременим и неће бити разматране.</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>

        </Timeline>
      </Container>
    </Container>
  );
}
