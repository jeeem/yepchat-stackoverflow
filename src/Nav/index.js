import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: 'border-box',
    height: 'calc(100vh - 128px)',
    overflowY: 'auto',
    paddingTop: '24px',
    width: '33.3%'
  },
  topicsTitle: {
    marginLeft: '16px'
  }
}));

export default function Nav({
  loading,
  topics,
  selectedTopic,
  selectTopic
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.topicsTitle} variant="h3" gutterBottom>Topics</Typography>
      <List>
        <Divider />
        {
          topics.map(topic => {
            return (
              <React.Fragment key={topic}>
                <ListItem 
                  button 
                  onClick={() => selectTopic(topic)}
                  selected={selectedTopic === topic}
                >
                  <ListItemText primary={topic} />
                </ListItem>
                <Divider />
              </React.Fragment>
            )
          })
        }
      </List>
    </div>
  );
}