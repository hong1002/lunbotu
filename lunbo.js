var bindEventButton = function() {
    var selector = '.hs-lunbo-button'
    bindAll(selector, 'click', function(event) {
        log('click next')
        var button = event.target
        var index = nextIndex(button)
        showImage(index)
        showIndicator(index)
    })
}

var nextIndex = function(button) {
    var lunbo = button.parentElement
    var numberOfImgs = parseInt(lunbo.dataset.imgs)
    var activeIndex = parseInt(lunbo.dataset.active)
    var offset = parseInt(button.dataset.next)
    var index = (numberOfImgs + activeIndex + offset) % numberOfImgs
    lunbo.dataset.active = index
    return index
}

var showImage = function(index) {
    var nextSelector = '#id-lunbo-' + index
    var className = 'hs-active'
    removeClassAll(className)
    var img = e(nextSelector)
    img.classList.add(className)
}

var showIndicator = function(index) {
    var nextSelector = '#id-indi-' + index
    var className = 'hs-red'
    removeClassAll(className)
    var indi = e(nextSelector)
    indi.classList.add(className)
}

var bindEventIndi = function() {
    var selector = '.hs-lunbo-indi'
    bindAll(selector, 'click', function(event) {
        log('click indi')
        var indi = event.target
        var index = indi.dataset.img
        showImage(index)
        showIndicator(index)
    })
}

var autoPlay = function() {
    setInterval(function() {
      var button = e('.hs-lunbo-button.hs-right')
      button.click()
    }, 3000)
}

var __main = function() {
    bindEventButton()
    bindEventIndi()
    autoPlay()
}
__main()
