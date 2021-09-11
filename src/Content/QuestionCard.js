import React from 'react';
import he from 'he';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';

import Enums from '../Enums'

const useStyles = makeStyles({
  root: {
    marginBottom: '24px',
    marginTop: '24px',
    width: '100%',
  },
  cardRoot: {
    width: '100%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
    marginBottom: 0
  }
});

export default function QuestionCard({
  select,
  selected,
  question
}) {
  const { CONTENT_CARD_BUTTON, CONTENT_CARD_TITLE } = Enums;
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Badge className={classes.root} color="secondary" badgeContent={question.answer_count}>
      <Card className={classes.cardRoot} raised={selected}>
        <CardHeader
          avatar={
            <Avatar alt={question.owner.display_name} src={question.owner.profile_image} />
          }
          title={question.owner.display_name}
          subheader={CONTENT_CARD_TITLE}
        />
        <Divider />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { he.decode(question.title) }
          </Typography>
          <Typography color="textSecondary">
            { question.tags[0] }{ question.tags[1] ? bull : null }{ question.tags[1] ? question.tags[1] : null }
          </Typography>
        </CardContent>
        <Divider />
        <CardActions>
          <Button onClick={() => select(question.question_id)} size="large">{ CONTENT_CARD_BUTTON }</Button>
        </CardActions>
      </Card>
    </Badge>
  );
}