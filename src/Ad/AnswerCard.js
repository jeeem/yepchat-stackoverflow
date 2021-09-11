import React from 'react';
import he from 'he';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';

import Enums from '../Enums'

const useStyles = makeStyles({
  root: {
    marginBottom: '24px',
    marginTop: '24px',
    width: '100%',
  },
  answerBlock: {
    overflow: 'auto'
  }
});

export default function AnswerCard({
  answer
}) {
  const { ANSWER_CARD_TITLE } = Enums;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar alt={answer.owner.display_name} src={answer.owner.profile_image} />
        }
        title={answer.owner.display_name}
        subheader={ANSWER_CARD_TITLE}
      />
      <Divider />
      <CardContent>
        <div className={classes.answerBlock} dangerouslySetInnerHTML={{ __html: he.decode(answer.body) }} />
      </CardContent>
    </Card>
  );
}