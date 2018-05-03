function dkNavInit() {
  var top = document.getElementById('top')
  var left = document.getElementById('left')
  var bottom = document.getElementById('bottom')
  var right = document.getElementById('right')

  var topGo = document.getElementById('top-go')
  var leftGo = document.getElementById('left-go')
  var bottomGo = document.getElementById('bottom-go')
  var rightGo = document.getElementById('right-go')


  // on click  
  topGo.onclick = e => {
    top.className = 'top go'
    left.className = 'left'
    bottom.className = 'bottom'
    right.className = 'right'

    topGo.className = 'go'
    leftGo.className = ''
    bottomGo.className = ''
    rightGo.className = ''
  }

  leftGo.onclick = e => {
    top.className = 'top'
    left.className = 'left go'
    bottom.className = 'bottom'
    right.className = 'right'

    topGo.className = ''
    bottomGo.className = ''
    leftGo.className = 'go'
    rightGo.className = ''
  }

  bottomGo.onclick = e => {
    top.className = 'top'
    left.className = 'left'
    bottom.className = 'bottom go'
    right.className = 'right'

    topGo.className = ''
    leftGo.className = ''
    bottomGo.className = 'go'
    rightGo.className = ''
  }

  rightGo.onclick = e => {
    top.className = 'top'
    left.className = 'left'
    bottom.className = 'bottom'
    right.className = 'right go'

    topGo.className = ''
    leftGo.className = ''
    bottomGo.className = ''
    rightGo.className = 'go'
  }
}

function mobTabNavInit() {
  var controller = document.getElementById('mt-controller')
  var top = document.getElementById('top')
  var left = document.getElementById('left')
  var bottom = document.getElementById('bottom')
  var right = document.getElementById('right')

  var topGo = document.getElementById('mt-top')
  var leftGo = document.getElementById('mt-left')
  var bottomGo = document.getElementById('mt-bottom')
  var rightGo = document.getElementById('mt-right')
  
  var open = () => {
    controller.className = 'go'
    controller.innerText = 'Close'
  }
  var close = () => {
    controller.className = ''
    controller.innerText = 'Menu'
  }

  controller.onclick = e => {
    if (controller.className === '') open()
    else close()
  }

  topGo.onclick = e => {
    top.className = 'top go'
    left.className = 'left'
    bottom.className = 'bottom'
    right.className = 'right'
    close()
  }
  leftGo.onclick = e => {
    top.className = 'top'
    left.className = 'left go'
    bottom.className = 'bottom'
    right.className = 'right'
    close()
  }
  bottomGo.onclick = e => {
    top.className = 'top'
    left.className = 'left'
    bottom.className = 'bottom go'
    right.className = 'right'
    close()
  }
  rightGo.onclick = e => {
    top.className = 'top'
    left.className = 'left'
    bottom.className = 'bottom'
    right.className = 'right go'
    close()
  } 
}

function ballSetUp() {
  let top = document.getElementById('animation-top')
  const balls = 1200
  // let delayArray = []
  // for (let i = 0; i < balls; i++) {
  //   delayArray.push(Math.floor(Math.random() * 1000) * 2.5)
  // }
  // delayArray.sort()
  for (let i = 0; i < balls; i++) {
    let newBall = document.createElement('div')
    newBall.className = (i % 10 === 0) ? 'ball red' : 'ball blue'
    let delay = Math.floor(Math.random() * 2000)
    newBall.style.animationDelay = `${delay}ms, 4s, 5s`
    let diameter = Math.floor(Math.random() * 4) * 5 + 10
    newBall.style.width = `${diameter}px`
    newBall.style.height = `${diameter}px`
    newBall.style.left = `${Math.floor(Math.random() * (top.offsetWidth - diameter))}px`
    top.appendChild(newBall)
  }
  const getYOffset = (element, target) => {
    let y = element.offsetTop
    if (element.offsetParent && element.offsetParent.id !== target) y += getYOffset(element.offsetParent)
    return y
  }
  var scrollTarget = getYOffset(document.getElementById('animation-top'), 'right-content') - 400
  console.log(scrollTarget)
  var didScroll = false
  var rightScroll = new SimpleBar(document.getElementById('right-content'))
  rightScroll.getScrollElement().addEventListener('scroll', function() {
    didScroll = true
  })
  var checkYOffset = setInterval(function() {
    if (didScroll) {
      didScroll = false
      var scrollY = rightScroll.getScrollElement().scrollTop
      // console.log(scrollY, 'vs', scrollTarget)
      if (scrollY >= scrollTarget) {
        console.log('trigger me timbers')
        let slider = document.getElementById('slide-text')
        slider.className += ' go'
        setTimeout(function() {
          let balls = document.getElementsByClassName('ball')
          Array.from(balls).forEach(ball => {
            ball.className += ' drop'
          })
          setTimeout(function() {
            let balls = document.getElementsByClassName('red')
            Array.from(balls).forEach(ball => {
              ball.className += ' slide'
            })
            setTimeout(function() {
              let ghosts = document.getElementsByClassName('ghost-text')
              Array.from(ghosts).forEach(ghost => {
                ghost.className += ' summon'
              })
            }, 4000)
          }, 2000)
        }, 2500)
        clearInterval(checkYOffset)
      }
    }
  }, 100)
}

dkNavInit()
mobTabNavInit()
ballSetUp()
