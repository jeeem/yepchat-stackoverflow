const baseURL = 'http://localhost:3000/';
const router = {
  update: (topicName, questionId) => {
    let nextURL = `${baseURL}${topicName ? topicName : ''}${questionId ? `/${questionId}` : ''}`
    const nextTitle = 'React App';
    const nextState = { foo: 'bar' };
  
    // This will create a new entry in the browser's history, without reloading
    window.history.pushState(nextState, nextTitle, nextURL);
  }
}
export default router;