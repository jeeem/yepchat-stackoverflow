const getTopic = async topicName => {
  return await fetch(`https://api.stackexchange.com/2.3/search?order=desc&sort=activity&tagged=${topicName}&site=stackoverflow`)
    .then(data => data.json())
    .then(data => data.items)
    .then(items => items.filter(item => item.answer_count > 0))
}
export default getTopic;