const m1 = require('./module1');


function getNews(url) {
  console.log(`发送请求,请求地址:` + url);
  return 'newsData'
}


function getComments(url) {
  console.log(`发送请求,请求地址:` + url);
  return 'commentsData'
}


const newsData = getNews(m1.newsUrl);
const commentsData = getComments(m1.commentsUrl);

module.exports = {
  newsData,
  commentsData
}