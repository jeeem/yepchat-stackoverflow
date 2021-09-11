const parseUrl = () => {
  const urlToParse = new URL(window.location.href);
  const path = urlToParse.pathname
  const splitPath = path.split('/');
  return {
    topic: splitPath[1],
    questionId: splitPath[2]
  };
};

export default parseUrl;