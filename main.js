document.getElementById('time').innerHTML = new Date().toLocaleString()

function pink() {
  document.body.style.backgroundColor = 'pink'
}
function yello() {
  document.body.style.backgroundColor = 'yello'
}
function lightblue() {
  document.body.style.backgroundColor = 'lightblue'
}
function reset() {
  document.body.style.backgroundColor = 'pink'
}

function showhtml() {
  document.getElementById('fig').sry = 'img/html5.png'
  document.getElementById('desc').innerHTML =
    'HTML은 웹문서를 작성하는데 사용하는 마크업 언어이다'
}

function showcss() {
  document.getElementById('fig').sry = 'img/css3.png'
  document.getElementById('desc').innerHTML =
    'css은 웹문서의 스타일을 지정하는데 사용하는 언어이다'
}

function showjs() {
  document.getElementById('fig').sry = 'img/javascript.png'
  document.getElementById('desc').innerHTML =
    'javascript는 웹을 위한 프로그래밍 언어이며 웹문서에서 동작을 실행할 수 있게 한다.'
}

function hide() {
  document.getElementById('fig').sry = ''
  document.getElementById('desc').innerHTML = ''
}
