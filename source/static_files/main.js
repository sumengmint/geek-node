(function () {
  function loadJS (url, success) {
    var domScript = document.createElement('script')
    domScript.src = url
    domScript.onload = domScript.onreadystatechange = function () {
      if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
        success && success()
        this.onload = this.onreadystatechange = null
        this.parentNode.removeChild(this)
      }
    }
    document.getElementsByTagName('head')[0].appendChild(domScript)
  }

  loadJS('./manifest.783f6dab29fae8c00981.js', function () {
    loadJS('./vendor.eec8d00ae5c40147f896.js', function () {
      loadJS('./app.75d1ba4f4eed17272675.js')
    })
  })
})()

