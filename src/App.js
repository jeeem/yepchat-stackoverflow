import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Header from './Header';
import Nav from './Nav';
import Content from './Content';
import Ad from './Ad';
import Footer from './Footer';

import Enums from './Enums';

import Utils from './Utils';
import Services from './Services';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100%',
  },
  pageContent: {
    display: 'flex',
    flexGrow: 1,
    width: '100%'
  }
}));

const App = () => {
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [selectedTopicLoading, setSelectedTopicLoading] = useState(false)
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState([])
  const [answersLoading, setAnswersLoading] = useState(false)
  const classes = useStyles();

  const currentQuestionId = answers.length ? answers[0].question_id : null;

  const selectTopic = async (topicName, overrideURL) => {
    setSelectedTopic(topicName)
    setAnswers([])
    setSelectedTopicLoading(true)
    const topicResponse = await Services.getTopic(topicName);
    console.log('topicResponse', topicResponse);
    setQuestions(topicResponse);
    setSelectedTopicLoading(false);
    if (!overrideURL) return Utils.router.update(topicName, null);
  }

  const selectQuestion = async (questionId, overrideURL) => {
    setAnswersLoading(true)
    const answersResponse = await Services.getAnswers(questionId);
    console.log('answersResponse', answersResponse);
    setAnswers(answersResponse);
    setAnswersLoading(false);
    if (!overrideURL) return Utils.router.update(selectedTopic, questionId);
  }

  useEffect(() => {
    const getInitialState = async () => {
      let initialState = Utils.parseUrl();
      if (initialState.topic) {
        selectTopic(initialState.topic, true)
      }
      setTimeout(
        () => selectQuestion(initialState.questionId, true),
        2000
      )
    }
    getInitialState();
  }, [])

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.pageContent}>
        <Nav
          selectedTopic={selectedTopic}
          selectTopic={topic => selectTopic(topic)}
          topics={Enums.TOPICS}
        />
        <Content
          currentQuestionId={currentQuestionId}
          loading={selectedTopicLoading}
          selectQuestion={selectQuestion}
          questions={questions}
        />
        <Ad 
          answers={answers}
          loading={answersLoading}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
