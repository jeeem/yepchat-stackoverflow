const getAnswers = async questionId => {
  return await fetch(`https://api.stackexchange.com/2.3/questions/${questionId}/answers?order=desc&sort=activity&site=stackoverflow&filter=withbody`)
    .then(data => data.json())
    .then(data => data.items)
}
export default getAnswers;