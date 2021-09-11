import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import WarningIcon from '@material-ui/icons/Warning';

import Enums from '../Enums'
import AnswerCard from './AnswerCard';

const useStyles = makeStyles((theme) => ({
  root: {
    borderLeft: '1px solid #e0e0e0',
    borderRight: '1px solid #e0e0e0',
    boxSizing: 'border-box',
    height: 'calc(100vh - 128px)',
    overflowY: 'auto',
    flexGrow: 0,
    padding: '16px',
    position: 'relative',
    width: '33.3%',
  },
  loading: {
    height: '100px',
    left: 'calc(50% - 30px)',
    position: 'absolute',
    top: 'calc(50% - 30px)',
    width: '100px'
  },
  emptyContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    left: '50%',
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  emptyIcon: {
    marginBottom: '24px'
  }
}));

export default function Ad({
  answers,
  loading
}) {
  const classes = useStyles();
  const renderEmpty = () => {
    return (
      <div className={classes.emptyContainer}>
        <WarningIcon className={classes.emptyIcon} fontSize="large" />
      </div>
    );
  }
  
  const renderLoading = () => {
    return (
      <CircularProgress className={classes.loading} size={60}/>
    );
  }

  return (
    <div className={classes.root}>
      {
        loading ? renderLoading() : 
        !answers.length ? renderEmpty() :
        answers.map(answer => {
          return (
            <AnswerCard
              key={answer.answer_id} 
              answer={answer}
            />
          )
        })
      }
    </div>
  );
}