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

dkNavInit()
mobTabNavInit()
